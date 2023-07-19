const { Courseregistration } = require('../models');

module.exports = {
  async insertCourseRegistration(req, res) {
    try {
      const { Course_Code, Attempt, Reg_Number, Register_Date } = req.body;
      const result = await Courseregistration.create({
        Course_Code: Course_Code,
        Attempt: Attempt,
        Reg_Number: Reg_Number,
        Register_Date: Register_Date,
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
