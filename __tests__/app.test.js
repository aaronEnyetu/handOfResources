const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  ///////////////////////// FLOWERS /////////////////////////


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

  it('PUT should update an existing planet', async () => {
    const res = await request(app).put('/planets/3').send({ name: 'Terra' });
    expect(res.status).toEqual(200);
    expect(res.body.name).toBe('Terra');
  });

  it('delete should delete a specific planet', async () => {
    const res = await request(app).delete('/planets/9');
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual('9');
  });



  //////////////////////////FRUITS ///////////////////////
  it('/ should return a list of fruits', async () => {
    const res = await request(app).get('/fruits');
    expect(res.body.length).toEqual(7);
  });

  it('/:id should return a specific fruit', async () => {
    const res = await request(app).get('/fruits/3');
    const coyote = {
      id: '3',
      type: 'Coyote Melon',
      is_edible: false
    };
    expect(res.body).toEqual(coyote);
  });

  it('POST should create a new fruit', async () => {
    const res = await request(app).post('/fruits').send({ type: 'sea mango', is_edible: false });
    expect(res.body.type).toEqual('sea mango');
  });

  it('DELETE /fruits/:id should remove an existing fruit', async () => {
    const res = await request(app).delete('/fruits/4');
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual('4');
  });

  it('PUT /fruits/:id should update an existing fruit', async () => {
    const res = await request(app).put('/fruits/4').send({ type: 'Sponge Gourd', is_edible: false });
    expect(res.status).toEqual(200);
    expect(res.body.type).toBe('Sponge Gourd');
  });


  //////////////////////////ANIMALS ///////////////////////

  it('should return a list of animals', async () => {
    const res = await request(app).get('/animals');
    const tiger = res.body.find((animal) => animal.id === '1');
    expect(res.body.length).toEqual(6);
    expect(tiger).toHaveProperty('type', 'Tiger');
    expect(tiger).toHaveProperty('does_tricks', true);
  });

  it('should return a specific animal detail', async () => {
    const res = await request(app).get('/animals/1');
    const expected = {
      id: '1',
      type: 'Tiger',
      lifespan: 26,
      diet: 'Carnivore',
      does_tricks: true
    };
    expect(res.body).toEqual(expected);
  });

  it('POST /animals should create a new animal', async () => {
    const res = await request(app).post('/animals').send({ type: 'Shark', lifespan: 30, diet: 'Carnivore', does_tricks: false });
    
    expect(res.body.type).toBe('Shark');
  });

  it('PUT /animals/:id should update animal', async () => {
    const res = await request(app).put('/animals/6').send({ type: 'Wolf', lifespan: 8, diet: 'Carnivore', does_tricks: false });
    
    expect(res.status).toEqual(200);
  });

  it('DELETE /animals/:id should delete animal', async () => {
    const res = await request(app).delete('/animals/5');
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual('5');

  });


  //////////////////////////GASSES ///////////////////////

  it('/ should return a list of gasses', async () => {
    const res = await request(app).get('/gasses');
    expect(res.body.length).toEqual(4);
  });

  it('should return a specific gas detail', async () => {
    const res = await request(app).get('/gasses/3');
    const hydrogen = {
      id: '3',
      name: 'Hydrogen',
      appearance: 'colorless',
      atomic_number: 1,
      flammable: true
    };
    expect(res.body).toEqual(hydrogen);
  });

  it('POST should create a new gass', async () => {
    const res = await request(app).post('/gasses').send({ name: 'Butane', appearance: 'colorless', atomic_number: 14, flammable: true });
    expect(res.body.name).toBe('Butane');
  });





  
  afterAll(() => {
    pool.end();
  });
});
