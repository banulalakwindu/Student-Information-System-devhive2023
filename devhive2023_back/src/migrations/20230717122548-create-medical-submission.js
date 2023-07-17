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
      Medical_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //autoIncrement: true,
        primaryKey: true
      },
      Medical_Report: {
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

    await queryInterface.addConstraint('MedicalSubmissions', {
      fields: ['Reg_Number'],
      type: 'foreign key',
      name: 'fk_medicalsubmissions_studentuniversitydetails',
      references: {
        table: 'studentuniversitydetails',
        field: 'Reg_Number'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // await queryInterface.addConstraint('MedicalSubmissions', {
    //   fields: ['Course_Code'],
    //   type: 'foreign key',
    //   name: 'fk_medicalsubmissions_courses',
    //   references: {
    //     table: 'courses',
    //     field: 'Course_Code'
    //   },
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MedicalSubmissions');
  }
};
