'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SemesterDetails', {
      Semester: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Semester_Start_Date: {
        type: Sequelize.DATE
      },
      Semester_End_Date: {
        type: Sequelize.DATE
      },
      Year: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('SemesterDetails');
  }
};