const Sequelize = require('sequelize');
const process = require('process');

const App_DB = process.env.APP_DB || 'devhive2023';
const APP_USER = process.env.APP_USER || 'root';
const APP_PASS = process.env.APP_PASS || null;

const mysql2 = require('mysql2');

const academicstaff = require('./academicstaff');
const advisorhistory = require('./advisorhistory');
const course = require('./course');
const coursehistoryoffered = require('./coursehistoryoffered');
const courseregistration = require('./courseregistration');
const department = require('./department');
const departmentcourse = require('./departmentcourse');
const medicalsubmission = require('./medicalsubmission');
const prerequestcoursedetails = require('./prerequisitecoursedetails');
const result = require('./result');
const semesterdetails = require('./semesterdetails');
const studentacademic = require('./studentacademic');
const studentregistration = require('./studentregistration');
const studentunivasitydetails = require('./studentuniversitydetails');

const db = {};
const sequelize = new Sequelize(App_DB, APP_USER, APP_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2,
});

db.Academicstaff = academicstaff(sequelize, Sequelize.DataTypes);
db.Advisorhistory = advisorhistory(sequelize, Sequelize.DataTypes);
db.Course = course(sequelize, Sequelize.DataTypes); 
db.Coursehistoryoffered = coursehistoryoffered(sequelize, Sequelize.DataTypes);
db.Courseregistration = courseregistration(sequelize, Sequelize.DataTypes);
db.Department = department(sequelize, Sequelize.DataTypes);
db.Departmentcourse = departmentcourse(sequelize, Sequelize.DataTypes);
db.Medicalsubmission = medicalsubmission(sequelize, Sequelize.DataTypes);
db.Prerequestcoursedetails = prerequestcoursedetails(sequelize, Sequelize.DataTypes);
db.Result = result(sequelize, Sequelize.DataTypes);
db.Semesterdetails = semesterdetails(sequelize, Sequelize.DataTypes);
db.Studentacademic = studentacademic(sequelize, Sequelize.DataTypes);
db.Studentregistration = studentregistration(sequelize, Sequelize.DataTypes);
db.Studentunivasitydetails = studentunivasitydetails(sequelize, Sequelize.DataTypes);

const {Academicstaff,Advisorhistory,Course,Coursehistoryoffered,Courseregistration,Department,Departmentcourse,Medicalsubmission,Prerequestcoursedetails,Result,Semesterdetails,Studentacademic,Studentregistration,Studentunivasitydetails} = db;
//associations

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;