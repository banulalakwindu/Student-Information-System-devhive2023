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
const{Course,Studentacademic} = require('../models');

module.exports = {
  async getResults(req, res) {
    try {
      const { code, reg } = req.params;
      const results = await Course.findAll({
        attributes: ['Course_Code', 'Course_Name', 'Credit'],
        include: [{
          model: Studentacademic,
          as: 'studentacademic',
          attributes: ['Attempt', 'Results'],
          where: {
            Reg_Number: '2019/e/099',
          },
        }],
        where: {
          Course_Code: 'EC6010',
        },
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};


