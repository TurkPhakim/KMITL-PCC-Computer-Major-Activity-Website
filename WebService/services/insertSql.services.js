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
    }
};

module.exports = insertService;