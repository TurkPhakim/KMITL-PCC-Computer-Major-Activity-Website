const express = require("express");
const route = express.Router();
const { login, signup, checkRole } = require("../controller/auth.controller.js");
const authMiddleware = require("../Middleware/auth.middleware.js");

route.post("/login", login);
route.post("/signup", signup);
route.get("/checkrole", authMiddleware, checkRole);

module.exports = route;
