const conn = require("../services/dbconn");

const executeQuery = (sql, params) => {
    return new Promise((resolve, reject) => {
        conn.query(sql, params, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

const uploadActivity = async (req, res) => {
    try {
        console.log("Received Request:", req.body);

        const { Activity_Name, ACT_DESC, DATE_MADE, Place, Pin, Type_ID, Cover_Picture, Picture } = req.body;

        if (!Activity_Name || !ACT_DESC || !DATE_MADE || !Place || !Pin || !Type_ID) {
            console.log(" Missing fields");
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log(" Request Data Valid");

        const coverPicture = Cover_Picture || null;
        const pictures = Array.isArray(Picture) ? Picture : [];
        const pictureJson = JSON.stringify(pictures);

        console.log("Cover Picture:", coverPicture);
        console.log("Pictures:", pictures);
        console.log(" Preparing SQL Query...");

        const sql = `INSERT INTO Activity (Activity_Name, ACT_DESC, DATE_MADE, Place, Cover_Picture, Picture, Pin, Type_ID) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        executeQuery(sql, [Activity_Name, ACT_DESC, DATE_MADE, Place, coverPicture, pictureJson, Pin, Type_ID]);

        console.log(" Database Insert Success");
        res.status(201).json({ message: "Activity uploaded successfully" });

    } catch (error) {
        console.log(" Error:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

module.exports = { uploadActivity };
