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

const {Result,Course } = require('../models');

module.exports = {
  async getResults(req, res) {
    try {
      const { code } = req.params;
      const results = await Results.findAll({
        attributes: ['Course_Code', 'Attempt', 'Result'],
        include: [
          {
            model: Courses,
            attributes: ['Course_name', 'Credit'],
            where: { Offered_Semester: '6' },
          },
        ],
        where: { Reg_Number: '2019/E/099' },
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
