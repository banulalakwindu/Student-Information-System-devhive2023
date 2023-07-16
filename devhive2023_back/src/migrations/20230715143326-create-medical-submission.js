'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MedicalSubmissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Reg_Number: {
        type: Sequelize.STRING
      },
      Course_Code: {
        type: Sequelize.STRING
      },
      Medical_ID: {
        type: Sequelize.INTEGER
      },
      Type: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
      },
      Medical_Report: {
        type: Sequelize.TEXT
      },
      Approved: {
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
    await queryInterface.dropTable('MedicalSubmissions');
  }
};