const fs = require("fs");
const path = require("path");
const insertService = require("../services/insertSql.services");

const coverDir = "./assets/uploads/img/cover/";
const additionalDir = "./assets/uploads/img/additionalImage/";

// Ensure directories exist
if (!fs.existsSync(coverDir)) fs.mkdirSync(coverDir, { recursive: true });
if (!fs.existsSync(additionalDir)) fs.mkdirSync(additionalDir, { recursive: true });

async function uploadActivity(req, res) {
    try {
        const { title, description, location, advisor, eventDate, type } = req.body;

        const mainImage = req.files && req.files["mainImage"] ? req.files["mainImage"][0] : null;
        const additionalImages = req.files && req.files["additionalImages"] ? req.files["additionalImages"] : [];

        if (!mainImage) {
            return res.status(400).json({ error: "Cover image is required." });
        }

        if (!eventDate || !/^\d{4}-\d{2}-\d{2}$/.test(eventDate)) {
            return res.status(422).json({ error: "Invalid eventDate format. Use YYYY-MM-DD." });
        }

        const parsedDate = new Date(eventDate);
        if (isNaN(parsedDate.getTime())) {
            return res.status(422).json({ error: "Invalid eventDate value. Ensure it's a real date." });
        }

        // Generate unique filename based on current timestamp
        const coverImageName = `coverImage${Date.now()}${path.extname(mainImage.originalname)}`;
        const coverImagePath = path.join(coverDir, coverImageName);
        const coverImageRelativePath = `/cover/${coverImageName}`;

        fs.renameSync(mainImage.path, coverImagePath);

        let additionalImagePaths = [];
        additionalImages.forEach((file, index) => {
            const additionalImageName = `additionalImage${Date.now()}_${index}${path.extname(file.originalname)}`;
            const additionalImagePath = path.join(additionalDir, additionalImageName);
            const additionalImageRelativePath = `/additionalImage/${additionalImageName}`;

            fs.renameSync(file.path, additionalImagePath);
            additionalImagePaths.push(additionalImageRelativePath);
        });

        console.log("Cover Image:", coverImagePath);
        console.log("Additional Images:", additionalImagePaths);

        const activityId = await insertService.insertActivitites(
            title,
            description,
            eventDate,
            location,
            coverImageRelativePath,  // Main image (required)
            0,                   // Default Pin value
            type,
            advisor
        );

        // Insert additional images into `Activity_Images` table
        await insertService.insertAdditionalImages(activityId, additionalImagePaths);

        res.status(200).json({
            message: "Successfully inserted to database",
            activityId,
            coverImagePath,
            additionalImagePaths,
        });

    } catch (error) {
        console.error("Error inserting activity:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function testSys(req, res) {
    try {
      return res.status(200).json({ message: "HelloWorld" });
    } catch (err) {
      console.error(err);
    }
  }

module.exports = { uploadActivity, testSys };
