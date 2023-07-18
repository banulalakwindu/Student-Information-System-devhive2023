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


