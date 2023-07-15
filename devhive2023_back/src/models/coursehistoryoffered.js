'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseHistoryOffered extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CourseHistoryOffered.init({
    Course_Code: DataTypes.STRING,
    Course_Name: DataTypes.STRING,
    Credit: DataTypes.INTEGER,
    Core_Technical: DataTypes.STRING,
    Coord_ID: DataTypes.STRING,
    Pre_Requisites_Course_Code: DataTypes.STRING,
    Offered_Semester: DataTypes.INTEGER,
    Offered_Department_ID: DataTypes.INTEGER,
    Academic_Year: DataTypes.STRING,
    Semester_Start_Date: DataTypes.DATE,
    Semester_End_Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CourseHistoryOffered',
  });
  return CourseHistoryOffered;
};