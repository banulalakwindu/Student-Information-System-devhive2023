'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentAcademic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentAcademic.belongsTo(models.StudentUniversityDetails, {
        foreignKey: 'Reg_Number',
        targetKey: 'Reg_Number',
        as: 'student',
      });
      StudentAcademic.belongsTo(models.Course, {
        foreignKey: 'Course_Code',
        targetKey: 'Course_Code',
        as: 'course',
      });

    }
  }
  StudentAcademic.init({
    Reg_Number:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    Course_Code:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    Attempt:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    Register_Date: DataTypes.DATE,
    Coord_Approved: DataTypes.BOOLEAN,
    Coord_Approved_Date: DataTypes.DATE,
    Coord_Observation: DataTypes.TEXT,
    Registration_Approved_Date: DataTypes.DATE,
    Results: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentAcademic',
  });
  return StudentAcademic;
};