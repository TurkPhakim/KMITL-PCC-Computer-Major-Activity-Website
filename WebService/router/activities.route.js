const express = require("express");
const { getAllActivities, getActivityById, deleteActivityById } = require("../controller/activity.controller");
const route = express.Router();

//GET /activities
route.get("/", getAllActivities);
route.get("/:id", getActivityById);
route.delete("/:id", deleteActivityById);
module.exports = route;
