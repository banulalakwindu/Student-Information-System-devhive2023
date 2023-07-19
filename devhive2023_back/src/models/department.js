'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Department.hasMany(models.AcademicStaff, {
      //   foreignKey: 'Department_ID',
      //   sourceKey: 'Department_ID',
      //   as: 'staffs',
      // });
      // Department.hasMany(models.CourseHistoryOffered, {
      //   foreignKey: 'Offered_Department_ID',
      //   sourceKey: 'Department_ID',
      //   as: 'courses',
      // });
      // Department.hasMany(models.StudentUniversityDetails, {
      //   foreignKey: 'Department_ID',
      //   sourceKey: 'Department_ID',
      //   as: 'students',
      // });
      // Department.hasMany(models.DepartmentCourse, {
      //   foreignKey: 'Offered_To_Which_Department_ID',
      //   sourceKey: 'Department_ID',
      //   as: 'departmentcourses',
      // });
      
    }
  }
  Department.init({
    Department_ID:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    } ,
    Department_Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};