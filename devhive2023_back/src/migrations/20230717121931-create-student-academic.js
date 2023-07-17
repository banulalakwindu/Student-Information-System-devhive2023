'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentAcademics', {
      Reg_Number: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
      Coord_Observation: {
        type: Sequelize.TEXT
      },
      Registration_Approved_Date: {
        type: Sequelize.DATE
      },
      Results: {
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
    await queryInterface.addConstraint('StudentAcademics', {
      fields: ['Reg_Number'],
      type: 'foreign key',
      name: 'fk_Student_Academic_reg_number',
      references: {
        table: 'studentuniversitydetails',
        field: 'Reg_Number'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('StudentAcademics', {
      fields: ['Course_Code'],
      type: 'foreign key',
      name: 'fk_Student_Academic_course_code',
      references: {
        table: 'courses',
        field: 'Course_Code'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentAcademics');
  }
};