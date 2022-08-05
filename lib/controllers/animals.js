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
  })

  .post('/', async (req, res, next) => {
    try {
      const newAnimal = await Animal.insert(req.body);
      res.json(newAnimal);
    } catch (error) {
      next (error);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const updateAnimal = await Animal.updateById(req.params.id, req.body);
      res.json(updateAnimal);
    } catch (error) {
      next (error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const deleteAnimal = await Animal.delete(req.params.id);
      res.json(deleteAnimal);
    } catch (error) {
      next (error);
    }
  });

  
