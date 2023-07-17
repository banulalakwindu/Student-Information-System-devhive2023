'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DepartmentCourses', {
      Offered_To_Which_Department_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Course_Code: {
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
    await queryInterface.addConstraint('department_courses', {
      fields: ['Offered_To_Which_Department_ID'],
      type: 'foreign key',
      name: 'fk_departmentCourses_department_id',
      references: {
        table: 'departments',
        field: 'Department_ID'
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
    await queryInterface.dropTable('DepartmentCourses');
  }
};