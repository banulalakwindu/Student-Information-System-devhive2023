'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AllCourses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Course_Code: {
        type: Sequelize.STRING
      },
      Course_Name: {
        type: Sequelize.STRING
      },
      Credit: {
        type: Sequelize.INTEGER
      },
      Core_Technical: {
        type: Sequelize.STRING
      },
      Offered_Semester: {
        type: Sequelize.INTEGER
      },
      Offered_Department_ID: {
        type: Sequelize.STRING
      },
      Open_Close: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('AllCourses');
  }
};