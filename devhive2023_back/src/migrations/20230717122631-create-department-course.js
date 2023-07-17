'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DepartmentCourses', {
      Offered_To_Which_Department_ID: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Course_Code: {
        allowNull: false,
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

    await queryInterface.addConstraint('DepartmentCourses', {
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

    await queryInterface.addConstraint('DepartmentCourses', {
      fields: ['Course_Code'],
      type: 'foreign key',
      name: 'fk_departmentCourses_course_code',
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
