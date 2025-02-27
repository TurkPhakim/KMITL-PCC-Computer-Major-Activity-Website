const express = require("express");
const upload = require("../Middleware/upload.js"); // Import multer middleware
const { uploadActivity } = require("../controller/upload.controller.js");

const router = express.Router();

// Upload route (Handles Cover_Picture and multiple Picture uploads)
router.post("/", upload.fields([
    { name: "Cover_Picture", maxCount: 1 },  // Single cover image
    { name: "Picture", maxCount: 5 } // Multiple pictures (max 5)
]), uploadActivity);
router.post("/upload", uploadActivity);

module.exports = router;
