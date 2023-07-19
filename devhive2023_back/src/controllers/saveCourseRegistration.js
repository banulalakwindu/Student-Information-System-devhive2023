const { Course, Courseregistration, Academicstaff } = require('../models');

module.exports = {
  async getResults(req, res) {
    try {
      const { code } = req.params;
      const results = await Course.findAll({
        attributes: ['Course_Code', 'Course_Name', 'Credit'],
        include: [
          {
            model: Courseregistration,
            attributes: ['attempt'],
            where: { Reg_Number: '2019/E/099' },
          },
          {
            model: Academicstaff,
            attributes: ['Full_Name'],
          },
        ],
        where: { offered_semester: '6' },
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};