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
  `USER_ID` int PRIMARY KEY AUTO_INCREMENT,
  `Username` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL UNIQUE, 
  `Pass` varchar(255) DEFAULT NULL,
  `Role_Admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `USERS`
--

INSERT INTO `USERS` (`Email`, `Username`, `Pass`) VALUES
('64200002@kmitl.ac.th', '64200002', '$2a$12$VSLkrUlsww3/32nVXHNjEO2G52YDLpPhaup7VA1v/6iYNlOT5Pxay'),
('64200030@kmitl.ac.th', '64200030', '$2a$12$jBp8myj3Mim.gGo6n/qSAunZ7xgZtsJbYi7Dp6ZTHoSBvNCy7RLI.'),
('64200035@kmitl.ac.th', '64200035', '$2a$12$ZD9nbgWD8V4b0jb..CQHVe9ZlA.i/1wNH9a7S4cQelMxkGsOaHDk.'),
('64200039@kmitl.ac.th', '64200039', '$2a$12$EYlNAfOO06xgn2FP3tDjeeVn3OzNvFX0dpVH3i4kYTY9OyR6rCzLm'),
('64200042@kmitl.ac.th', '64200042', '$2a$12$x7DTeld7nC/UjtFazsowpOPXrPcVj/JxJl2EGnZ4h3HoR9uVRwn4.'),
('64200055@kmitl.ac.th', '64200055', '$2a$12$jWT57Ck5ISZbHguVfEh/0eYoowRH.dYQT185IKCgTUbZ9btzI1xTi'),
('64200058@kmitl.ac.th', '64200058', '$2a$12$yG8Oigs7tA9h0lT.MOaRw.U6gSD7t4HRKKSvWjtaFiE3vrMC0ZT7i'),
('64200061@kmitl.ac.th', '64200061', '$2a$12$cZ035ZnfkuAPwpK9B.vB1.1wEffWOifcPVbnOrLIJpZgquPIkoUlO'),
('64200063@kmitl.ac.th', '64200063', '$2a$12$feESwQK5n8fjn1uVHV4t/.S7S1xIm0UkXyLiFR4h4QlCG803M7SFu'),
('64200081@kmitl.ac.th', '64200081', '$2a$12$iYcJ8TwOZ13wDEnOx4Jfu.nPBDTOvvpCHLVb3seBqHDTO6F3iiSXi'),
('64200087@kmitl.ac.th', '64200087', '$2a$12$YAKY.r9rFFmZlXLcyRCTteM3LZzKVmc0k./i7E9CYtHDG8sHG9b3G'),
('64200094@kmitl.ac.th', '64200094', '$2a$12$A8xFKx30Af263nK8XXq8yOfT8B5ZBGRgUFeidSjrLJmaqj8t2m94S'),
('64200106@kmitl.ac.th', '64200106', '$2a$12$YTNtuEtAszx8OG0n34VJc.RgIXVPNXps02wkbDDLrN7lc5ZHeq5YG'),
('64200112@kmitl.ac.th', '64200112', '$2a$12$D2rqV0D2643FFSGmkhEUR.dWjI/Jcf7DjzLOAfGquk0a3sp/Otx7m'),
('64200123@kmitl.ac.th', '64200123', '$2a$12$xXJQZnFzSxe/6vQ7Q20RbOOPZC2AnKSRmaIakt9Ek2wFws8W3tO6e'),
('64200129@kmitl.ac.th', '64200129', '$2a$12$EBeokN8KIm3oZsN7xdz9uulr4ibySfoY7/rJyeX4d6BNfk5dkyW92'),
('64200130@kmitl.ac.th', '64200130', '$2a$12$XVpa6zuqDp2WaOdmMv74Ru4eboFINGUUWNAm3s/sOZd1DeKT/4PZq'),
('64200135@kmitl.ac.th', '64200135', '$2a$12$nI74xCT6SxrRTL25enhWeebbiplYhZyquqYie6O4qhdA2JA4hCwhS'),
('64200137@kmitl.ac.th', '64200137', '$2a$12$yHoaPxm0tdV2hyMcLHTWAu1tXhSr/2obPeOfNmQI0g8WVWbB70MDm'),
('64200146@kmitl.ac.th', '64200146', '$2a$12$M2.o.HYqe8daM1k9Yyy/BO9XMjQviuQRJDlc8IY1COoKTreKl8miu'),
('64200152@kmitl.ac.th', '64200152', '$2a$12$LPi/CsiJXE84cu7doH9ANObdTvRmh/4oxembXAkixc7y4pG8FMzO.'),
('64200160@kmitl.ac.th', '64200160', '$2a$12$fJPDHMQu3lyMvNaDoPmfQuHDvMAvosh2jrSLHjq0qPwfneHIXFrvi'),
('64200185@kmitl.ac.th', '64200185', '$2a$12$jA1e4cUtwl37uJw9dpSi/OGzepRbTG2dJEcXYV5eAWtOdFDgtGI3C'),
('64200191@kmitl.ac.th', '64200191', '$2a$12$hUvzbRm8brZ4Z/7EmRydpOhXhFzjZULc9nc8AqrJ2wriqxg1UdzmS'),
('64200192@kmitl.ac.th', '64200192', '$2a$12$ZubYmAGtcTybJ83HECGZWeCk2OtyffRikszqqudUGHlEeaMaEB0.C'),
('64200193@kmitl.ac.th', '64200193', '$2a$12$20Fa9biJxKEoz8FfsmsHe.xR.HQEFmzVoJUPXovcR0mDTDTWVEy16'),
('64200203@kmitl.ac.th', '64200203', '$2a$12$KxYwY.9pgf.hWrWyVxLsa.E9mVqOrQXbIncTfru7hHFZE08QpzEEm'),
('64200232@kmitl.ac.th', '64200232', '$2a$12$5/uRxt5JT/leVrjzlfvwSeyK64baxkjx5Wh2i0ge8riu5EKlenx.W'),
('64200247@kmitl.ac.th', '64200247', '$2a$12$zQCtaud4giSLw5zTiTxtDuHel8aBH2FTY6g.9DeYG5Yl3zcyBeWsq'),
('64200255@kmitl.ac.th', '64200255', '$2a$12$UgPpKsmpWflI.pYGtKSJm.QQsL1P1s75Cf5coR8YhKZR.F9CJepXC'),
('64200258@kmitl.ac.th', '64200258', '$2a$12$yDmtsCLzka3nTMBkIe4Z3uhGnnISxKHyM5aohhWuByU1eMlz7V4U2'),
('64200273@kmitl.ac.th', '64200273', '$2a$12$FssZXfDcu0FWPZjhSgR5JeMWJrgbNDZeNr8SM8MgefJZvPT8dUbeO'),
('64200284@kmitl.ac.th', '64200284', '$2a$12$oC/LiCizVe9COYIuPTmjbe9x2wlcGxFp127fAD27bFYm6mleUrxMW'),
('64200289@kmitl.ac.th', '64200289', '$2a$12$Bdd5UFG26YYmXgTb4MufYOz2HCKLQhdmu4aCAJCSqKOa9OxuBSvfm'),
('64200290@kmitl.ac.th', '64200290', '$2a$12$yPZZ.XsdkJjECZ92CieRs.QWEDkcuNuBjI/b9txeKx1X4Fu1unLD6'),
('64200312@kmitl.ac.th', '64200312', '$2a$12$10bkK3FOTgPhWDZ8ZjEyu.6jzyLbMoQgfeFAZ4hGgOluxmhEq2UWS'),
('64200343@kmitl.ac.th', '64200343', '$2a$12$gNCGqHbNgR16ywz/kssseuS9AcfNaDkf8fts5Hk6MxO7QePBcYYca'),
('64200346@kmitl.ac.th', '64200346', '$2a$12$kgeXRFiMAlyLJGXjd6BVReybKysjEbqJMirg8Y.Aq6YiFlgo42l5m'),
('64200358@kmitl.ac.th', '64200358', '$2a$12$Wpzb4e0lyusSUr7W4lxhaev/Zi07ghu4PYsaPCfGby2G4JMitz8VG'),
('64200369@kmitl.ac.th', '64200369', '$2a$12$AJt37OzWfQGGCJPtRbJX1uSaagaT948wDJzHfYYKkX/xVSghiODAe'),
('64200374@kmitl.ac.th', '64200374', '$2a$12$SfqRUyFANJ0jYUECcW1TTuI67MIbNbX7A3Af4DBgzXI8xGonBTSua'),
('64200377@kmitl.ac.th', '64200377', '$2a$12$yItFIQHFKA1eQ/uxqUuqDuBNnpWiQMWoJSFCJTVUJd0R1SEaMdrSy'),
('65200006@kmitl.ac.th', '65200006', '$2a$12$YLDiMVxQm4bWIW52Gi8CGeJ2wM48RnpfVXk/b4uIC2tLcJGVXv5Sy'),
('65200009@kmitl.ac.th', '65200009', '$2a$12$czCOEFAB0dqw1yzLMIHXq.Rx.9RLP3vozQG8jtIvn3k/h8YhII9fy'),
('65200010@kmitl.ac.th', '65200010', '$2a$12$ZdH0u8lEga8bJGv/bZ9XYuINGMar/aH7XYMY/ggfZJgdHAybl/lqy'),
('65200013@kmitl.ac.th', '65200013', '$2a$12$nOm6maV7hhaA/FfzLXDvnOddyR0UoSRXxUgMW10ogt95kbXJfomei'),
('65200015@kmitl.ac.th', '65200015', '$2a$12$RLTw7cC2LxYpWr.pI9lJie0XZxb5ZXe3jMprIJ.TgwZieFMBQ4K82'),
('65200020@kmitl.ac.th', '65200020', '$2a$12$hdK4VNKfGkuNlPQKC9AhdO8dq7D6fs9Ts7Zahyiju0IdFrXVv7qRq'),
('65200027@kmitl.ac.th', '65200027', '$2a$12$k.cYiWBbaIt0xWOXMYE38uf14iZ.OaAibdtT/c2vBjeXIshSHux.G'),
('65200033@kmitl.ac.th', '65200033', '$2a$12$sRg2Ao46w.PAJOh9SPB8SemonVv.elREOCvLCfSE3jBZkUf1.Zywa'),
('65200035@kmitl.ac.th', '65200035', '$2a$12$YkB4B6MWxfURN83mv/Nc8enUtpsHtWUZMWn61Z.gLaJ0D9ngMTzzO'),
('65200037@kmitl.ac.th', '65200037', '$2a$12$St9ySzb7U7.13Oqr.kZN1eFcr7gqGoQ7URAo5b4Oz2lR3IR1QHkF6'),
('65200039@kmitl.ac.th', '65200039', '$2a$12$K8b2QRiHuCUL2x3YsWILyuH4LFKNteSduTGDMTTlspMDKw.GkGWby'),
('65200046@kmitl.ac.th', '65200046', '$2a$12$3e8/bJF/4OKw53E.Cv/Xy.tzXJNV/CuNkRUUdU9XAp7kNClKMowN6'),
('65200048@kmitl.ac.th', '65200048', '$2a$12$jRivdowOsfTfN4Y9Cy2BnOhC8BI/qlBO7VzhvwxjZe8XktSAOIC3G'),
('65200056@kmitl.ac.th', '65200056', '$2a$12$uYTSoKEaxERkbsK7LzeRZucDV12ri9.sBemvBIiOHkL6wU1VUpT1a'),
('65200066@kmitl.ac.th', '65200066', '$2a$12$zrXRGSH4nDubejmoPI6WQeOF/9pkM8oi4D2it.OxzJHEDTec9ZyEu'),
('65200078@kmitl.ac.th', '65200078', '$2a$12$yyfYB4CU7X1AySTFN1OKWOVJRiZ77tEeYy8yJMi8uBG8E2NYz5B92'),
('65200079@kmitl.ac.th', '65200079', '$2a$12$g6Wyii0OEW4EU5fm5Y8h6OnGTBeMjm.TvzjAm/GRdHDPBqfppocIO'),
('65200084@kmitl.ac.th', '65200084', '$2a$12$a.7PmykJtw8MfQysU6JH7eBEsekH.zOPz6mBtAwRjrfy1A0Db6R/K'),
('65200089@kmitl.ac.th', '65200089', '$2a$12$HaAYKYAUfnjHu4nn.QU2yeuBvz3p6FkFyJTqBoyW23RxAOkHeU9Mi'),
('65200093@kmitl.ac.th', '65200093', '$2a$12$qiZwmk4p9H4lfTDVt6Zwf.eVzlBHPFgE.D8tVw3OvRbB2tL/Rzy0C'),
('65200095@kmitl.ac.th', '65200095', '$2a$12$..6G0olZ5STi0gWkH70QHu6Bx8frdtJW9K/OWtPYR7v3jf2sdUlLC'),
('65200097@kmitl.ac.th', '65200097', '$2a$12$Pw2Yv8.5GWxgdlDEs3c6vOZxuPLA9YOTAib3OBgRBri/yGeJE1osa'),
('65200099@kmitl.ac.th', '65200099', '$2a$12$SW7vG952.x6sGuDLcMlhou4X2VEYJ2DuJbc5BtTWr9Wbp85fH/BPq'),
('65200100@kmitl.ac.th', '65200100', '$2a$12$kgcsfKozl8.bo0qZYNa3iOah22f2.KQeG5hafaDZ.sCFPhWT9822W'),
('65200103@kmitl.ac.th', '65200103', '$2a$12$2bBge5HQJGJ0rDNKuLjpresHYG6a0Vgk7wohAzkUgrGahMK8p1Djy'),
('65200113@kmitl.ac.th', '65200113', '$2a$12$CZgYWTgyFqqSLvkUtOMwC.NRUAOXlbLHH9eeUHcxKaNuYMMcgdRMq'),
('65200119@kmitl.ac.th', '65200119', '$2a$12$CSlh6tfmfNCAe/t1cAWnnOCF3b6vqiCnVkxpJKiMWdubh9E5YWr9u'),
('65200122@kmitl.ac.th', '65200122', '$2a$12$GmZhN4tUHjNut18sus9wIewHRHRxbHE1tFN4hSV45j26MbFElLDoS'),
('65200123@kmitl.ac.th', '65200123', '$2a$12$2OoBbk5d6j8ToC4Yzoix1u7/HFbv0z70PVRTL4UT0DQ20/R/zmfGm'),
('65200128@kmitl.ac.th', '65200128', '$2a$12$i0w8kz7PT3xMK/z/t9nJUuU4t.sKjdfCGfm7mrgOd4qDRziR6m.P6'),
('65200129@kmitl.ac.th', '65200129', '$2a$12$oUTal1GR2G48nhk6I5k0MOVLUTyEGHDO1raVIeXKCiCYcBHicN.9.'),
('65200133@kmitl.ac.th', '65200133', '$2a$12$4vv.Pr4fjH6tphKTILNu3OsyfhJmB6Nua0uaxchEqipVEPcEQbgZG'),
('65200134@kmitl.ac.th', '65200134', '$2a$12$3HfcNcuJmJQYvoOKtDTceeGqXf0RA8NUpCENuK8.fvMSHHf8.0RPO'),
('65200135@kmitl.ac.th', '65200135', '$2a$12$J5Q1wqtYcDhmejy4IrDGO.RQJSmROV2Kc4dVy/n/kfKIH/ilIvKiy'),
('65200144@kmitl.ac.th', '65200144', '$2a$12$/s1c2J0TWykYsDyrrGjK7upT2w4ZlHbxGO1/lD1LaTM4ZBy6mGJDm'),
('65200150@kmitl.ac.th', '65200150', '$2a$12$XKthQqSoX9H/n3n217gEzO8nVD045OKl1MKo8PqEccghFP2eW7qx.'),
('65200154@kmitl.ac.th', '65200154', '$2a$12$BaM5MwXFdTqH7.XodF/M9.XskXTM0qK3w.TY5OGeH5S17bYl/4jhW'),
('65200156@kmitl.ac.th', '65200156', '$2a$12$wxRbKoEQOk.5lyKMd11lROmawBjzeyfC65qBw1L34BqH3EYpnOE1S'),
('65200162@kmitl.ac.th', '65200162', '$2a$12$8zZ/Mco.4Dc.duJBdsH/v.2evOj3FMBUj2wmDkojKfwcbNH.XGRoS'),
('65200164@kmitl.ac.th', '65200164', '$2a$12$df5TbISPI/sCoIEY0Qk0POB3U8EiylNmKu57.ww1MU2B6EJez15KW'),
('65200169@kmitl.ac.th', '65200169', '$2a$12$0l6/mdGaM8pGS78bvVAHh.9Pz97lAowY8mKtlYQDmoMO4xQqBXBJa'),
('65200171@kmitl.ac.th', '65200171', '$2a$12$J2lEpm/bSz5OKajjzjxja.SFdXn/7TP3vqdXUEBbPKTsGqhMxF/ji'),
('65200177@kmitl.ac.th', '65200177', '$2a$12$gSnshlr.G0ueyxGL0Mhff.DUNepmPCce1zHugv33tIqiO1uEHJumG'),
('65200178@kmitl.ac.th', '65200178', '$2a$12$qP1zzW6gpTwTRqaf2Sz2R.CIZkOZ3mBKFBbnJGEea9FA0z6JcJicK'),
('65200184@kmitl.ac.th', '65200184', '$2a$12$ctVQ0c32FUKdgP/oohwFMOHBPUnvcfLfzmrZ9rTRLELMoRsB10pm6'),
('65200185@kmitl.ac.th', '65200185', '$2a$12$OFqGiDgST3R4MWRT5IojMey/1/FFnrMscN.0V/O0752NzaaogIARy'),
('65200197@kmitl.ac.th', '65200197', '$2a$12$ao8cfhfUgPiM4YqeKjEKF.v5VW2R5tIRU8qpOOjYEP15qxf6srHTe'),
('65200209@kmitl.ac.th', '65200209', '$2a$12$1Y1jIlwYfE5Q8TJck9MkYu2c/O3tkHpD3SDmSmcxsKgCemfvq2x86'),
('65200211@kmitl.ac.th', '65200211', '$2a$12$qthnRjBNvk5/3k9KB4M2Ju5I9W69dofOMH4vmS872Xcz52LWnMAcq'),
('65200224@kmitl.ac.th', '65200224', '$2a$12$Tdv/Bj2Do/KXXEZ6LBCdyuSz2ixtQ3pUOoBSnsN4jCLkq5esSIAHq'),
('65200237@kmitl.ac.th', '65200237', '$2a$12$/IQOS9PgwA1KvWy5OEq8HOhj391cbu9Engqs5HikIhv97L/Dc4EZ6'),
('65200241@kmitl.ac.th', '65200241', '$2a$12$T8YfTd/G0rTsOnZidaltQO3HecXRfCvQ24SkPr7NZfub2o199PT5G'),
('65200254@kmitl.ac.th', '65200254', '$2a$12$1vkYh4l0evL6SPV26T/H0u4Yx6EsIvP2PgOUROXIR7ylRhABf.qby'),
('65200264@kmitl.ac.th', '65200264', '$2a$12$3UAnIRIl318Aiera6CmJAeEgarPK3MyLkd3YkWKeICEwmWgCUOvx.'),
('65200265@kmitl.ac.th', '65200265', '$2a$12$31DHNF4GcEytq9vG0LVIMuiz3K6VawrACkowbMvudSkE/1d9x15J2'),
('65200271@kmitl.ac.th', '65200271', '$2a$12$16kcx9wSJOFDJO39o25zsOqzIUuGgfvU9mp4pQMzDq2ft7HR5dTEq'),
('65200272@kmitl.ac.th', '65200272', '$2a$12$gPCt9akgT0hq7/2./AMEietNfKu9OTVT3wL4XqLdVJHEr7yiOca32'),
('65200273@kmitl.ac.th', '65200273', '$2a$12$iIuD8FRy9B45cw5l0ztrSeC.teR6K9qi9h9F4/08MrXYgW9sG89DG'),
('65200277@kmitl.ac.th', '65200277', '$2a$12$oJ8Wapt7H6pJQcDC5kBuTuDYigJSLQCb97pI2i2mPT796MTjhbXd.'),
('65200279@kmitl.ac.th', '65200279', '$2a$12$9s08t1wmYN.FHBtaaGT0mu6B5Fo7KqAZx6JUW5bNd0pscZq5OsKE.'),
('65200287@kmitl.ac.th', '65200287', '$2a$12$uQECYdj5ial9fnTEC8VGGexTFsV/JM4SvLJ/99f/bC1R9rMQYW/Py'),
('65200294@kmitl.ac.th', '65200294', '$2a$12$sYuh15prRMpKDQdir/nxWu7hDXhS0KUE2hXFBq9O7C1cvbdJZ3rdm'),
('65200305@kmitl.ac.th', '65200305', '$2a$12$EfQCGWQm64YLMGPDV5K50eLO49LlZdWGed426R3R6hctN6/TnSKhi'),
('65200317@kmitl.ac.th', '65200317', '$2a$12$mfMTc5XwSaMnXRjaAYobXOvQTJxlGEeF0n.6581pr1X/aiK/nMiqq'),
('65200343@kmitl.ac.th', '65200343', '$2a$12$EG3JPNT9EYOkm2JUWiLDpOv0sfdxuZVs1iRNXR0Zhw4L.kBON2z/K'),
('65200353@kmitl.ac.th', '65200353', '$2a$12$ECw8AVZXKChDeoKTvyvAtuoTQAZltu2NU/K51xbjFR7D8QBd0T3HC'),
('65200354@kmitl.ac.th', '65200354', '$2a$12$/E5gYJM5ejksuhb0bJYktOCQYjYgZohfpzq5oJ.UrZvEkMG7JgvQK'),
('65200356@kmitl.ac.th', '65200356', '$2a$12$RyZ8o0kEJM4hNsL3w7OtKOLv2Ae2NhY2Vfov4PZahfn/cLRyb8LJi'),
('65200358@kmitl.ac.th', '65200358', '$2a$12$fC1FMODsyv33zf4vtT.Ye.Hqv2Ion3Alji8gZwtqhsi5chsgNsk4u'),
('65200359@kmitl.ac.th', '65200359', '$2a$12$YE6ZAKZT8CtkGNrQrPgRIue3TioCmUhJWjRC/IBjXwAf4c615eMka'),
('65200365@kmitl.ac.th', '65200365', '$2a$12$OPZQG6XldvVYv8zdFj/TFedFUhxA89i5aAfn8.wDT7T/BTCdusObq'),
('65200366@kmitl.ac.th', '65200366', '$2a$12$..qJQAeqkrUhBZy4fZ5AEuhhZsuRxjVjAVBUq/lHVRwxK0LUoZYQq'),
('65200368@kmitl.ac.th', '65200368', '$2a$12$d1dPXVPdr.cKawXSVk7FjuKD52ELDMEPT8L05Tq/iJ/v0QPCsNgv.'),
('65200369@kmitl.ac.th', '65200369', '$2a$12$jd2XroNi8pJJcJr8Yr6JnOMMfHgeUkbfTm5T9enlUtf18IRakm2D2'),
('65200373@kmitl.ac.th', '65200373', '$2a$12$Ol6NHk/1VvZRNHFQny1/tO08Lv8b5UOe/bAJ8CJh4lQgpooyoN2yS'),
('65200380@kmitl.ac.th', '65200380', '$2a$12$SwF7VvlDaPmjTr4OJ6W3YekZGdLxzH9RR0mAcrEKf99hFVex/A0e2'),
('65200382@kmitl.ac.th', '65200382', '$2a$12$O2MN0Ne1mzO27GZSVsixiORiRXTH//01ti6SDmUeYNqaW8Jd0GE/m'),
('65200383@kmitl.ac.th', '65200383', '$2a$12$Ok39DoNJUcDd2gvtoqWQ1ePEwljJvmE5lwt9tOyLMhZ9gHwgnAN/G'),
('65200385@kmitl.ac.th', '65200385', '$2a$12$M/A32DZCqOdL7dZWUJn2DeeeycRbO9JkbJh/MqI2ijdNshPmw34T.'),
('65200389@kmitl.ac.th', '65200389', '$2a$12$ZtmNid0rfcN8wM3aHW/DmuotahmeSoiFSmqKoEY.keCSoJ/3AId8G'),
('65200393@kmitl.ac.th', '65200393', '$2a$12$3RxURJmo/2MZdEeABr7oyu/VcPlTKIDZOpI.AtaDTMRhVQfs3oY6C');
INSERT INTO `USERS` (`Username`, `Email`, `Pass`) VALUES
('66200004','66200004@kmitl.ac.th', '$2a$12$fgM9OF47ykLOOCj6lRNj5eh2kaLeHXz6KNoVymCMRa9WrEh1lzlUO'),
('66200009','66200009@kmitl.ac.th', '$2a$12$tZXl4xb3W.pZ17/rfAiiIeZBfN687x/dsrR0yrD4I6.7z3LvqZDgO'),
('66200011','66200011@kmitl.ac.th', '$2a$12$kwGQ5ijiVuHQI08H3VVhHeD/gIf3MkQQnDCBT4selT8DgbOE7SHXm'),
('66200012','66200012@kmitl.ac.th', '$2a$12$tEbfjK5oFcTSDONjHiduh.SHxXogHxptYiLZ8AIrysd593xic8aYO'),
('66200028','66200028@kmitl.ac.th', '$2a$12$8N2Wb.U9lFQaD9eblNUEle2TnStvWNg7JHRPpLhExL5/6peOoChTG'),
('66200033','66200033@kmitl.ac.th', '$2a$12$x5SDv4QFkDZUccs6bi0r5O.ef08lRF1w3N7E4ioJfi6jrdxPk6HlG'),
('66200051','66200051@kmitl.ac.th', '$2a$12$mTAAfehHQWk0XmV9vSfDbO0c.BnIE8BAORmaIdMXyRPpfzETpZAV6'),
('66200052','66200052@kmitl.ac.th', '$2a$12$MW.gCgKl.dv5JQuMTSn3JOcB5MWASpQw09BrXnvNkeBDLPrKt/EsW'),
('66200059','66200059@kmitl.ac.th', '$2a$12$YNS4YWkpSObnu.VXgXh1AOvHvUmD0JXn21b87kFz6JHb6ERAATYJW'),
('66200062','66200062@kmitl.ac.th', '$2a$12$BW9xupo6DSREHZ4ZTp12GufzxQeg50rONFXvodzTEd02SRvyFZO5q'),
('66200063','66200063@kmitl.ac.th', '$2a$12$ISBbU784i3Uqp3/Z/FxCAen.fJIGsozUKK3oqXVe3IuYDoCrTEZdS'),
('66200082','66200082@kmitl.ac.th', '$2a$12$pCuEzlTda9UKLdriCmG20uh8lVCUGiVyKSmDgqPYhpF8iGo8J.lnS'),
('66200098','66200098@kmitl.ac.th', '$2a$12$oDzZoamHo2d05YZKsr7z4O.4LuMHthRVIKIAhQ8l8SVtyrjBgH/OC'),
('66200105','66200105@kmitl.ac.th', '$2a$12$C4DxiGYMO1F7DA2Q2xjf6uFW1HSxuxtZIHwuwgQ/fyekPILV2YPdu'),
('66200108','66200108@kmitl.ac.th', '$2a$12$3qUu1bMd6EwFw7VcT7nX5OuJ/a.DuJqvN8kt85WazsHc.Jwf/jAYG'),
('66200113','66200113@kmitl.ac.th', '$2a$12$I83.X37eQ0SucqVv5P577u1tJUQxB8PI4ugH3gJtQWi62V3z7mpUC'),
('66200117','66200117@kmitl.ac.th', '$2a$12$DPdAGxCtAiLbaiTpan2V1e8D0FP5SRzpCi4seiy3NQzZd4g6u2kj2'),
('66200122','66200122@kmitl.ac.th', '$2a$12$6qkm8zNdOg49GLmce6mNg.K9dcr.a8hLwg60HfQ8z1eyMAGrJtvQa'),
('66200137','66200137@kmitl.ac.th', '$2a$12$/XIYC42ZDjMhjC6UEUyLiu0pnEtmkERrKIFgMVsvNR9aOC8dwC7kK'),
('66200141','66200141@kmitl.ac.th', '$2a$12$.BZrKPId6wxH5tTkqxWcdu0JMCCAd.11k2Zix3YnykVcsvkXx/1KS'),
('66200157','66200157@kmitl.ac.th', '$2a$12$dimyOHqN2Mlpw5I5R/OPFO9aren843KSndm56KnOoq8oOlx3BYbWq'),
('66200160','66200160@kmitl.ac.th', '$2a$12$3H/tzaP.8sRbu/LFQ4Oifu6WPnAoKy8abK4XBb7acLxfvIBBHhpAG'),
('66200166','66200166@kmitl.ac.th', '$2a$12$dX02mj95XQ1Ws.N9UdQjGeoCTKPwlhx.rw5dMDePPKTFuclecWXFC'),
('66200174','66200174@kmitl.ac.th', '$2a$12$4dI1tfZ/mxhHcEi3px5ai.mVT8lFjtUyT2AI8/eTIxIKk9EGfQzXK'),
('66200179','66200179@kmitl.ac.th', '$2a$12$5qmNnXon6aL7T9paEha/hOhl7oUoLoU9aAUoLsHEUPqCLAvNAGSAO'),
('66200184','66200184@kmitl.ac.th', '$2a$12$ii/LdhpqQn8mYNXPDTmCoOgErA3oOUzYXSYEz2es5yIEDJJNv4zMy'),
('66200190','66200190@kmitl.ac.th', '$2a$12$lgDnPVV5/gRRXP9.c0vMFeT8ZxqwY0uDBeC5zxz45FbhCS48e8KLO'),
('66200193','66200193@kmitl.ac.th', '$2a$12$ojDhh69BLr5OtBydx7ekhenyWPWmFLxfiiBZYkQmkCJO3L3ba.HVG'),
('66200238','66200238@kmitl.ac.th', '$2a$12$0u3jhVF/GsRJPx0THps25eIiDmunldwvhyx8cZ/dIv.sWGgzCTIYm'),
('66200245','66200245@kmitl.ac.th', '$2a$12$PtQM7df3kuy6pGl1kao9Cu2qjVbVoHcgIpB0Dh42eXIco0LZlvfxK'),
('66200248','66200248@kmitl.ac.th', '$2a$12$WYm/6H/EX1hCv5qVlyWNCOj/It.f3SZcDcELtnTYPSep926Ewbj5q'),
('66200250','66200250@kmitl.ac.th', '$2a$12$CwgRccChyIpOKdBT3arGBeXG/hrp2Wx7zAxMKKp0gsNX17lIpYT9u'),
('66200257','66200257@kmitl.ac.th', '$2a$12$mfEMpDUXmv.0FqSFWDcbbe5IGLHEeVyKMEO0g1IWhICJ/MKkZ2wIm'),
('66200277','66200277@kmitl.ac.th', '$2a$12$CeGLOYdZlsdxF0o06idy7OrVIaPUSbflSE44CffNmKf/Nqdo2MGp2'),
('66200285','66200285@kmitl.ac.th', '$2a$12$ozx8MywzxToR0pQjuGm0a.wqPGMW5tpWc8odntCiwnzMQv4FKv5Zq'),
('66200301','66200301@kmitl.ac.th', '$2a$12$IHTfEhZ7E2Gk4xGg8rUvse1ob73R26HebKKbYOQMQzYOme8aqClG.'),
('66200316','66200316@kmitl.ac.th', '$2a$12$TiZ8QCpPv3v4EUeMCqcIAusjwOC34ynwq2wz04g4gY3nWfezcGXUC'),
('66200326','66200326@kmitl.ac.th', '$2a$12$VPskkD1Np94oloX8LzY9Wu6Y7xt0l1EPWXLR6oqwcsSHmiEbr9b6K'),
('66200328','66200328@kmitl.ac.th', '$2a$12$xWgYDwEYrWIkK2gqIrz.yeOZi4HjgHpz3ii1VYZemoeRS.Ka2Lw8u'),
('66200336','66200336@kmitl.ac.th', '$2a$12$73c2/69Q1yQCmdy.r5nSL.xslRVXdp/WTGTtmjfKjdLz4rcKxVp9y'),
('66200338','66200338@kmitl.ac.th', '$2a$12$31Kf8Y5ntHONlambOxSmduPMFKHdwgmHVhCY6IiapoXj4RaZNr4Bm'),
('66200339','66200339@kmitl.ac.th', '$2a$12$yKHBv7WexC6GZrNGOiN.Du2vS0eP225d1mxk/IcSOBPVa1VBQtmv.'),
('66200340','66200340@kmitl.ac.th', '$2a$12$ZaAvS8OQ.M20ejMKi9msSOcLTITxF15f7D.2TPDY39Ljouha8V9zq'),
('66200341','66200341@kmitl.ac.th', '$2a$12$wL.dKOxriDaf/WRgUwM08uj8D8L12SNneOBYJjEGZUvXg71ydQGuO'),
('66200345','66200345@kmitl.ac.th', '$2a$12$h0wpGmZ.2IYJdDuR5glcKOgFsTo0q/f0GKkAYLR2VqfQn/SCSWx5C'),
('66200347','66200347@kmitl.ac.th', '$2a$12$S0cyNW6fDOx08EK0KrFHQOlPWrwri0fKHR64lYanvAKLUx2/J1aFa'),
('66200354','66200354@kmitl.ac.th', '$2a$12$kAZ8sU6gButcP3l.vXoiSu9e6tFQxVbwCYhlDj/5L/owuYUEk4OCa'),
('66200357','66200357@kmitl.ac.th', '$2a$12$u/QLHO8DEiQI9yE7c3zBD.MD0WCmOa1cRS2VDAc2mLGwvnZQUQmp.'),
('66200361','66200361@kmitl.ac.th', '$2a$12$8PujCVnPW1eQ.0CH5cJ1FOnoFcdxoV0ETOUTNZgxJnxEw6NoyXSMy'),
('66200383','66200383@kmitl.ac.th', '$2a$12$XpDEMHUH2NghNToXEFDyjeEnbn6ks/um80yzbuhluCWxgMvPinckO'),
('66200389','66200389@kmitl.ac.th', '$2a$12$rlEct4rgCIqczelke7Cmx.0oK6.RZx5UcJZqFt0oBbB8rZQsSLlb2'),
('66200395','66200395@kmitl.ac.th', '$2a$12$.sJOocE4gTlHFXm9FPZ2T.W/8Ha7Ru6W8LU2oPHzURRHTeym6ovOG'),
('66200396','66200396@kmitl.ac.th', '$2a$12$oe8A7xGOAISZXKrxHbYcz.oLhqe8a3ns62KhoFqMdBgBGhBJQF4nC'),
('66200407','66200407@kmitl.ac.th', '$2a$12$gilBI66BN0SFk4CQopNAvuFPsdRIrKeatvRP5aNpS5WuPLEm5yxUi'),
('66200408','66200408@kmitl.ac.th', '$2a$12$O0LKzhtLI5bqJMSNa47sQe4SkZIRB1n4rCuNBxVlXztZxFgrF/GVe'),
('66200411','66200411@kmitl.ac.th', '$2a$12$XzwQ.1vkqVxZRJhePD9CJea8GylRZBCSr2uuqCXeYSx2WIoNk96xq'),
('66200415','66200415@kmitl.ac.th', '$2a$12$vbchAwxy3uATO0ntlowzheXnyiamavRW0DKh.p4OA9mdyf1nX2xIO'),
('66200420','66200420@kmitl.ac.th', '$2a$12$D6/oz0pwakAoLwbiC7kqpe7iyPJVDzMQLEBBGveKsi4zRbKc8Sbe2'),
('66200423','66200423@kmitl.ac.th', '$2a$12$aMOgv0qINcK13vfXmx831.DjtQk3WTFo2km/EMmS0BUI.qkvIKgTS'),
('66200425','66200425@kmitl.ac.th', '$2a$12$Nu9CgTOL6qWDE6jBkYzxxeHexFP8QGWzLVJspZyCqYVf6bbK2YSzi'),
('67200014', '67200014@kmitl.ac.th', '$2a$12$ig7zErTneX9XCAKUXfkRQO9V51Bs6gY4G6xHLL8R0h1jRPlJ3FlUe'),
('67200024', '67200024@kmitl.ac.th', '$2a$12$zp8vLTnJoSYeJhGe671MMunfJsX/ILiF3C7FaueqiurML4dXOIqm6'),
('67200030', '67200030@kmitl.ac.th', '$2a$12$szqiCNpBnDZZ6.brGow9Q.hHaGsj7zICQWI5yT2gq/K.etwkdOWvC'),
('67200031', '67200031@kmitl.ac.th', '$2a$12$LvLepwAzJuQaLnmoqr383.vjkE4z981Xc8xdQ6HlBh7cYt8zCSvBW'),
('67200032', '67200032@kmitl.ac.th', '$2a$12$t53Dsy.nXKg1F7R43e0YneOr9mpXedJHiZXf2GRxeg/wq3QIna99.'),
('67200049', '67200049@kmitl.ac.th', '$2a$12$aTo3sLeNPmnWjQZQAW6LjujlLsyUaVV29BLyS5FSL5NADuEWdDGZK'),
('67200050', '67200050@kmitl.ac.th', '$2a$12$on/XvJs9vgBf.4eSDUIxSuAWH3Vr6vcSTjljobWRDmdz18HuvN5Vq'),
('67200062', '67200062@kmitl.ac.th', '$2a$12$R0FQy5UnI6k.A7d70K/hYeh/Chh3f6xc.wSxeRjFsS7o6Zfjeslfq'),
('67200071', '67200071@kmitl.ac.th', '$2a$12$qcvksPQCbce/2xyA9W0G6e5oK3XlEG.4106ixWzUTpC78tsbYOeXC'),
('67200079', '67200079@kmitl.ac.th', '$2a$12$tY7xaTYWLQtrmz5fHIvydOjKW9AnLSuTiuW0IoSUjiKHnbYbrk9Mm'),
('67200081', '67200081@kmitl.ac.th', '$2a$12$XUIopZldwdVOjJTQyQaH3.F2zYA2143xcs2c4bvwkypAvY.8h6QN6'),
('67200088', '67200088@kmitl.ac.th', '$2a$12$MkWhAn2Uj6UJm6AI3nyo0e.CItWZOExayVmGzZg0ivPfe4mMFPdw2'),
('67200093', '67200093@kmitl.ac.th', '$2a$12$OsFbhE.Q.WAkArNmlqqjqeqtlPB81u3F6Du/uuA1x5PaSHQ/vOzSC'),
('67200099', '67200099@kmitl.ac.th', '$2a$12$Z2laI83Xy8/e62kargB7y.APUtyisnRVkeZpqqQd.oiopav9k.ngq'),
('67200102', '67200102@kmitl.ac.th', '$2a$12$JewiZOYvsuUI9uNqTnQuk.gZdnOxM4cLbrRjUM3PtgAEKZbVJmEP.'),
('67200103', '67200103@kmitl.ac.th', '$2a$12$c5fmRhv0TTn4wQyCWBa16O7AJMUMJsiDBc8v4Wp3jBQLohjobazFS'),
('67200107', '67200107@kmitl.ac.th', '$2a$12$P4k1t1p/9fu.cwJfmHg5PeieUw3x9RvHEsCnNs9wQK5uQXmfR58XC'),
('67200119', '67200119@kmitl.ac.th', '$2a$12$q8yrbbY4XO/yA9zoooBfNefVxqro7ffy5VZbg8JX73qWRm3k/Osc.'),
('67200127', '67200127@kmitl.ac.th', '$2a$12$pCzQC6gP9OoqnP3neXhtiuBiX.cNGTsQxa3MvwY.8dEL6LWUaAPbS'),
('67200134', '67200134@kmitl.ac.th', '$2a$12$IUYCZ/EBY8N1KEKvJ/80J.AhnvlwseDRWghyapp/M2G.DEgayU37m'),
('67200148', '67200148@kmitl.ac.th', '$2a$12$YZOJPdv8M5KVNGceYVMadO5SUdN4bCPzuPwa6yKXtxLJDBLpfgEte'),
('67200155', '67200155@kmitl.ac.th', '$2a$12$WRKudDDZ9ZV7tx6Gp/s64./d6zUN0AT/zw9YFP8p8YZYzkCXQGlGm'),
('67200165', '67200165@kmitl.ac.th', '$2a$12$dwRFumJ/4U3r6CES/uoLIOXzaqAJRKLrrsHdIpN2dsfQWPM/881/G'),
('67200172', '67200172@kmitl.ac.th', '$2a$12$qXvHbZzZxa0ZDgWDH9AzzO3X.TI7CSAar7si1mgRZrzKHBTHCtkli'),
('67200219', '67200219@kmitl.ac.th', '$2a$12$icxhQtMlwuescleCXxigbuLg6nONF8FHg72StgptAhlE2gqhm5TFi'),
('67200223', '67200223@kmitl.ac.th', '$2a$12$a5aibraFKn2NG.FH8vjJTOvf1ty1PxtHPNp4wYgISlcqR1UT7X1zi'),
('67200235', '67200235@kmitl.ac.th', '$2a$12$j/DAmyZg.I3N7joUS/mhQ.gxQ2Bdhd7c7b30v.Q/Ul0F52dW4zsK2'),
('67200258', '67200258@kmitl.ac.th', '$2a$12$Qk9fff7D6LMUG1v/bxLoZ.VUJWCIIlzDFySNZoR.HcSSIKiQ58ICi'),
('67200272', '67200272@kmitl.ac.th', '$2a$12$j.UymZhg/1rW1eLqYntpAu4hGyCOjZDeL4MuaDs5QietCtwd8YR8K'),
('67200277', '67200277@kmitl.ac.th', '$2a$12$m3BBErKt2wGpThDgD7BVU.PRS7rN/OyT0pATn19X6ulzC5HNcEype'),
('67200305', '67200305@kmitl.ac.th', '$2a$12$aCXM8HsxXYrN3wqHYxBKmuFLNPVBjoRkeGdNi.MiIUswsqtJWSZ/y'),
('67200324', '67200324@kmitl.ac.th', '$2a$12$IrrAuA3gjy9ZKryhxMWeN.G8t7wHCvW.Brq0GuKddcCQRNj86UAai'),
('67200344', '67200344@kmitl.ac.th', '$2a$12$25ACM.CV.x4W1emPWWLLfODqtFrVmqg1xET8eKy8Q2aVRUq6zCUxC'),
('67200348', '67200348@kmitl.ac.th', '$2a$12$FuyhM8UeNqozXZAsSvghHudakw76gopfBk3MlwkGGQL1yitVyTabe'),
('67200349', '67200349@kmitl.ac.th', '$2a$12$kHzy9CxmZ6VyTrZueNhRLuah4mvgKrsZiUCbKvGyhii8oz6k7cn0K'),
('67200350', '67200350@kmitl.ac.th', '$2a$12$X1BLoo98LRFC3TzSK64jN.PLTY/MKUZlzYzg6c3UJ0blVsSJfhG7G'),
('67200351', '67200351@kmitl.ac.th', '$2a$12$nsaiqtIrXmVGbADW4r7sW.7pArBZeAS4SShD.VLJzS7R9x4HMvlQW'),
('67200357', '67200357@kmitl.ac.th', '$2a$12$xz7LEc6XQ/pH9YRdDgvd6.WcxtZemq0MEqIuIpLFviVqaEnB9wczC'),
('67200367', '67200367@kmitl.ac.th', '$2a$12$N6n3KHY9jqL92gm4MJNjMeZm5f.TdnMTmYpCrNq62oQQb1QmJ9xjq'),
('67200368', '67200368@kmitl.ac.th', '$2a$12$wE2JA2kvlMVCe3IYUuzCKeBPgMuLna68eYpYbJuyUNcgnSmHewirC'),
('67200369', '67200369@kmitl.ac.th', '$2a$12$3K5OeAELCYn8TWd17M4SFuiAzfk2B87Gh9dGlBVpyGbTxCJ0Q7X8a'),
('67200375', '67200375@kmitl.ac.th', '$2a$12$63wnjONsAZ48h5NhoPwa3.MGP72pX9Q.rhpawHurpQt86rtxMNsfO'),
('67200380', '67200380@kmitl.ac.th', '$2a$12$abhzvCzgb3SJo83A9ZV2ZeSiiTUFGyluFtPetRjl9kFqOewGetq/6'),
('67200381', '67200381@kmitl.ac.th', '$2a$12$RSunPlRPkEbjRwVcG9HXw.eY/wMEjCvIkXeoHeozTwo.fjCG0rClG'),
('67200401', '67200401@kmitl.ac.th', '$2a$12$RrOiWb656D/6.aKCz54hDOQ3OwpiEcrwE5lDY1xFKVLdl9GHj/gkC'),
('67200412', '67200412@kmitl.ac.th', '$2a$12$E6AsIRqOInfbhwoK7khx9O4onrxLdgoEpJdaBFHtgKhCMPFdWCsjC'),
('67200419', '67200419@kmitl.ac.th', '$2a$12$BPwZKbyYldRvr3xn37up7eYSKCh0vLqRWsATvZPSs5hDA0fdvMR8q'),
('67200439', '67200439@kmitl.ac.th', '$2a$12$.OKcCseCcTah57RWKTPSku1WuZkVKh5HR8m1Dob.32ViGvisgvKba'),
('67200452', '67200452@kmitl.ac.th', '$2a$12$NfOoVgSN0SL8ecTS2x5LWu0pPr.iAXMngTm5VvIz9rFvRRGp5b8Li'),
('67200460', '67200460@kmitl.ac.th', '$2a$12$UGqyH4jNSK6wpvA7jt7XYuL3xY0AE3UEB9oexyD2NIDxoWAlnbhHq'),
('67200010', 'ar32zaza@gmail.com', '$2a$12$kdPgJ019bTfe5sh/RWn/xuONzMoQH843HJiOLBd/6gCZZs6q0ICRm'),
('67200400', 'bompinyoo@gmail.com', '$2a$12$JwBcK9inkH6Bq9qUtBJKkeQPTW8rIiO.PLJXZ2iPvsbLCC2u.a1Fu'),
('67200063', 'chutikan292548@gmail.com', '$2a$12$V2.4XpnszQlucvbQNt1Wjuky2TopO8ae0kWnSrOjfGC93BL/Or/RW'),
('67200023', 'kittipatpakamas@gmail.com', '$2a$12$HkjLN6.QRLfD1Y39N9C3TuPvHDibhwb9vcK8q879PO5z.61DX10aq'),
('65200123', 'nattawat.fing@gmail.com', '$2a$12$cTDrp1dL66fjz7StXW42PuXNMlS86snbbyjZf.Otq79TmP46VfBxe'),
('67200187', 'pasutpd@gmail.com', '$2a$12$smPyHchGCCwre0IMY4KijODQ0hfyxJw6.ERQrVdraiteJ4UaaWVCS'),
('65200276', 'phusitlapet@gmail.com', '$2a$12$Ccb7PoALZwHdNayIWmbZJ.KM/bwE4ZTycyZ4hvX./mr7Fq5HqEAMm'),
('65200237', 'picchayut@gmail.com', '$2a$12$B2/8X1A63pKVT4iHwrsg/OkvL3MSAo9iK9JLIALWz/Kco5UEfFQ2S'),
('athasart','athasart.na@kmitl.ac.th','$2a$12$q1aUJSIaEiUvUUhlvYhQSukM0w2OblU/Bzrnc2A0.FvSNmFjRROhq'),
('rattikorn','rattikorn.so@kmitl.ac.th','$2a$12$hrqanwHbMrmHBbGdHfcNAumNWPp16Vj9d7MpBVmNXdKK3pepX7DNa');
INSERT INTO `USERS` (`Username`, `Email`, `Pass`, `Role_Admin`) VALUES
('Admin', 'admin@gmail.com', '$2a$12$nRpeYbQ37wbhdv.Ob9Eo5u3whxBp2oHfv7V7zKv03gUVLH4QhMaiq', 1),
('user1', 'user1@gmail.com', '$2a$12$nRpeYbQ37wbhdv.Ob9Eo5u3whxBp2oHfv7V7zKv03gUVLH4QhMaiq', 0);


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
