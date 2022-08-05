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
  });
