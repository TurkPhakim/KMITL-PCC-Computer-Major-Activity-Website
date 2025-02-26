const express = require("express");
const { getAllActivities, getActivityById } = require("../controller/activity.controller");
const route = express.Router();

//GET /activities
route.get("/", getAllActivities);
route.get("/:id", getActivityById);

module.exports = route;
