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
      Course.belongsTo(models.AcademicStaff, {
        foreignKey: 'Coordinator_ID',
        targetKey: 'Staff_ID',
        as: 'coordinator',
      });
    
      Course.hasMany(models.CourseRegistration, {
        foreignKey: 'Course_Code',
        sourceKey: 'Course_Code',
        as: 'registrations',
      });
      Course.belongsTo(models.Department, {
        foreignKey: 'Offered_Department_ID',
        targetKey: 'Department_ID',
        as: 'department',
      });
      Course.hasMany(models.DepartmentCourse, {
        foreignKey: 'Course_Code',
        sourceKey: 'Course_Code',
        as: 'departmentcourses',
      });
      Course.hasMany(models.CourseHistoryOffered, {
        foreignKey: 'Course_Code',
        sourceKey: 'Course_Code',
        as: 'coursehistoryoffereds',
      });
      Course.hasMany(models.PrerequisiteCourseDetails, {
        foreignKey: 'Course_Code',
        sourceKey: 'Course_Code',
        as: 'prerequisitecoursedetails',
      });
      Course.hasMany(models.PrerequisiteCourseDetails, {
        foreignKey: 'Prerequisite_Course_Code',
        sourceKey: 'Course_Code',
        as: 'prerequisitecoursedetails2',
      });
    }
    
  }
  Course.init({
    Course_Code:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    Course_Name: DataTypes.STRING,
    Credit: DataTypes.INTEGER,
    Core_Technical: DataTypes.STRING,
    Coordinator_ID: DataTypes.STRING,
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