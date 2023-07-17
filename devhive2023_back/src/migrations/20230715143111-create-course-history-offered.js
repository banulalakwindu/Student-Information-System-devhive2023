'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CourseHistoryOffereds', {
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
      Coord_ID: {
        type: Sequelize.STRING,
        references: {
          model: 'academic_staffs', // name of the referenced table
          key: 'Staff_ID' // primary key of the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      },
      Offered_Semester: {
        type: Sequelize.INTEGER
      },
      Offered_Department_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Department', // name of the referenced table
          key: 'Department_ID' // primary key of the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Academic_Year: {
        type: Sequelize.STRING
      },
      Semester_Start_Date: {
        type: Sequelize.DATE
      },
      Semester_End_Date: {
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
    await queryInterface.addConstraint('Courses', {
      fields: ['Coordinator_ID'],
      type: 'foreign key',
      name: 'fk_courses_coordinator_id',
      references: {
        table: 'AcademicStaffs',
        field: 'Staff_ID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('Courses', {
      fields: ['Offered_Department_ID'],
      type: 'foreign key',
      name: 'fk_courses_offered_department_id',
      references: {
        table: 'Department',
        field: 'Department_ID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CourseHistoryOffereds');
  }
};