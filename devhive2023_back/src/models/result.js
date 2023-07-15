'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Result.init({
    Reg_Number: DataTypes.STRING,
    Course_Code: DataTypes.STRING,
    Attempt: DataTypes.INTEGER,
    Result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};