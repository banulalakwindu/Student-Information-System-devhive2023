'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentAcademic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentAcademic.init({
    Reg_Number: DataTypes.STRING,
    Course_Code: DataTypes.STRING,
    Attempt: DataTypes.INTEGER,
    Register_Date: DataTypes.DATE,
    Coord_Approved: DataTypes.BOOLEAN,
    Coord_Approved_Date: DataTypes.DATE,
    Coord_Observation: DataTypes.TEXT,
    Registration_Approved_Date: DataTypes.DATE,
    Results: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentAcademic',
  });
  return StudentAcademic;
};