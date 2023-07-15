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
    }
  }
  AdvisorHistory.init({
    Advisor_ID: DataTypes.STRING,
    Student_ID: DataTypes.STRING,
    Start_Date: DataTypes.DATE,
    End_Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AdvisorHistory',
  });
  return AdvisorHistory;
};