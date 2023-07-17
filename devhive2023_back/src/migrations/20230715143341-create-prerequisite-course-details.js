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
      Pre_Requisite_Course_Code: {
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
    await queryInterface.addConstraint('Pre_Requisite_Course_Details', {
      fields: ['Pre_Requisite_Course_Code'],
      type: 'foreign key',
      name: 'fk_preRequisiteCourseDetails_preRequisiteCourseCode',
      references: {
        table: 'courses',
        field: 'Course_Code'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('Course_registration', {
      fields: ['Course_Code'],
      type: 'foreign key',
      name: 'fk_preRequisiteCourseDetails_courseCode',
      references: {
        table: 'courses',
        field: 'Course_Code'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PrerequisiteCourseDetails');
  }
};