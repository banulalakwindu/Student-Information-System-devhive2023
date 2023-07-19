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
    Semester_Current:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    Semester_Start_Date: DataTypes.DATE,
    Semester_End_Date: DataTypes.DATE,
    Year:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'SemesterDetails',
  });
  return SemesterDetails;
};