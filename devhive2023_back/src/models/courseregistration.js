'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseRegistration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CourseRegistration.init({
    Reg_Number: DataTypes.STRING,
    Course_Code: DataTypes.STRING,
    Attempt: DataTypes.INTEGER,
    Register_Date: DataTypes.DATE,
    Coord_Approved: DataTypes.BOOLEAN,
    Coord_Approved_Date: DataTypes.DATE,
    Coord_Obervation: DataTypes.TEXT,
    Registration_Approved_Date: DataTypes.DATE,
    Draft: DataTypes.TEXT,
    Open_Close: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CourseRegistration',
  });
  return CourseRegistration;
};