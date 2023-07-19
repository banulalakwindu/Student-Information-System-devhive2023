const { courses, course_registration, academic_staff } = require('../models');

module.exports = {
  async getResults(req, res) {
    try {
      const results = await courses.findAll({
        attributes: ['course_code', 'course_name', 'credit'],
        include: [
          {
            model: course_registration,
            attributes: [],
            where: { OpenClose: '1' },
          },
          {
            model: academic_staff,
            attributes: ['Full_Name'],
          },
        ],
        where: { offered_semester: '5' },
      });

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
