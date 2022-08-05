const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  ///////// FLOWERS ///////////


  it('/ should return a list of flowers', async () => {
    const res = await request(app).get('/flowers');
    console.log(res.body);
    const bloom = res.body.find((flower) => flower.id === '1');
    expect(res.body.length).toEqual(5);
    expect(bloom).toHaveProperty('common_name', 'checker bloom');
  });

  it('/flowers/:id should return a specific flower', async () => {
    const res = await request(app).get('/flowers/5');
    expect(res.body.common_name).toBe('cornflower');
  });

  it('POST should create a new flower', async () => {
    const res = await request(app).post('/flowers').send({ common_name: 'iris', color: 'violet', num_petals: 6 });
    expect(res.body.common_name).toBe('iris');
  });

  it('PUT should update an existing flower', async () => {
    const res = await request(app).put('/flowers/3').send({ color: 'pale yellow-green' });
    expect(res.status).toEqual(200);
    expect(res.body.color).toBe('pale yellow-green');
  });

  it('DELETE should remove an existing flower', async () => {
    const res = await request(app).delete('/flowers/1');
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual('1');
  });


  //////////////////////////PLANETS ///////////////////////

  it('/ should return a list of planets', async () => {
    const res = await request(app).get('/planets');
    expect(res.body.length).toEqual(9);
  });

  it('/planets/:id should return a specific planet', async () => {
    const res = await request(app).get('/planets/2');
    expect(res.body.name).toEqual('Venus');
  });

  it('POST should add a new planet', async () => {
    const res = await request(app).post('/planets').send({ name: 'Ceres', radius_miles: 294 });
    console.log('res', res);
    expect(res.body.name).toEqual('Ceres');
  });







  
  afterAll(() => {
    pool.end();
  });
});
