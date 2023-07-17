'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
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
      Result: {
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
    await queryInterface.addConstraint('Results', {
      fields: ['Reg_Number'],
      type: 'foreign key',
      name: 'fk_Results_reg_number',
      references: {
        table: 'studentuniversitydetails',
        field: 'Reg_Number'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('Results', {
      fields: ['Course_Code'],
      type: 'foreign key',
      name: 'fk_Results_course_code',
      references: {
        table: 'courses',
        field: 'Course_Code'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  }
};