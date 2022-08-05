const { Router } = require('express');
const Animal = require('../models/Animal');
module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const animalsData = await Animal.getAll();
      res.json(animalsData);
    } 
    catch (error) {
      next (error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const matchingAnimal = await Animal.getById(id);
      res.json(matchingAnimal);
    } catch (error) {
      next (error);
    }
  });
