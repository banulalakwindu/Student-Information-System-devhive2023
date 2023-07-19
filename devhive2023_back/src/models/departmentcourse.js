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
      // DepartmentCourse.belongsTo(models.Department, {
      //   foreignKey: 'Offered_To_Which_Department_ID',
      //   targetKey: 'Department_ID',
      //   as: 'department',
      // });
      // DepartmentCourse.belongsTo(models.Course, {
      //   foreignKey: 'Course_Code',
      //   targetKey: 'Course_Code',
      //   as: 'course',
      // });
    }
  }
  DepartmentCourse.init({
    Department_ID:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    Course_Code:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'DepartmentCourse',
  });
  return DepartmentCourse;
};