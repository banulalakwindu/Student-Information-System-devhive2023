'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AcademicStaffs', {
      Staff_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
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
      Full_Name: {
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
    await queryInterface.addConstraint('AcademicStaffs', {
      fields: ['Department_ID'],
      type: 'foreign key',
      name: 'fk_AcademicStaffs_Department_ID',
      references: {
        table: 'Departments',
        field: 'Department_ID'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AcademicStaffs');
  }
};