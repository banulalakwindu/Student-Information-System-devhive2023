const bcrypt = require('bcrypt');
const {Studentunivasitydetails } = require('../models'); // Adjust the path as needed to import your Sequelize model

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

module.exports = {
  register
};
