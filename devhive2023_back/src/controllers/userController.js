const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Academicstaff,Advisorhistory,Course,Coursehistoryoffered,Courseregistration,Department,Departmentcourse,Medicalsubmission,Prerequestcoursedetails,Semesterdetails,Studentacademic,Studentregistration,Studentunivasitydetails,Allcourses } = require('../models');
const e = require('express');
const {calculateGPA} = require('./gpa');
const { Op, Sequelize } = require('sequelize');

//login
const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const student = await Studentunivasitydetails.findOne({ where: { University_Email: email } });
      if (!student) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Compare the plain text password with the hashed password from the database
      bcrypt.compare(password, student.Password, (err, result) => {
        if (err) {
          return res.status(400).json({ message: 'Invalid email or password' });
        }
        if (result) {
          // Provide a valid secret key for signing the JWT
          const secretKey = 'devhive'; // Replace this with your actual secret key
          const expiresIn = 60 * 60 ;                   
  
          // Sign the JWT
          const token = jwt.sign({email:student.University_Email }, secretKey, { expiresIn });
          const refreshToken = jwt.sign({email:student.University_Email }, secretKey, { expiresIn: 60 * 60 * 24 * 3 });

          //session
          req.session.student = student;
          
          // Store the refresh token in the database
          refreshTokens.push(refreshToken);
          
          const PasswordStatus = student.flag; 
          return res.status(200).json({ message: 'Login success', token,refreshToken,student,passwordStatus:PasswordStatus});
          
        }
        return res.status(400).json({ message: 'Invalid email or password' });
      });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Login failed. Please try again later.' });
    }
};

let refreshTokens = [];

