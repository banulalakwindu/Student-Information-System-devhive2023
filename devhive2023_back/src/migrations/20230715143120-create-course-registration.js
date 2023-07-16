'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CourseRegistrations', {
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
      Attempt: {
        type: Sequelize.INTEGER
      },
      Register_Date: {
        type: Sequelize.DATE
      },
      Coord_Approved: {
        type: Sequelize.BOOLEAN
      },
      Coord_Approved_Date: {
        type: Sequelize.DATE
      },
      Coord_Obervation: {
        type: Sequelize.TEXT
      },
      Registration_Approved_Date: {
        type: Sequelize.DATE
      },
      Draft: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('CourseRegistrations');
  }
};