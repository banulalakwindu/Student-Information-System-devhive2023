-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2023 at 09:17 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_staff`
--

CREATE TABLE `academic_staff` (
  `Staff_ID` varchar(15) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL,
  `Department_ID` varchar(15) NOT NULL,
  `Full_Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `academic_staff`
--

INSERT INTO `academic_staff` (`Staff_ID`, `Email`, `Password`, `Department_ID`, `Full_Name`) VALUES
('COM_kaneshwaran', 'kaneshwaran@gmail.com', 'Kaneshwaran', 'Computer', 'K.Kaneshwaran');

-- --------------------------------------------------------

--
-- Table structure for table `advisor_history`
--

CREATE TABLE `advisor_history` (
  `Advisor_ID` varchar(15) NOT NULL,
  `Student_ID` varchar(15) NOT NULL,
  `Start_Date` date NOT NULL,
  `End_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `Course_Code` varchar(50) NOT NULL,
  `Course_Name` varchar(50) NOT NULL,
  `Credit` int(5) NOT NULL,
  `Core_Technical` varchar(15) NOT NULL,
  `Coordinator_ID` varchar(15) NOT NULL,
  `Pre_Requisite_Course_Code` varchar(30) NOT NULL,
  `Offered_Semester` int(15) NOT NULL,
  `Offered_Department_ID` varchar(15) NOT NULL,
  `Academic_Year_Current` varchar(20) NOT NULL,
  `Registratipon_Open_Date` date NOT NULL,
  `Registration_Close_Date` date NOT NULL,
  `Semester_Start_Date` date NOT NULL,
  `Semester_Close_Date` date NOT NULL,
  `Open_Close` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`Course_Code`, `Course_Name`, `Credit`, `Core_Technical`, `Coordinator_ID`, `Pre_Requisite_Course_Code`, `Offered_Semester`, `Offered_Department_ID`, `Academic_Year_Current`, `Registratipon_Open_Date`, `Registration_Close_Date`, `Semester_Start_Date`, `Semester_Close_Date`, `Open_Close`) VALUES
('EC6010', 'Operating system', 3, 'Core', 'COM_kaneshwaran', 'NULL', 6, 'Computer', '2023', '2023-06-12', '2023-07-04', '2023-06-01', '2023-08-18', 0),
('EC6060', 'Software Engineering', 3, 'Core', 'COM_kaneshwaran', 'EC4060', 6, 'Computer', '2023', '2023-06-12', '2023-07-04', '2023-06-01', '2023-08-18', 0);

-- --------------------------------------------------------

--
-- Table structure for table `course_history_offered`
--

CREATE TABLE `course_history_offered` (
  `Course_Code` varchar(15) NOT NULL,
  `Course_Name` varchar(30) NOT NULL,
  `Credit` int(5) NOT NULL,
  `Core_Technical` varchar(15) NOT NULL,
  `Coord_ID` varchar(15) NOT NULL,
  `Pre_Requisites_Course_Code` varchar(30) NOT NULL,
  `Offered_Semester` int(5) NOT NULL,
  `Offered_Department_ID` int(5) NOT NULL,
  `Academic_Year` varchar(15) NOT NULL,
  `Semester_Start_Date` date NOT NULL,
  `Semester_End_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `course_registartion`
--

CREATE TABLE `course_registartion` (
  `Reg_Number` varchar(50) NOT NULL,
  `Course_Code` varchar(50) NOT NULL,
  `Attempt` int(5) NOT NULL,
  `Register_Date` date NOT NULL,
  `Coord_Approved` tinyint(1) NOT NULL,
  `Coord_Approved_Date` date NOT NULL,
  `Coord_Obervation` text NOT NULL,
  `Registration_Approved_Date` date NOT NULL,
  `Draft` text NOT NULL,
  `Open_Close` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course_registartion`
--

INSERT INTO `course_registartion` (`Reg_Number`, `Course_Code`, `Attempt`, `Register_Date`, `Coord_Approved`, `Coord_Approved_Date`, `Coord_Obervation`, `Registration_Approved_Date`, `Draft`, `Open_Close`) VALUES
('2019/E/099', 'EC6010', 1, '2023-07-11', 1, '2023-07-20', 'approved', '2023-07-29', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Department_ID` varchar(15) NOT NULL,
  `Department_Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`Department_ID`, `Department_Name`) VALUES
('Civil', 'Civil Engineering'),
('Computer', 'ComputerEngineering');

-- --------------------------------------------------------

--
-- Table structure for table `department_course`
--

CREATE TABLE `department_course` (
  `Offered_To_Which_Department_ID` varchar(15) NOT NULL,
  `Course_Code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department_course`
--

INSERT INTO `department_course` (`Offered_To_Which_Department_ID`, `Course_Code`) VALUES
('Civil', 'EC6010'),
('Computer', 'EC6010'),
('Computer', 'EC6060');

-- --------------------------------------------------------

--
-- Table structure for table `medical_submission`
--

CREATE TABLE `medical_submission` (
  `Reg_Number` varchar(50) NOT NULL,
  `Course_Code` varchar(50) NOT NULL,
  `Medical_ID` int(5) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Description` text NOT NULL,
  `Medical_Report` longtext NOT NULL,
  `Approved` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medical_submission`
--

INSERT INTO `medical_submission` (`Reg_Number`, `Course_Code`, `Medical_ID`, `Type`, `Description`, `Medical_Report`, `Approved`) VALUES
('2019/E/099', 'EC6010', 55625, 'makeup exam', 'absence due to fever', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `prerequisite_course_details`
--

CREATE TABLE `prerequisite_course_details` (
  `Course_Code` varchar(50) NOT NULL,
  `Prerequisite_Course_code` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prerequisite_course_details`
--

INSERT INTO `prerequisite_course_details` (`Course_Code`, `Prerequisite_Course_code`) VALUES
('EC4060', 'NULL'),
('EC6010', 'NULL'),
('EC6060', 'EC4060'),
('NULL', 'NULL');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `Reg_Number` varchar(50) NOT NULL,
  `Course_Code` varchar(50) NOT NULL,
  `Attempt` int(5) NOT NULL,
  `Result` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `semester_details`
--

CREATE TABLE `semester_details` (
  `Semester` int(5) NOT NULL,
  `Semester_Start_Date` date NOT NULL,
  `Semester_End_Date` date NOT NULL,
  `Year` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `semester_details`
--

INSERT INTO `semester_details` (`Semester`, `Semester_Start_Date`, `Semester_End_Date`, `Year`) VALUES
(6, '2023-06-01', '2023-08-18', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `students_academic`
--

CREATE TABLE `students_academic` (
  `Reg_Number` varchar(50) NOT NULL,
  `Course_Code` varchar(50) NOT NULL,
  `Attempt` int(5) NOT NULL,
  `Register_Date` date NOT NULL,
  `Coord_Approved` tinyint(1) NOT NULL,
  `Coord_Approved_Date` date NOT NULL,
  `Coord_Observation` text NOT NULL,
  `Registration_Approved_Date` date NOT NULL,
  `Results` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students_academic`
--

INSERT INTO `students_academic` (`Reg_Number`, `Course_Code`, `Attempt`, `Register_Date`, `Coord_Approved`, `Coord_Approved_Date`, `Coord_Observation`, `Registration_Approved_Date`, `Results`) VALUES
('2019/E/099', 'EC6010', 1, '2023-07-17', 1, '2023-07-20', 'wtewtre', '2023-07-04', 'B'),
('2019/E/099', 'EC6060', 1, '2023-07-11', 1, '2023-07-20', 'Coordinator approved', '2023-07-18', 'A+');

-- --------------------------------------------------------

--
-- Table structure for table `student_registration`
--

CREATE TABLE `student_registration` (
  `Reg_Number` varchar(50) NOT NULL,
  `Personal_Email` varchar(50) NOT NULL,
  `Phone_Number` varchar(50) NOT NULL,
  `Home_Number` varchar(50) NOT NULL,
  `Permenant_Address` varchar(50) NOT NULL,
  `Temporary_Address` varchar(50) NOT NULL,
  `NIC` varchar(50) NOT NULL,
  `Registration_Date` date NOT NULL,
  `AL_Index_Number` varchar(50) NOT NULL,
  `Applied_Year` int(5) NOT NULL,
  `Medium` varchar(50) NOT NULL,
  `Z_Score` float NOT NULL,
  `Gender` varchar(50) NOT NULL,
  `Race` varchar(50) NOT NULL,
  `Religion` varchar(50) NOT NULL,
  `Country` varchar(50) NOT NULL,
  `Nationality` varchar(50) NOT NULL,
  `Citizenship` varchar(50) NOT NULL,
  `Photo` longtext NOT NULL,
  `Status` varchar(15) NOT NULL,
  `Emergency_Contact_Name` varchar(50) NOT NULL,
  `Emergency_Relationship_To_The_Student` varchar(50) NOT NULL,
  `Emergency_Phone_Number` varchar(50) NOT NULL,
  `Emergency_Address` varchar(50) NOT NULL,
  `Full_Name` varchar(50) NOT NULL,
  `Name_With_Initial` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_registration`
--

INSERT INTO `student_registration` (`Reg_Number`, `Personal_Email`, `Phone_Number`, `Home_Number`, `Permenant_Address`, `Temporary_Address`, `NIC`, `Registration_Date`, `AL_Index_Number`, `Applied_Year`, `Medium`, `Z_Score`, `Gender`, `Race`, `Religion`, `Country`, `Nationality`, `Citizenship`, `Photo`, `Status`, `Emergency_Contact_Name`, `Emergency_Relationship_To_The_Student`, `Emergency_Phone_Number`, `Emergency_Address`, `Full_Name`, `Name_With_Initial`) VALUES
('2019/E/099', 'mihirie1@gmail.com', '0712769705', '0766392569', 'govt staff village', 'girls hostel kilinochchi', '978541186v', '2019-11-19', '1662356', 2018, 'sinhala', 1.48, 'Female', 'sinhala', 'buddhist', 'SriLanka', 'SriLankan', 'Srilankan', '', 'Single', 'Sarath Elapatha', 'Father', '0714966823', 'govt staff village ', 'Elapathage sarath jayweera', 'E.S Jayaweera');

-- --------------------------------------------------------

--
-- Table structure for table `student_university_details`
--

CREATE TABLE `student_university_details` (
  `Reg_Number` varchar(50) NOT NULL,
  `Department_ID` varchar(15) NOT NULL,
  `Academic_Year_Current` varchar(20) NOT NULL,
  `Semester_Current` int(5) NOT NULL,
  `University_Email` varchar(50) NOT NULL,
  `Batch_Misses` int(5) NOT NULL,
  `Advisor_ID` varchar(15) NOT NULL,
  `Advisor_Start_Date` date NOT NULL,
  `Password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_university_details`
--

INSERT INTO `student_university_details` (`Reg_Number`, `Department_ID`, `Academic_Year_Current`, `Semester_Current`, `University_Email`, `Batch_Misses`, `Advisor_ID`, `Advisor_Start_Date`, `Password`) VALUES
('2019/E/099', 'Computer', '2023', 6, '2019e099@eng.jfn.ac.lk', 0, 'COM_kaneshwaran', '2023-07-03', 'PASSWORDmihiri');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_staff`
--
ALTER TABLE `academic_staff`
  ADD PRIMARY KEY (`Staff_ID`),
  ADD KEY `Department_ID` (`Department_ID`);

--
-- Indexes for table `advisor_history`
--
ALTER TABLE `advisor_history`
  ADD PRIMARY KEY (`Advisor_ID`,`Student_ID`,`Start_Date`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`Course_Code`),
  ADD KEY `Coordinator_ID` (`Coordinator_ID`),
  ADD KEY `Offered_Department_ID` (`Offered_Department_ID`),
  ADD KEY `courses_ibfk_2` (`Pre_Requisite_Course_Code`);

--
-- Indexes for table `course_history_offered`
--
ALTER TABLE `course_history_offered`
  ADD PRIMARY KEY (`Course_Code`),
  ADD KEY `Coord_ID` (`Coord_ID`);

--
-- Indexes for table `course_registartion`
--
ALTER TABLE `course_registartion`
  ADD PRIMARY KEY (`Reg_Number`,`Course_Code`,`Attempt`),
  ADD KEY `Course_Code` (`Course_Code`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Department_ID`);

--
-- Indexes for table `department_course`
--
ALTER TABLE `department_course`
  ADD PRIMARY KEY (`Offered_To_Which_Department_ID`,`Course_Code`),
  ADD KEY `Course_Code` (`Course_Code`);

--
-- Indexes for table `medical_submission`
--
ALTER TABLE `medical_submission`
  ADD PRIMARY KEY (`Reg_Number`,`Course_Code`,`Medical_ID`),
  ADD KEY `Course_Code` (`Course_Code`);

--
-- Indexes for table `prerequisite_course_details`
--
ALTER TABLE `prerequisite_course_details`
  ADD PRIMARY KEY (`Course_Code`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`Reg_Number`,`Course_Code`,`Attempt`),
  ADD KEY `Course_Code` (`Course_Code`);

--
-- Indexes for table `semester_details`
--
ALTER TABLE `semester_details`
  ADD PRIMARY KEY (`Semester`,`Year`);

--
-- Indexes for table `students_academic`
--
ALTER TABLE `students_academic`
  ADD PRIMARY KEY (`Reg_Number`,`Course_Code`,`Attempt`),
  ADD KEY `Course_Code` (`Course_Code`);

--
-- Indexes for table `student_registration`
--
ALTER TABLE `student_registration`
  ADD PRIMARY KEY (`Reg_Number`,`NIC`);

--
-- Indexes for table `student_university_details`
--
ALTER TABLE `student_university_details`
  ADD PRIMARY KEY (`Reg_Number`),
  ADD KEY `Department_ID` (`Department_ID`),
  ADD KEY `student_university_details_ibfk_2` (`Advisor_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `academic_staff`
--
ALTER TABLE `academic_staff`
  ADD CONSTRAINT `academic_staff_ibfk_1` FOREIGN KEY (`Department_ID`) REFERENCES `department` (`Department_ID`);

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`Coordinator_ID`) REFERENCES `academic_staff` (`Staff_ID`),
  ADD CONSTRAINT `courses_ibfk_2` FOREIGN KEY (`Pre_Requisite_Course_Code`) REFERENCES `prerequisite_course_details` (`Course_Code`),
  ADD CONSTRAINT `courses_ibfk_3` FOREIGN KEY (`Offered_Department_ID`) REFERENCES `department` (`Department_ID`);

--
-- Constraints for table `course_history_offered`
--
ALTER TABLE `course_history_offered`
  ADD CONSTRAINT `course_history_offered_ibfk_1` FOREIGN KEY (`Coord_ID`) REFERENCES `academic_staff` (`Staff_ID`);

--
-- Constraints for table `course_registartion`
--
ALTER TABLE `course_registartion`
  ADD CONSTRAINT `course_registartion_ibfk_1` FOREIGN KEY (`Reg_Number`) REFERENCES `student_university_details` (`Reg_Number`),
  ADD CONSTRAINT `course_registartion_ibfk_2` FOREIGN KEY (`Course_Code`) REFERENCES `courses` (`Course_Code`);

--
-- Constraints for table `department_course`
--
ALTER TABLE `department_course`
  ADD CONSTRAINT `department_course_ibfk_1` FOREIGN KEY (`Course_Code`) REFERENCES `courses` (`Course_Code`),
  ADD CONSTRAINT `department_course_ibfk_2` FOREIGN KEY (`Offered_To_Which_Department_ID`) REFERENCES `department` (`Department_ID`);

--
-- Constraints for table `medical_submission`
--
ALTER TABLE `medical_submission`
  ADD CONSTRAINT `medical_submission_ibfk_2` FOREIGN KEY (`Course_Code`) REFERENCES `courses` (`Course_Code`),
  ADD CONSTRAINT `medical_submission_ibfk_3` FOREIGN KEY (`Reg_Number`) REFERENCES `student_university_details` (`Reg_Number`);

--
-- Constraints for table `results`
--
ALTER TABLE `results`
  ADD CONSTRAINT `results_ibfk_1` FOREIGN KEY (`Course_Code`) REFERENCES `courses` (`Course_Code`),
  ADD CONSTRAINT `results_ibfk_2` FOREIGN KEY (`Reg_Number`) REFERENCES `student_university_details` (`Reg_Number`);

--
-- Constraints for table `students_academic`
--
ALTER TABLE `students_academic`
  ADD CONSTRAINT `students_academic_ibfk_2` FOREIGN KEY (`Course_Code`) REFERENCES `courses` (`Course_Code`),
  ADD CONSTRAINT `students_academic_ibfk_3` FOREIGN KEY (`Reg_Number`) REFERENCES `student_university_details` (`Reg_Number`);

--
-- Constraints for table `student_registration`
--
ALTER TABLE `student_registration`
  ADD CONSTRAINT `student_registration_ibfk_1` FOREIGN KEY (`Reg_Number`) REFERENCES `student_university_details` (`Reg_Number`);

--
-- Constraints for table `student_university_details`
--
ALTER TABLE `student_university_details`
  ADD CONSTRAINT `student_university_details_ibfk_1` FOREIGN KEY (`Department_ID`) REFERENCES `department` (`Department_ID`),
  ADD CONSTRAINT `student_university_details_ibfk_2` FOREIGN KEY (`Advisor_ID`) REFERENCES `academic_staff` (`Staff_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
