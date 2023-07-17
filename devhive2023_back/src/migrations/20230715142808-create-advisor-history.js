'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AdvisorHistories', {
      Advisor_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Reg_Number: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Start_Date: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DATE
      },
      End_Date: {
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
    await queryInterface.addConstraint('advisor_history', {
      fields: ['Advisor_ID'],
      type: 'foreign key',
      name: 'fk_advisor_histories_advisor_id',
      references: {
        table: 'AcademicStaffs',
        field: 'Staff_ID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    
    await queryInterface.addConstraint('advisor_history', {
      fields: ['Reg_Number'],
      type: 'foreign key',
      name: 'fk_advisor_histories_reg_number',
      references: {
        table: 'studentuniversitydetails', // Replace 'YourReferencedTable' with the name of the referenced table.
        field: 'Reg_Number'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AdvisorHistories');
  }
};  