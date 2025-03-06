const connection = require("./dbconn");

function extractExternalLink(description) {
  const linkRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/i;
  const match = description.match(linkRegex);
  let externalLink = null;
  let updatedDescription = description;
  if (match) {
      externalLink = match[1]; // Extract the first hyperlink (href)
      updatedDescription = description.replace(match[0], "").trim(); // Remove only the first <a> tag
  }
  return { externalLink, updatedDescription };
}


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
};

const FetchService = {
  getAllData: async (tableName1, tableName2) => {
    try {
      const sql = `
        SELECT 
            a.ACT_ID AS id, 
            a.ACT_Name AS title, 
            a.ACT_Desc AS description, 
            a.DATE_MADE AS date, 
            a.Place AS location, 
            a.Cover_Picture AS coverImage, 
            a.Pin AS isPinned,
            a.Advisor AS lecturer,
            t.Type_Name AS category,
            i.Image_Path AS imagePath
        FROM ${tableName1} a
        JOIN ${tableName2} t ON a.Type_ID = t.Type_ID
        LEFT JOIN Activity_Images i ON a.ACT_ID = i.ACT_ID
        ORDER BY a.DATE_MADE DESC`;

      const [results] = await connection.execute(sql);

      const data = results.reduce((acc, result) => {
        const { externalLink, updatedDescription } = extractExternalLink(
          result.description
        );
        const existingEntry = acc.find((item) => item.id === result.id);
        if (existingEntry) {
          existingEntry.images.push(result.imagePath);
        } else {
          const { imagePath, ...rest } = result; // Exclude imagePath from the result object
          acc.push({
            ...rest,
            date: formatDate(result.date),
            description: updatedDescription,
            externalLink,
            images: imagePath ? [imagePath] : [],
          });
        }
        return acc;
      }, []);
      return data;
    } catch (err) {
      console.error("Database Error:", err);
      throw err;
    }
  },

  getDataById: async (tableName1, tableName2, id) => {
    try {
      const sql = `
        SELECT 
            a.ACT_ID AS id, 
            a.ACT_Name AS title, 
            a.ACT_Desc AS description, 
            a.DATE_MADE AS date, 
            a.Place AS location, 
            a.Cover_Picture AS coverImage, 
            a.Pin AS isPinned,
            a.Advisor AS lecturer,
            t.Type_Name AS category,
            i.Image_Path AS imagePath
        FROM ${tableName1} a
        JOIN ${tableName2} t ON a.Type_ID = t.Type_ID
        LEFT JOIN Activity_Images i ON a.ACT_ID = i.ACT_ID
        WHERE a.ACT_ID = ?`;

      const [results] = await connection.execute(sql, [id]);

      if (results.length) {
        const { externalLink, updatedDescription } = extractExternalLink(
          results[0].description
        );
        const data = results.reduce((acc, result) => {
          if (!acc) {
            const { imagePath, ...rest } = result; // Exclude imagePath from the result object
            acc = {
              ...rest,
              date: formatDate(result.date),
              description: updatedDescription,
              externalLink,
              images: imagePath ? [imagePath] : [],
            };
          } else {
            acc.images.push(result.imagePath);
          }
          return acc;
        }, null);
        return data;
      }
      return null;
    } catch (err) {
      console.error("Database Error:", err);
      throw err;
    }
  },

  pinDataById: async (id) => {
    try {
      console.log(`Updating Pin for ID: ${id}`); // 🛑 Debug: Log before SQL execution
      const sql = `UPDATE Activity SET Pin = CASE WHEN Pin = 1 THEN 0 ELSE 1 END WHERE ACT_ID = ?`;
      const [result] = await connection.execute(sql, [id]);
      console.log(`Update Result:`, result); // 🛑 Debug: Log SQL result
      return result;
    } catch (err) {
      console.error("Database Error:", err);
      throw err;
    }
  },

  deleteDataById: async (tableName1, id) => {
    try {
      const sql = `DELETE FROM ${tableName1} WHERE ACT_ID = ?`;
      const [result] = await connection.execute(sql, [id]);
      return result;
    } catch (err) {
      console.error("Database Error:", err);
      throw err;
    }
  },
};

module.exports = FetchService;
