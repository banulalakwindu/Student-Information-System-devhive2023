'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SemesterDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SemesterDetails.init({
    Semester: DataTypes.INTEGER,
    Semester_Start_Date: DataTypes.DATE,
    Semester_End_Date: DataTypes.DATE,
    Year: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SemesterDetails',
  });
  return SemesterDetails;
};