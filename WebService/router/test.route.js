const express = require('express');
const { testSys } = require("../controller/test.controller.js");
const route = express.Router();

route.get('/test', testSys);

module.exports = route;