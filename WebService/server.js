const express = require('express'); 
const app = express(); 
const port = 3000;

// กำหนดเส้นทางหลัก (Route)
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to my Express server!');
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
