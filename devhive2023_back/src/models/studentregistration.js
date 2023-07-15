'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentRegistration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentRegistration.init({
    Reg_Number: DataTypes.STRING,
    Personal_Email: DataTypes.STRING,
    Phone_Number: DataTypes.STRING,
    Home_Number: DataTypes.STRING,
    Permenant_Address: DataTypes.STRING,
    Temporary_Address: DataTypes.STRING,
    NIC: DataTypes.STRING,
    Registration_Date: DataTypes.DATE,
    AL_Index_Number: DataTypes.STRING,
    Applied_Year: DataTypes.INTEGER,
    Medium: DataTypes.STRING,
    Z_Score: DataTypes.FLOAT,
    Gender: DataTypes.STRING,
    Race: DataTypes.STRING,
    Religion: DataTypes.STRING,
    Country: DataTypes.STRING,
    Nationality: DataTypes.STRING,
    Citizenship: DataTypes.STRING,
    Photo: DataTypes.TEXT,
    Status: DataTypes.STRING,
    Emergency_Contact_Name: DataTypes.STRING,
    Emergency_Relationship_To_The_Student: DataTypes.STRING,
    Emergency_Phone_Number: DataTypes.STRING,
    Emergency_Address: DataTypes.STRING,
    Full_Name: DataTypes.STRING,
    Name_With_Initial: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentRegistration',
  });
  return StudentRegistration;
};