'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PrerequisiteCourseDetails', {
        Course_Code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Prerequisite_Course_Code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('PrerequisiteCourseDetails');
  }
};