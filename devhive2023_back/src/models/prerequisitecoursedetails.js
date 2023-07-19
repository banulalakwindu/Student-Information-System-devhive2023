'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrerequisiteCourseDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PrerequisiteCourseDetails.belongsTo(models.Course, {
        foreignKey: 'Course_Code',
        targetKey: 'Course_Code',
        as: 'course',
      });
      PrerequisiteCourseDetails.belongsTo(models.Course, {
        foreignKey: 'Prerequisite_Course_Code',
        targetKey: 'Course_Code',
        as: 'prerequisite_course',
      });
    }
  }
  PrerequisiteCourseDetails.init({
    Course_Code:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    Prerequisite_Course_Code:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'PrerequisiteCourseDetails',
  });
  return PrerequisiteCourseDetails;
};