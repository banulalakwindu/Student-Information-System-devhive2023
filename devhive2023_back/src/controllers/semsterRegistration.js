const semesterRegistration = async (req, res) => {
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

      const courseCodes = await studentRegistration.findAll({ 
        attributes: ['Course_Code', 'Course_Name', 'Credit',"Core_Technical"],
        include: [{
          model: Studentacademic,
          as: 'studentacademic',
          attributes: ['Attempt', 'Results'],
          where: { Reg_Number: studentRegNumber },
        }],
        where: { Offered_Semester: semester },
      });

      //const currentSemester = studentRegistration.Semester_Current; 
      //console.log(currentSemester);


  
      //const semesters = semestersWithResults.map((semester) => semester.Offered_Semester);
  
      return res.status(200).json({ currentSemester });
    } catch (error) {
      console.error('Error fetching semesters with results:', error);
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  };