'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CourseRegistrations', {
      Reg_Number: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Course_Code: { 
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Attempt: {
        allowNull: false,
        primaryKey: true,
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
    await queryInterface.addConstraint('CourseRegistrations', {
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
    await queryInterface.addConstraint('CourseRegistrations', {
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
    await queryInterface.dropTable('CourseRegistrations');
  }
};