const multer = require("multer");
const path = require("path");

// ตั้งค่าที่เก็บไฟล์
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // ไฟล์จะถูกเก็บที่โฟลเดอร์ uploads/
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // เปลี่ยนชื่อไฟล์กันซ้ำ
    }
});

// ใช้ multer middleware
const upload = multer({ storage: storage });

// ส่งออก middleware
module.exports = upload;
