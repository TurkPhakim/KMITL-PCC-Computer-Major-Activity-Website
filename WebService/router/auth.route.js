const express = require("express");
const router = express.Router();
const { login, signup, checkRole, logout } = require("../controller/auth.controller.js");
const authMiddleware = require("../Middleware/auth.middleware.js");

router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.post("/signup", signup);
router.get("/checkrole", authMiddleware, checkRole);

module.exports = router;
