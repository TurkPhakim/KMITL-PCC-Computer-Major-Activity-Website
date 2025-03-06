const express = require("express");
const { getAllActivities, getActivityById, deleteActivityById, pinActivityById } = require("../controller/activity.controller");
const authMiddleware = require("../Middleware/auth.middleware.js");
const adminMiddleware = require("../Middleware/admin.middleware.js");
const route = express.Router();

//GET /activities
route.get("/", getAllActivities);
route.get("/:id", getActivityById);
route.patch("/Pin/:id", authMiddleware, adminMiddleware, pinActivityById);
route.delete("/:id", authMiddleware, adminMiddleware, deleteActivityById);

module.exports = route;