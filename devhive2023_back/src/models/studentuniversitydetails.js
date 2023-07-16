'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentUniversityDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentUniversityDetails.init({
    Reg_Number: DataTypes.STRING,
    Department_ID: DataTypes.STRING,
    Academic_Year_Current: DataTypes.STRING,
    Semester_Current: DataTypes.INTEGER,
    University_Email: DataTypes.STRING,
    Batch_Misses: DataTypes.INTEGER,
    Advisor_ID: DataTypes.STRING,
    Advisor_Start_Date: DataTypes.DATE,
    Password: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'StudentUniversityDetails',
  });
  return StudentUniversityDetails;
};