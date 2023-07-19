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
      // CourseRegistration.belongsTo(models.StudentUniversityDetails, {
      //   foreignKey: 'Reg_Number',
      //   targetKey: 'Reg_Number',
      //   as: 'student',
      // });
    
      // CourseRegistration.hasMany(models.Course, {
      //   foreignKey: 'Course_Code',
      //   targetKey: 'Course_Code',
      //   as: 'course',
      // });
    }
    
  }
  CourseRegistration.init({
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