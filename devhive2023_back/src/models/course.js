'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    Course_Code: DataTypes.STRING,
    Course_Name: DataTypes.STRING,
    Credit: DataTypes.INTEGER,
    Core_Technical: DataTypes.STRING,
    Coordinator_ID: DataTypes.STRING,
    Pre_Requisite_Course_Code: DataTypes.STRING,
    Offered_Semester: DataTypes.INTEGER,
    Offered_Department_ID: DataTypes.STRING,
    Academic_Year_Current: DataTypes.STRING,
    Registratipon_Open_Date: DataTypes.DATE,
    Registration_Close_Date: DataTypes.DATE,
    Semester_Start_Date: DataTypes.DATE,
    Semester_Close_Date: DataTypes.DATE,
    Open_Close: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};