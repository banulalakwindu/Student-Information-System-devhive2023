'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DepartmentCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DepartmentCourse.init({
    Offered_To_Which_Department_ID: DataTypes.STRING,
    Course_Code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DepartmentCourse',
  });
  return DepartmentCourse;
};