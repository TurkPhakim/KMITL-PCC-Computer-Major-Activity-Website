const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided!' });
    }
    try {
        const tokenValue = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
        console.log("Received Token:", tokenValue);
        
        const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
        if (decoded.role === 1) {
            decoded.role = 'admin';
        } else if (decoded.role === 0) {
            decoded.role = 'user';
        }
        req.user = decoded; 
        console.log("✅ Decoded JWT:", decoded);
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: 'Invalid or expired token!' });
    }
};

module.exports = authMiddleware;
