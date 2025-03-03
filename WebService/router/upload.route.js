const express = require("express");

const { uploadActivity, testSys } = require("../controller/upload.controller.js");
const upload = require("../Middleware/upload.middleware.js"); // Import multer middleware

const route = express.Router();

// Upload route (Handles Cover_Picture and multiple Picture uploads)
route.post("/activity", upload.fields([
    { name: "mainImage", maxCount: 1 },  // Single cover image
    { name: "additionalImages", maxCount: 5 } // Multiple pictures (max 5)
]), uploadActivity);

route.get("/test", testSys)
module.exports = route;