//register
const register = async (req, res) => {
    const { Reg_Number, University_Email, Password, Department_ID,Academic_Year_Current,Semester_Current ,Batch_Misses,Advisor_ID,Advisor_Start_Date} = req.body;
  
    try {
      // Check if the user with the given Reg_Number already exists
      const existingStudent = await Studentunivasitydetails.findOne({
        where: { Reg_Number },
      });
  
      if (existingStudent) {
        return res.status(400).json({ message: 'Student already exists.' });
      }
  
      // Hash the password using bcrypt
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(Password, saltRounds);
  
      // Create the student record with the hashed password and other data
      const newStudent = await Studentunivasitydetails.create({
          Reg_Number,
          University_Email,
          Password: hashedPassword,
          Department_ID,
          Academic_Year_Current,
          Semester_Current,
          Batch_Misses,
          Advisor_ID,
          Advisor_Start_Date      
        // ... Add other fields as needed based on your Sequelize model
      });
  
      return res.status(201).json({ message: 'Registration successful.', student: newStudent });
    } catch (error) {
      // Handle any errors that might occur during the registration process
      console.error('Error during registration:', error);
      return res.status(500).json({ message: 'Registration failed. Please try again later.' });
    }
  };

  const getResults = async (req, res) => {
    try {
      const { code } = req.params;
      
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Authorization token not provided.' });
      }

      // Provide a valid secret key used to sign the JWT (same key used during login)
      const secretKey = 'devhive';
      try{
        // Verify the JWT
        const decoded = jwt.verify(token, secretKey);
        const email = decoded.email;
        const student = await Studentunivasitydetails.findOne({
          where: { University_Email: email },
        });
  
        if (!student) {
          return res.status(400).json({ message: 'Student not found for the given email.' });
        }
        const results = await Coursehistoryoffered.findAll({
            attributes: ['Course_Code', 'Course_Name', 'Credit'],
            include: [{
              model: Studentacademic,
              as: 'studentacademic',
              attributes: ['Attempt', 'Results'],
              where: {
                Reg_Number: student.Reg_Number,
              },
            }],
            where: {
              Course_Code: code,
            },
          });

          const grades = results.map((result) => result.studentacademic[0].Results);

          res.status(200).json({
            
            results,grades
          });
        
      }catch(error){
        return res.status(401).json({ message: 'Authorization token invalid.' });
      }
      
    } catch (error) {
      res.status(500).json(error);
    }
  };


  const getSemestersWithResults = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const secretKey = 'devhive';
    try {
      // Find the student's registration number based on the given email
      const decoded = jwt.verify(token, secretKey);
      const email = decoded.email;
      const studentRegistration = await Studentunivasitydetails.findOne({
        where: { University_Email: email },
      });
  
      if (!studentRegistration) {
        return res.status(404).json({ message: 'Student not found' });
      }    

      const currentSemester = studentRegistration.Semester_Current; 
      console.log(currentSemester);


  
      //const semesters = semestersWithResults.map((semester) => semester.Offered_Semester);
  
      return res.status(200).json({ currentSemester });
    } catch (error) {
      console.error('Error fetching semesters with results:', error);
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  };

  const regCourseInSemester = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const secretKey = 'devhive';
    const {semester} = req.params;
    try {
      // Find the student's registration number based on the given email
      const decoded = jwt.verify(token, secretKey);
      const email = decoded.email;
      const studentRegistration = await Studentunivasitydetails.findOne({
        attributes: ['Reg_Number'],       
        where: { University_Email: email },
      });

      if (!studentRegistration) {
        return res.status(404).json({ message: 'Student not found' });
      }

      const studentRegNumber = studentRegistration.Reg_Number;

      //fetch courses for the given semester
      const courseCodes = await Coursehistoryoffered.findAll({
        attributes: ['Course_Code', 'Course_Name', 'Credit',"Core_Technical"],
        include: [{
          model: Studentacademic,
          as: 'studentacademic',
          attributes: ['Attempt', 'Results'],
          where: { Reg_Number: studentRegNumber },
        }],
        where: { Offered_Semester: semester },
      });
      //add Course_Code and Core_Technical in to json
      // const courseCodes = courses.map((course) => {
      //   return {
      //     Course_Code: course.Course_Code,
      //     Course_Name: course.Course_Name,
      //     Credit: course.Credit,
      //     Core_Technical: course.Core_Technical,
      //     Attempt: course.studentacademic.Attempt,
      //     Results: course.studentacademic.Results,

      //   };
      // });
      


      return res.status(200).json({ courseCodes });
    } catch (error) {
      console.error('Error fetching courses for the given semester:', error);
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  };

  const logout = async (req, res) => {
    req.session.destroy();
    res.status(200).json({message:'Logout success'});
  };

  const updatePassword = async (req, res) => {
    const { oldPassword, Password } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Authorization token not provided.' });
    }
  
    // Provide a valid secret key used to sign the JWT (same key used during login)
    const secretKey = 'devhive';
    try {
      // Verify the JWT
      const decoded = jwt.verify(token, secretKey);
      const email = decoded.email;
      const studentRegistration = await Studentunivasitydetails.findOne({
        where: { University_Email: email },
      });
  
      if (!studentRegistration) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      const studentRegNumber = studentRegistration.Reg_Number;
  
      // Wrap bcrypt.compare in a Promise and use await
      const result = await new Promise((resolve, reject) => {
        bcrypt.compare(oldPassword, studentRegistration.Password, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
  
      if (result) {
        // Hash the new password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);
  
        // Update the password in the database
        await Studentunivasitydetails.update(
          { Password: hashedPassword,flag:1 },
          { where: { Reg_Number: studentRegNumber } }
        );
  
        return res.status(200).json({ message: 'Password updated successfully.' });
      } else {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      return res.status(401).json({ message: 'Authorization token invalid. e1', error });
    }
  };
  const getUser = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authorization token not provided.' });
    }

    // Provide a valid secret key used to sign the JWT (same key used during login)
    const secretKey = 'devhive';
    try {
      // Verify the JWT
      const decoded = jwt.verify(token, secretKey);
      const email = decoded.email;

      const user = await Studentunivasitydetails.findOne({
        include: [{
          model: Studentregistration,
          as: 'studentregistration',          
        }],
        where: { University_Email: email },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(401).json({ message: 'Authorization token invalid. e1', error });
    }
  };

  const getRegOpenSemesters = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authorization token not provided.' });
    }
    const secretKey = 'devhive';
    try {
      const decoded = jwt.verify(token, secretKey);
      const email = decoded.email;
      const student = await Studentunivasitydetails.findOne({
        where: { University_Email: email },
      });
      if (!student) {
        return res.status(400).json({ message: 'Student not found for the given email.' });
      }

      const currentSemester = student.Semester_Current;
      const aligibleSemesters = await Course.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('Offered_Semester')), 'Offered_Semester']],
        include: [{
          model: Departmentcourse,
          where: {
            Department_ID: student.Department_ID,
          },
          attributes: [],
          // as: 'course', // Use the correct alias "department" here.
        }],
        where: {
          Registration_Close_Date: {
            [Op.gt]: new Date(),
          },
          Offered_Semester: {
            [Op.lte]: currentSemester,
          },
        },
        raw: true,
      });
      const semesters = aligibleSemesters.map((semester) => semester.Offered_Semester);
      return res.status(200).json({ semesters });
    } catch (error) {
      console.error('Error fetching semesters with results:', error);
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  };

  const aligibleCourses = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { semester } = req.params;

    if (!token) {
      return res.status(401).json({ message: 'Authorization token not provided.' });
    }
    const secretKey = 'devhive';
    try {
      const decoded = jwt.verify(token, secretKey);
      const email = decoded.email;
      const student = await Studentunivasitydetails.findOne({
        where: { University_Email: email },
      });
      if (!student) {
        return res.status(400).json({ message: 'Student not found for the given email.' });
      }

      const currentSemester = student.Semester_Current;
      const aligiblecours = await Course.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('Course.Course_Code')), 'Course_Code']],
        include: [{
          model: Departmentcourse,
          where: {
            Department_ID: student.Department_ID,
          },
          attributes: [],
          // as: 'course', // Use the correct alias "department" here.
        }],
        where: {
          Offered_Semester: semester,
        },
        raw: true,
      });

      const courses = aligiblecours.map((course) => course.Course_Code);
      return res.status(200).json({ courses });
    } catch (error) {
      console.error('Error fetching semesters with results:', error);
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  };

  const courseDetails = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { courseCode } = req.params;
    console.log(123324824);
    if (!token) {
      return res.status(401).json({ message: 'Authorization token not provided.' });
    }
    const secretKey = 'devhive';
    try {
      const decoded = jwt.verify(token, secretKey);
      const email = decoded.email;
      const student = await Studentunivasitydetails.findOne({
        where: { University_Email: email },
      });
      if (!student) {
        return res.status(400).json({ message: 'Student not found for the given email.' });
      }

      const course = await Course.findAll({
        attributes: ['Course_Code', 'Course_Name', 'Credit', 'Core_Technical'],
        include: [{
          model: Academicstaff,
          attributes: ['Full_Name'],
          as: 'academicstaff',
        }],
        where: {
          Course_Code: courseCode,
        },
      });

      return res.status(200).json({ course });
    } catch (error) {
      console.error('Error fetching semesters with results:', error);
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  };

  const preRequest = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { code } = req.params;
    console.log(123324824);
    if (!token) {
      return res.status(401).json({ message: 'Authorization token not provided.' });
    }
    const secretKey = 'devhive';
    try {
      const decoded = jwt.verify(token, secretKey);
      const email = decoded.email;
      const student = await Studentunivasitydetails.findOne({
        where: { University_Email: email },
      });
      if (!student) {
        return res.status(400).json({ message: 'Student not found for the given email.' });
      }

      const preReq = await Prerequestcoursedetails.findAll({
        attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('Course_Code')), 'Course_Code'],'Prerequisite_Course_Code'],
        where: {
          Course_Code: code,
        },
      });

      return res.status(200).json({ preReq });
    } catch (error) {
      console.error('Error fetching semesters with results:', error);
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  };





  
  



    

  


  module.exports = {
    login,
    register,
    getResults,
    getSemestersWithResults,
    regCourseInSemester,
    logout,
    updatePassword,
    getUser,
    getRegOpenSemesters,
    aligibleCourses,
    courseDetails,
    preRequest
  };