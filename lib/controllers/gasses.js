const { Router } = require('express');
const Gas = require('../models/Gas');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const gassesData = await Gas.getAll();
      res.json(gassesData);
    } 
    catch (error) {
      next (error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
   
      const matchingGas = await Gas.getById(req.params.id);
      res.json(matchingGas);
    } catch (error) {
      next (error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newGas = await Gas.insert(req.body);
      res.json(newGas);
    } catch (error) {
      next (error);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const updateGas = await Gas.updateById(req.params.id, req.body);
      res.json(updateGas);
    } catch (error) {
      next (error);
    }
  });
