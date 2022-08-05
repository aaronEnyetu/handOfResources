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