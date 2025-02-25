const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const conn = require("../services/dbconn");
require("dotenv").config();

const login = async (req, res) => {
  console.log("Login request received:", req.body);

  const { email, password } = req.body;

  try {
    const [rows] = await conn.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) {
      console.log("User not found!");
      return res.status(401).json({ error: "User not found!" });
    }

    const user = rows[0];
    console.log("Found user:", user);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid password!");
      return res.status(401).json({ error: "Invalid credentials!" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Token Generated:", token);
    res.json({ message: "Login successful!", token });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { login };
