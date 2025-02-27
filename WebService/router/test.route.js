const express = require("express");
const {
  testSys,
  testJWT,
  testgenToken,
} = require("../controller/test.controller.js");
const route = express.Router();
const authMiddleware = require("../Middleware/authMiddleware.js");
const adminMiddleware = require("../Middleware/adminMiddleware.js");
route.get("/test", testSys);
route.get("/testAuth", authMiddleware, testJWT);
route.get("/testgenToken", testgenToken);
route.post("/testAdmin", authMiddleware, adminMiddleware);
module.exports = route;
