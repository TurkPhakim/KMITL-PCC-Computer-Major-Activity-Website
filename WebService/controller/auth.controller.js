const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const conn = require("../services/dbconn");
require("dotenv").config();

const login = async (req, res) => {
  console.log("Login request received:", req.body);

  const { email, password } = req.body;

  try {
    const [rows] = await conn.query("SELECT * FROM USERS WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) {
      console.log("User not found!");
      return res.status(401).json({ error: "User not found!" });
    }

    const user = rows[0];
    console.log("Found user:", user);

    if (!password || !user.Pass) {
      console.log("Password is undefined!");
      return res.status(401).json({ error: "Invalid credentials!" });
    }

    const isMatch = await bcrypt.compare(password, user.Pass);
    if (!isMatch) {
      console.log("Invalid password!");
      return res.status(401).json({ error: "Invalid credentials!" });
    }

    const token = jwt.sign(
      { id: user.USER_ID, email: user.Email, role: user.Role_Admin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("Token Generated:", token);
    res.json({ message: "Login successful!", token });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { login };
