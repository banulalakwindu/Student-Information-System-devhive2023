'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      Course_Code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Course_Name: {
        type: Sequelize.STRING
      },
      Credit: {
        type: Sequelize.INTEGER
      },
      Core_Technical: {
        type: Sequelize.STRING
      },
      Coordinator_ID: {
        type: Sequelize.STRING,
        references: {
          model: 'AcademicStaffs', // name of the referenced table
          key: 'Staff_ID' // primary key of the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
     
      Offered_Semester: {
        type: Sequelize.INTEGER
      },
      Offered_Department_ID: {
        type: Sequelize.STRING,
        references: {
          model: 'AcademicStaffs', // name of the referenced table
          key: 'Staff_ID' // primary key of the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      },
      Academic_Year_Current: {
        type: Sequelize.STRING
      },
      Registratipon_Open_Date: {
        type: Sequelize.DATE
      },
      Registration_Close_Date: {
        type: Sequelize.DATE
      },
      Semester_Start_Date: {
        type: Sequelize.DATE
      },
      Semester_Close_Date: {
        type: Sequelize.DATE
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

    // Add the foreign key constraint
    await queryInterface.addConstraint('Courses', {
      fields: ['Coordinator_ID'],
      type: 'foreign key',
      name: 'fk_courses_coordinator_id',
      references: {
        table: 'AcademicStaffs',
        field: 'Staff_ID'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('Courses', {
      fields: ['Offered_Department_ID'],
      type: 'foreign key',
      name: 'fk_courses_offered_department_id',
      references: {
        table: 'Departments',
        field: 'Department_ID'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Courses', 'fk_courses_coordinator_id');
    await queryInterface.dropTable('Courses');
  }
};
