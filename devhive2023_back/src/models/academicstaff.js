'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AcademicStaff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AcademicStaff.init({
    Staff_ID: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Department_ID: DataTypes.STRING,
    Full_Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AcademicStaff',
  });
  return AcademicStaff;
};