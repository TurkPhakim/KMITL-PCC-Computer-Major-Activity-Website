const express = require("express");
const route = express.Router();
const { login } = require("../controller/auth.controller.js");

route.post("/login", login);

module.exports = route;
