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
      // AcademicStaff.belongsTo(models.Department, {
      //   foreignKey: 'Department_ID',
      //   targetKey: 'Department_ID',
      //   as: 'department',
      // });
    }
    
  }
  AcademicStaff.init({
    Staff_ID:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
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