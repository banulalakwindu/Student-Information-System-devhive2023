'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MedicalSubmissions', {
      Reg_Number: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      Course_Code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Medical_ID: {
        allowNull: false,
        primaryKey: true,
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
    await queryInterface.addConstraint('Course_registration', {
      fields: ['Reg_Number'],
      type: 'foreign key',
      name: 'fk_coursesRegistration_reg_number',
      references: {
        table: 'studentuniversitydetails',
        field: 'Reg_Number'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('Course_registration', {
      fields: ['Course_Code'],
      type: 'foreign key',
      name: 'fk_coursesRegistration_course_code',
      references: {
        table: 'courses',
        field: 'Course_Code'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MedicalSubmissions');
  }
};