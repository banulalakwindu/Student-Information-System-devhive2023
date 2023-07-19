/*
const { Department } = require('../models');

module.exports = {
  async getResults(req, res) {
    try {
      const { code } = req.params;
      const results = await Department.findAll({
        attributes: ['Department_ID', 'Department_Name', 'createdAt', 'updatedAt'],
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
*/

//sql quary
// SELECT c.Course_Code, c.Course_Name, c.Credit, sa.Attempt, sa.Results
// FROM Course c
// JOIN StudentAcademic sa ON c.Course_Code = sa.Course_Code
// WHERE c.Course_Code = 'ec6010' AND sa.Reg_Number = '2019/e/099';

const { Studentacademic, Course } = require('../models');

module.exports = {
  async getResults(req, res) {
    try {
      const results = await Course.findOne({
        attributes: { exclude: ['id','Pre_Requisite_Course_Code'] }, // Exclude the 'id' field
        include: [
          {
            model: Studentacademic,
            attributes: ['Attempt', 'Results'],
            where: { Reg_Number: '2019/e/099' },
          },
        ],
        where: { Course_Code: 'ec6010' },
        raw: true, // Ensures plain JSON objects as query results
        nest: true, // Enables nested associations
      });

      if (results) {
        res.status(200).json(results);
      } else {
        res.status(404).json({ message: 'No matching records found.' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
