'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentUniversityDetails', {
      Reg_Number: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Department_ID: {
        type: Sequelize.STRING,
        references: {
          model: 'Departments',
          key: 'Department_ID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Academic_Year_Current: {
        type: Sequelize.STRING
      },
      Semester_Current: {
        type: Sequelize.INTEGER
      },
      University_Email: {
        type: Sequelize.STRING
      },
      Batch_Misses: {
        type: Sequelize.INTEGER
      },
      Advisor_ID: {
        type: Sequelize.STRING,
        references: {
          model: 'AcademicStaffs',
          key: 'Staff_ID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Advisor_Start_Date: {
        type: Sequelize.DATE
      },
      Password: {
        type: Sequelize.TEXT
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
    await queryInterface.addConstraint('StudentUniversityDetails', {
      fields: ['Department_ID'],
      type: 'foreign key',
      name: 'fk_StudentUniversityDetails_department_id',
      references: {
        table: 'Departments',
        field: 'Department_ID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('StudentUniversityDetails', {
      fields: ['Advisor_ID'],
      type: 'foreign key',
      name: 'fk_StudentUniversityDetails_advisor_id',
      references: {
        table: 'AcademicStaffs',
        field: 'Staff_ID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentUniversityDetails');
  }
};