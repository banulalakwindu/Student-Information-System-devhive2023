const { Op } = require('sequelize');
const { Course, Prerequestcoursedetails, Result } = require('../models');
const prerequisitecoursedetails = require('../models/prerequisitecoursedetails');

module.exports = {
  async getPrerequest(req, res) {
    try {
      const { code } = req.params; // Extract the 'code' parameter from req.params
      const results = await Course.findAll({
        attributes: ['Course_Code', 'Course_Name', 'Credit'],
        where: { Course_Code: code },
        include: [
          {
            model: Prerequestcoursedetails,
            as: 'prerequisiteCourses',
            attributes: ['Prerequisite_Course_code'],
          },
          {
            model: Result,
            as: 'courseResults',
            attributes: ['Result'],
            where: { Reg_Number: '2019/E/099' },
          },
        ],
      });

      const coursesData = results.map((course) => {
        const prerequisiteCourseDetails =
          course.prerequisiteCourses.map((prerequisite) => prerequisite.Prerequisite_Course_code);

        const result = course.courseResults[0] ? course.courseResults[0].Result : null;

        return {
          Course_Code: course.Course_Code,
          Course_Name: course.Course_Name,
          Credit: course.Credit,
          Prerequisite_Course_code: prerequisiteCourseDetails,
          Result: result,
        };
      });

      res.status(200).json(coursesData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
