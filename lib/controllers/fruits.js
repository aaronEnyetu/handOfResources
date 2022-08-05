const { Router } = require('express');
const Fruit = require('../models/Fruit');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const fruits = await Fruit.getAll();
      res.json(fruits);
    } catch (error) {
      next (error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const singleFruit = await Fruit.getById(req.params.id);
      res.json(singleFruit);
    } catch (error) {
      next (error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newFruit = await Fruit.insert(req.body);
      res.json(newFruit);
    } catch (error) {
      next (error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try { 
      const deletedFruit = await Fruit.delete(req.params.id);
      res.json(deletedFruit);
    } catch (error) {
      next (error);
    }
  });
