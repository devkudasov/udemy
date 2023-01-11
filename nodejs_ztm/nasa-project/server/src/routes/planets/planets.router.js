const express = require('express');

const { getAllPlanets } = require('./planets.controller');

const planersRouter = express.Router();

planersRouter.get('/', getAllPlanets);

module.exports = planersRouter;
