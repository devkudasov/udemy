const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planersRouter = express.Router();

planersRouter.get('/', httpGetAllPlanets);

module.exports = planersRouter;
