'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentUniversityDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // StudentUniversityDetails.belongsTo(models.Department, {
      //   foreignKey: 'Department_ID',
      //   targetKey: 'Department_ID',
      //   as: 'department',
      // });
      // StudentUniversityDetails.belongsTo(models.AdvisorHistory, {
      //   foreignKey: 'Advisor_ID',
      //   targetKey: 'Advisor_ID',
      //   as: 'advisor',
      // });
    }
  }
  StudentUniversityDetails.init({
    Reg_Number: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    University_Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Department_ID: DataTypes.STRING,
    Academic_Year_Current: DataTypes.STRING,
    Semester_Current: DataTypes.INTEGER,
    Batch_Misses: DataTypes.INTEGER,
    Advisor_ID: DataTypes.STRING,
    Advisor_Start_Date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'StudentUniversityDetails',
  });
  return StudentUniversityDetails;
};