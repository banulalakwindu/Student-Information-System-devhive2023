'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AllCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AllCourse.init({
    Course_Code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    Course_Name: DataTypes.STRING,
    Credit: DataTypes.INTEGER,
    Core_Technical: DataTypes.STRING,
    Offered_Semester: DataTypes.INTEGER,
    Offered_Department_ID: DataTypes.STRING,
    Open_Close: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'AllCourse',
  });
  return AllCourse;
};