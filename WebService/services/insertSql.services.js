const conn = require("./dbconn");

const insertService = {

    insertActivitites: async (title, content, Date, location, CoverImg_Path, Pin = 0, Type_ID, Advisor) => {
        try {

            const insertActivititesSQL = `
            INSERT INTO Activity (
            ACT_Name,
            ACT_Desc,
            DATE_MADE,
            Place,
            Cover_Picture,
            Pin,
            Type_ID,
            Advisor
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?) `;

            const [ActSQLinsertresult] = await conn.execute(insertActivititesSQL,[
                title, content, Date, ,location, CoverImg_Path, Pin, Type_ID, Advisor
            ]);

            return ActSQLinsertresult.insertId;

        } catch (err) {

            console.error("Database Error:", err);
            throw err;

        }
    },

    // Insert additional images linked to ACT_ID
    insertAdditionalImages: async (activityId, imagePaths) => {
        try {
            if (!imagePaths.length) return; // Skip if no additional images

            const insertImageSQL = `
            INSERT INTO Activity_Images (ACT_ID, Image_Path)
            VALUES ${imagePaths.map(() => "(?, ?)").join(", ")}`; // Creates multiple (?, ?) values dynamically

            const values = imagePaths.flatMap(imgPath => [activityId, imgPath]);

            await conn.execute(insertImageSQL, values);
            console.log("Inserted additional images:", imagePaths);

        } catch (err) {
            console.error("Database Error (insertAdditionalImages):", err);
            throw err;
        }
    }
};

module.exports = insertService;