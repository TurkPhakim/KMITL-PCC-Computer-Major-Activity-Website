const insertService = require("../services/insertSql.services");

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

        console.log("Cover Image:", mainImage.filename);
        console.log("Additional Images:", additionalImages.map(file => file.filename));

        const activityId = await insertService.insertActivitites(
            title,
            description,
            eventDate,
            location,
            mainImage.filename,  // Main image (required)
            0,                   // Default Pin value
            type,
            advisor
        );

        res.status(200).json({ message: "Successfully inserted to database", activityId });

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
