//const { Studentacademic,Course } = require('../models');
const studentacademic = require('../models/studentacademic');

module.exports = {
  async getCources(req, res) {
    try {
      const { code } = req.params.code;
      const course = await studentacademic.findAll({
        attributes: ['Course_Code','Course_Name','Credit'],
        where:{
            'Course_Code':"EC9030"
        }
        //attributes: ['Department_ID', 'Department_Name', 'createdAt', 'updatedAt'],
      });
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};