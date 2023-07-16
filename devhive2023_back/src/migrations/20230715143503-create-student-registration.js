'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentRegistrations', {
      Reg_Number: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Personal_Email: {
        type: Sequelize.STRING
      },
      Phone_Number: {
        type: Sequelize.STRING
      },
      Home_Number: {
        type: Sequelize.STRING
      },
      Permenant_Address: {
        type: Sequelize.STRING
      },
      Temporary_Address: {
        type: Sequelize.STRING
      },
      NIC: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Registration_Date: {
        type: Sequelize.DATE
      },
      AL_Index_Number: {
        type: Sequelize.STRING
      },
      Applied_Year: {
        type: Sequelize.INTEGER
      },
      Medium: {
        type: Sequelize.STRING
      },
      Z_Score: {
        type: Sequelize.FLOAT
      },
      Gender: {
        type: Sequelize.STRING
      },
      Race: {
        type: Sequelize.STRING
      },
      Religion: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      Nationality: {
        type: Sequelize.STRING
      },
      Citizenship: {
        type: Sequelize.STRING
      },
      Photo: {
        type: Sequelize.TEXT
      },
      Status: {
        type: Sequelize.STRING
      },
      Emergency_Contact_Name: {
        type: Sequelize.STRING
      },
      Emergency_Relationship_To_The_Student: {
        type: Sequelize.STRING
      },
      Emergency_Phone_Number: {
        type: Sequelize.STRING
      },
      Emergency_Address: {
        type: Sequelize.STRING
      },
      Full_Name: {
        type: Sequelize.STRING
      },
      Name_With_Initial: {
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentRegistrations');
  }
};