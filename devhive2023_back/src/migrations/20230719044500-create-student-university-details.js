'use strict';

//const { toDefaultValue } = require('sequelize/types/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentUniversityDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Reg_Number: {
        type: Sequelize.STRING
      },
      Department_ID: {
        type: Sequelize.STRING
      },
      Academic_Year_Current: {
        type: Sequelize.STRING
      },
      Semester_Current: {
        type: Sequelize.INTEGER
      },
      University_Email: {
        type: Sequelize.STRING
      },
      Batch_Misses: {
        type: Sequelize.INTEGER
      },
      Advisor_ID: {
        type: Sequelize.STRING
      },
      Advisor_Start_Date: {
        type: Sequelize.DATE
      },
      Password: {
        type: Sequelize.STRING
      },
      flag: {
        type: Sequelize.INTEGER,
        defaultValue: 0       
        //defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentUniversityDetails');
  }
};