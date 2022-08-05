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








  
  afterAll(() => {
    pool.end();
  });
});
