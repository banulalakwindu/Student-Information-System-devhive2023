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
    }
  }
  PrerequisiteCourseDetails.init({
    Course_Code: DataTypes.STRING,
    Prerequisite_Course_Code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PrerequisiteCourseDetails',
  });
  return PrerequisiteCourseDetails;
};