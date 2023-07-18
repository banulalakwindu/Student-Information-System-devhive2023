const { Course, Courseregistration, Academicstaff } = require('../models');
module.exports = {
  async getCourses(req, res) {
    try {
      const courses = await Courses.findAll({
        attributes: ['course_code', 'course_name', 'credit'],
        include: [
          {
            model: Academicstaff,
            attributes: ['Full_Name'],
            where: { Staff_ID : Sequelize.col('courses.coordinator_id') },
          },
          {
            model: Courseregistration,
            attributes: [],
            where: { OpenClose: '1' },
          },
        ],
        where: { offered_semester: '5' },
      });
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
