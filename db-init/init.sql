-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 02, 2025 at 06:55 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Team_Project`
--

-- --------------------------------------------------------

--
-- Table structure for table `Activity`
--
CREATE DATABASE Team_Project;
USE Team_Project;
CREATE TABLE `Activity` (
  `ACT_ID` int(11) NOT NULL,
  `ACT_Name` varchar(180) NOT NULL,
  `ACT_Desc` text DEFAULT NULL,
  `DATE_MADE` date DEFAULT NULL,
  `Place` varchar(50) DEFAULT NULL,
  `Cover_Picture` varchar(100) DEFAULT NULL,
  `Pin` tinyint(1) DEFAULT 0,
  `TYPE_ID` int(11) DEFAULT NULL,
  `Advisor` VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Activity`
--

INSERT INTO `Activity` (`ACT_ID`, `ACT_Name`, `ACT_Desc`, `DATE_MADE`, `Place`, `Cover_Picture`, `Pin`, `TYPE_ID`,`Advisor`) VALUES
(1, 'นำเสนอการฝึกสหกิจศึกษา', 'การนำเสนอผลงานสหกิจศึกษา ของนักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 4 หลังจากไปฝึกประสบการณ์วิชาชีพที่สถานประกอบการ เป็นเวลา 6 เดือน', '2021-12-24', 'สหกิจศึกษา', 'uploads/cover1.jpg', 0, 1,'อ.ดร.รัตติกร  สมบัติแก้ว'),
(2, 'แนะแนวการเรียนต่อให้กับน้องๆ ที่โรงเรียนสวนศรีวิทยา ', 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบังได้จัดแนะแนวการเรียนต่อให้กับน้องๆ โรงเรียนสวนศรีวิทยา แนะนำหลักสูตรของสถาบันในแต่ละสาขา แผนการเรียนต่อ', '2022-09-01', 'โรงเรียนสวนศรีวิทยา', 'uploads/cover2.jpg', 0, 1,'ไม่มีอาจารย์ที่ปรึกษา'),
(3, 'ค่ายฝึกประสบการณ์', 'ค่ายฝึกประสบการณ์และอาจารย์พี่เลี้ง ณ สจล.ชุมพร ซึ่งช่วงเช้าเป็นการเข้าอบรมเกี่ยวกับ Computer Network โดยอาจารย์อรรถศาสตร์ นาคเถวัญ หัวข้อหลักๆเบื้องต้น คือ Network Topology, Cables Connectors, Config IP Address, Wireless, Switch Router', '2022-10-26', 'อาคาร B', 'uploads/cover3.jpg', 0, 1,'อ.อรรถศาสตร์ นาคเถวัญ'),
(4, 'Pre Engineering Camp', 'ค่ายเตรียมวิศวกรรมศาสตร์พระจอมเกล้าลาดกระบังชุมพรที่มีน้องๆ มัธยมศึกษาปีที่ 6 จากโรงเรียนมัธยม', '2023-08-17', 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', 'uploads/cover4.jpg', 0, 1,'ไม่มีอาจารย์ที่ปรึกษา'),
(5, 'พี่ ๆ ปี 3 สอนน้อง ๆ ปี 1 เขียนโปรแกรมคอมพิวเตอร์','กิจกรรมดี ๆ จากสาขาวิศวกรรมคอมพิวเตอร์ พี่ ๆ ปี 3 สอนน้อง ๆ ปี 1 เขียนโปรแกรมคอมพิวเตอร์.', '2023-09-11', 'อาคาร B', 'uploads/cover5.jpg', 0, 1,'อ.นภัสรพี สิทธิวัจน์'),
(6, 'แนะแนวการฝึกงานกับ บริษัท ฟรีวิลล์ โซลูชั่นส์ จำกัด ', 'สาขาวิศวกรรมคอมพิวเตอร์ ขอขอบคุณ บริษัท ฟรีวิลล์ โซลูชั่นส์ จำกัด ที่มาแนะแนวการฝึกงานกับ บริษัท ฟรีวิลล์ โซลูชั่นส์ จำกัด ให้แก่นักศึกษาชั้นปีที่ 2 และ 3 เพื่อเตรียมความพร้อมก่อนการไปฝึกงาน', '2023-09-27', 'อาคาร E', 'uploads/cover6.jpg', 0, 1,'อ.อรรถศาสตร์ นาคเทวัญ'),
(7, 'อบรมการใช้งานเครื่องมือวัดทางไฟฟ้า', 'ขอขอบคุณ บริษัท ไทร์เนอร์ยี่ อินสทรูเม้นท์ จำกัด ที่มาอบรมการใช้งานเครื่องมือวัดทางไฟฟ้าให้กับน้องๆนักศึกษาชั้นปีที่ 1 สาขาวิชาวิศวกรรมคอมพิวเตอร์', '2023-10-11', 'อาคาร E', 'uploads/cover7.jpg', 0, 1,'ไม่มีอาจารย์ที่ปรึกษา'),
(8, 'นำเสนอโครงงาน รายวิชา COMPUTER HARDWARE DESIGN ของพี่ๆ ปี3 ', 'การนำเสนอโครงงาน รายวิชา COMPUTER HARDWARE DESIGN ของพี่ๆ ปี3 สาขาวิศวกรรมคอมพิวเตอร์ บอกเลยมีแต่ชิ้นงานน่าสนใจ https://photos.app.goo.gl/vf2FhvqF7bcNXJi2A', '2023-11-10', 'ลานวัฒนธรรม', 'uploads/cover8.jpg', 0, 1,'อ.ว่าที่ ร.ต.ศิลา  ศิริมาสกุล'),
(9, 'Byenior ITE', 'งานเลี้ยงส่งท้ายรุ่นพี่ ITE มีกิจกรรมสนุกสนานมากมายให้เข้าร่วม จับฉลากแจกรางวัล เกมพื้นบ้าน นั่งฟังเพลงชิวๆสบายๆ https://photos.app.goo.gl/RxZrGoRLe4nJfJGE6', '2024-04-01', 'หาดพระจอม', 'uploads/cover9.jpg', 0, 1,'ไม่มีอาจารย์ที่ปรึกษา'),
(10, 'ค่ายวิศวกรรมศาสตร์ ลาดกระบังชุมพร ', 'ค่ายเตรียมวิศวกรรมศาสตร์พระจอมเกล้าลาดกระบังชุมพรที่มีน้องๆ มัธยมศึกษาปีที่ 6 จากโรงเรียนมัธยมกิจกรรมดังกล่าว นำทีมโดย ผศ.ดร.ณัฐพงศ์ รัตนเดช และคณาจารย์ประจำภาควิชาวิศวกรรมศาสตร์ และทีมพี่ๆ นักศึกษาวิศวกรรมศาสตร์ https://photos.app.goo.gl/X5UCLEMSa7gnP2BU8', '2024-08-15', 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', 'uploads/cover10.jpg', 0, 1,'ไม่มีอาจารย์ที่ปรึกษา'),
(11, 'แลกเปลี่ยนประสบการณ์ศึกษาดูงาน หน่วยงาน สจล. กทม. และบริษัทเอกชน จากพี่ปี 3 ให้น้องปี 2 เเละน้องปี 1 ', 'การนำเสนอผลจากการศึกษาดูงาน ของนักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 4 หลังจากไปฝึกประสบการณ์วิชาชีพที่สถานประกอบการ เป็นเวลา 3 เดือนแนะนำแนวทางการฝีกงานให้กับน้องๆชั้นปีที่ 2 และ 1 https://photos.app.goo.gl/C4PyEVwJY25TmetV8', '2024-09-21', 'อาคาร E', 'uploads/cover11.jpg', 0, 1,'อ.ดร.รัตติกร  สมบัติแก้ว'),
(12, 'ศึกษาดูงาน หน่วยงาน สจล. กทม. และบริษัทเอกชน ของปี3', 'ศึกษาดูงานและแลกเปลี่ยนประสบการณ์ เรียนรู้สิ่งใหม่ๆ จาก สจล. กทม. https://photos.app.goo.gl/5SNdhKbqXvsdQGzc8 ', '2024-09-03', 'อาคาร E', 'uploads/cover12.jpg', 0, 1,'ไม่มีอาจารย์ที่ปรึกษา'),
(13, 'การนำเสนอโครงงาน ของสาขาคอมพิวเตอร์ ', 'นำเสนอโครงงานของนักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ชั้นปีที่ 3 และ 1" https://photos.app.goo.gl/AvuzQpZgqmH6yMjf7', '2024-10-08', 'อาคาร E', 'uploads/cover13.jpg', 0, 1,'อ.ว่าที่ ร.ต.ศิลา  ศิริมาสกุล'),
(14, 'อบรมเครือข่ายคอมพิวเตอร์', 'อบรมเครือข่ายคอมพิวเตอร์ และการวางระบบสำหรับ Server https://photos.app.goo.gl/BwuF7EJSWkNCc94J9', '2024-11-20', 'อาคาร B', 'uploads/cover15.jpg', 0, 1,'อ.อรรถศาสตร์ นาคเทวัญ'),
(15, 'อบรมชินนสาสมาธิของนักศึกษาชั้นปีที่ 4', 'อบรมชินนสาสมาธิของนักศึกษาชั้นปีที่ 4 สาขาวิศวกรรมคอมพิวเตอร์ โดยสถาบันพลังจิตตานุภาพ คณะอนุกรรมการหลักสูตรสมาธิในอุดมศึกษา https://photos.app.goo.gl/XWS1pKmXXybj17tW9', '2024-11-30', 'อาคาร E', 'uploads/cover16.jpg', 0, 1,'อ.ดร.รัตติกร  สมบัติแก้ว'),
(16, 'Open house ลาดกระบังชุมพร', 'เตรียมตัวให้พร้อมแล้วพบกับ Open House สจล.วิทยาเขตชุมพรเขตรอุดมศักดิ์ จังหวัดชุมพรเปิดบ้าน ลาดกระบังชุมพร เปิดหมด ไม่มีกั๊ก เปิดกันแบบหมดเปลือก ให้น้องได้ดูสาขาที่ใช่ เลือกหลักสูตรที่ชอบในวันที่ 12 กุมภาพันธ์ 2567 ณ ดินแดนลาดกระบังชุมพร ไม่ว่าจะรุ่นเล็ก รุ่นใหญ่ รุ่นไหนเราก็พร้อมรับ ไม่ว่าจะเป็นสายวิทย์ สายศิลป์ สายเทคนิค พาณิชย์ มากันได้เลย เราเปิดบ้านรอแล้ว https://photos.app.goo.gl/cYLVYzRwp6k3ZaDz6', '2024-12-13', 'อาคาร E', 'uploads/cover17.jpg', 0, 1,'ไม่มีอาจารย์ที่ปรึกษา'),
(17, 'การนำเสนอโครงงานสหกิจศึกษา ของพี่ ๆ ชั้นปีที่ 4', 'หลักสูตรวิศวกรรมคอมพิวเตอร์ได้จัดให้มีกิจกรรม \"การนำเสนอโครงงานสหกิจศึกษา\" ของพี่ ๆ ชั้นปีที่ 4 หลังจากไปทำสหกิจศึกษา ณ สถานประกอบการ ตลอดภาคการศึกษาที่ 1/2567 บรรยากาศการนำเสนอเป็นไปแบบเข้มข้นปนเสียงฮา น้อง ๆ ได้รับการถ่ายทอดประสบการณ์เหมือนกับได้ไปฝึกงานเอง สร้างแรงจูงใจให้น้อง ๆ ในการออกไปฝึกงานกันอย่างถ้วนหน้า', '2024-12-18', 'อาคาร E', 'uploads/cover18.jpg', 0, 1,'อ.ดร.รัตติกร  สมบัติแก้ว'),
(18, 'แลกเปลี่ยนประสบการณ์ฝึกงานและสหกิจศึกษา โดยพี่ ๆ ชั้นปีที่ 4', 'หลักสูตรวิศวกรรมคอมพิวเตอร์ได้จัดกิจกรรม “แลกเปลี่ยนประสบการณ์ฝึกงานและสหกิจศึกษา” โดยพี่ ๆ ชั้นปีที่ 4 ได้ร่วมแบ่งปันประสบการณ์หลังจากการฝึกงานและสหกิจศึกษาในสถานประกอบการต่าง ๆ ซึ่งได้บรรยายถึงสิ่งที่เรียนรู้ รวมถึงแนวทางในการเตรียมตัวสำหรับการฝึกงานและสหกิจศึกษา เพื่อให้น้อง ๆ มีความพร้อมและมั่นใจยิ่งขึ้น กิจกรรมยังมีช่วงถามตอบกับรุ่นพี่ พร้อมของรางวัลสร้างบรรยากาศที่สนุกสนานและผ่อนคลาย https://photos.app.goo.gl/NoC92Nvtu91DDrbH6', '2025-01-12', 'กรุงเทพ', 'uploads/cover19.jpg', 0, 1,'อ.ดร.รัตติกร  สมบัติแก้ว');

-- --------------------------------------------------------

--
-- Table structure for table `Activity_Images`
--

CREATE TABLE `Activity_Images` (
  `Image_ID` int(11) NOT NULL,
  `ACT_ID` int(11) DEFAULT NULL,
  `Image_Path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Activity_Images`
--

INSERT INTO `Activity_Images` (`Image_ID`, `ACT_ID`, `Image_Path`) VALUES
(1, 1, 'uploads/activity1_pic1.jpg'),
(2, 1, 'uploads/activity1_pic2.jpg'),
(3, 2, 'uploads/activity2_pic1.jpg'),
(4, 3, 'uploads/activity3_pic1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `TYPE_HAVE`
--

CREATE TABLE `TYPE_HAVE` (
  `TYPE_ID` int(11) NOT NULL,
  `TYPE_NAME` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `TYPE_HAVE`
--

INSERT INTO `TYPE_HAVE` (`TYPE_ID`, `TYPE_NAME`) VALUES
(1, 'activity'),
(2, 'news');

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `USER_ID` int(11) NOT NULL,
  `Username` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Pass` varchar(255) DEFAULT NULL,
  `Role_Admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `USERS`
--

INSERT INTO `USERS` (`USER_ID`, `Username`, `Email`, `Pass`, `Role_Admin`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2a$12$nRpeYbQ37wbhdv.Ob9Eo5u3whxBp2oHfv7V7zKv03gUVLH4QhMaiq', 1),
(2, 'user1', 'user1@gmail.com', '1234', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Activity`
--
ALTER TABLE `Activity`
  ADD PRIMARY KEY (`ACT_ID`),
  ADD KEY `TYPE_ID` (`TYPE_ID`);

--
-- Indexes for table `Activity_Images`
--
ALTER TABLE `Activity_Images`
  ADD PRIMARY KEY (`Image_ID`),
  ADD KEY `ACT_ID` (`ACT_ID`);

--
-- Indexes for table `TYPE_HAVE`
--
ALTER TABLE `TYPE_HAVE`
  ADD PRIMARY KEY (`TYPE_ID`);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD PRIMARY KEY (`USER_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Activity`
--
ALTER TABLE `Activity`
  MODIFY `ACT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `Activity_Images`
--
ALTER TABLE `Activity_Images`
  MODIFY `Image_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `TYPE_HAVE`
--
ALTER TABLE `TYPE_HAVE`
  MODIFY `TYPE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `USER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Activity`
--
ALTER TABLE `Activity`
  ADD CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`TYPE_ID`) REFERENCES `TYPE_HAVE` (`TYPE_ID`) ON DELETE SET NULL;

--
-- Constraints for table `Activity_Images`
--
ALTER TABLE `Activity_Images`
  ADD CONSTRAINT `activity_images_ibfk_1` FOREIGN KEY (`ACT_ID`) REFERENCES `Activity` (`ACT_ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
