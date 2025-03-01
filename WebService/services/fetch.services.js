const connection = require("./dbconn");

const FetchService = {
  getAllData: async (tableName1, tableName2) => {
    try {
      const sql = `
        SELECT 
            a.ACT_ID, 
            a.ACT_Name, 
            a.ACT_Desc, 
            a.DATE_MADE, 
            a.Place, 
            a.Cover_Picture, 
            a.Pin, 
            t.Type_Name
        FROM ${tableName1} a
        JOIN ${tableName2} t ON a.Type_ID = t.Type_ID`;

      const [results] = await connection.execute(sql, [tableName1, tableName2]);
      return results;
    } catch (err) {
      console.error("Database Error:", err);
      throw err;
    }
  },

  getDataById: async (tableName1, tableName2, id) => {
    try {
      const sql = `
        SELECT 
            a.ACT_ID, 
            a.Activity_Name, 
            a.Description_ACT, 
            a.DATE_MADE, 
            a.Place, 
            a.Picture, 
            a.Pin, 
            t.Type_Name
        FROM ${tableName1} a
        JOIN ${tableName2} t ON a.Type_ID = t.Type_ID
        WHERE a.ACT_ID = ?`;

      const [results] = await connection.execute(sql, [
        tableName1,
        tableName2,
        id,
      ]);
      return results.length ? results[0] : null;
    } catch (err) {
      console.error("Database Error:", err);
      throw err;
    }
  },
};

module.exports = FetchService;
