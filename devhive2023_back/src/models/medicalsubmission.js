'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalSubmission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MedicalSubmission.init({
    Reg_Number: DataTypes.STRING,
    //Course_Code: DataTypes.STRING,
    Medical_ID: DataTypes.INTEGER,
    //Type: DataTypes.STRING,
    //Description: DataTypes.TEXT,
    Medical_Report: DataTypes.TEXT,
    Approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MedicalSubmission',
  });
  return MedicalSubmission;
};