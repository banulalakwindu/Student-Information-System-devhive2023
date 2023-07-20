const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Studentunivasitydetails } = require('../models');

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

        // Sign the JWT
        const token = jwt.sign({ id: student.Reg_Number }, secretKey, { expiresIn: '1d' });

        return res.status(200).json({ message: 'Login success', token });
      }
      return res.status(400).json({ message: 'Invalid email or password' });
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Login failed. Please try again later.' });
  }
};



module.exports = {
  login,
};
