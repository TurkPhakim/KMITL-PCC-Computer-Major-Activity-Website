const mysql = require("mysql2/promise");

// XAMPP
const pool = mysql.createPool({
    host: "mysql",
    user: "root",
    password: "password",
    database: "my_database",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool;