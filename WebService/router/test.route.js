const express = require("express");

const {
  testSys,
  testJWT,
  testgenToken,
  imgtest
} = require("../controller/test.controller.js");

const route = express.Router();
const authMiddleware = require("../Middleware/auth.middleware.js");
const adminMiddleware = require("../Middleware/admin.middleware.js");
const upload = require("../Middleware/upload.middleware.js")


route.get("/test", testSys);
route.get("/testAuth", authMiddleware, testJWT);
route.get("/testgenToken", testgenToken);
route.post("/testAdmin", authMiddleware, adminMiddleware);
route.post("/imgTest", upload.single("image"), imgtest);

module.exports = route;
