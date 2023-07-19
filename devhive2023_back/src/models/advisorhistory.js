'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdvisorHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // AdvisorHistory.hasMany(models.StudentUniversityDetails, {
      //   foreignKey: 'Advisor_ID',
      //   sourceKey: 'Advisor_ID',
      //   as: 'students',
      // });
      // AdvisorHistory.belongsTo(models.AcademicStaff, {
      //   foreignKey: 'Advisor_ID',
      //   targetKey: 'Staff_ID',
      //   as: 'advisor',
      // });
        
    }
  }
  AdvisorHistory.init({
    Staff_ID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    Student_ID:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    Start_Date:{
      type: DataTypes.DATE,
      primaryKey: true,
      allowNull: false
    },
    End_Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AdvisorHistory',
  });
  return AdvisorHistory;
};