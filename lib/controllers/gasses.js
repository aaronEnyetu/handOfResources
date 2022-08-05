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
  });
