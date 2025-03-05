const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const conn = require("../services/dbconn");
require("dotenv").config();

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await conn.query("SELECT * FROM USERS WHERE Email = ?", [email]);

    if (rows.length === 0) {
      console.log("User not found!");
      return res.status(401).json({ error: "User not found!" });
    }

    const user = rows[0];

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
    res.json({ message: "Login successful!", token });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const signup = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await conn.query(
      "INSERT INTO USERS (Email, Username, Pass) VALUES (?, ?, ?)",
      [email, username, hashedPassword]
    );

    if (result.affectedRows === 1) {
      res.status(201).json({ message: "User registered successfully!" });
    } else {
      res.status(500).json({ error: "Failed to register user!" });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const checkRole = async (req, res) => {
  const { role, id } = req.user;

  if (role === undefined) {
    return res.status(400).json({ error: "Role not found in token!" });
  }

  const roleName = role === 1 ? "admin" : "user";
  res.status(200).json({ message: `User role is ${roleName}`, role: `${roleName}` });
};

module.exports = { login, signup, checkRole };
