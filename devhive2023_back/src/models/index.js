const Sequelize = require('sequelize');
const process = require('process');

const App_DB = process.env.APP_DB || 'devhive2023';
const APP_USER = process.env.APP_USER || 'root';
const APP_PASS = process.env.APP_PASS || null;

const mysql = require('mysql2');

const academicstaff = require('./academicstaff');
const advisorhistory = require('./advisorhistory');
const course = require('./course');
const coursehistoryoffered = require('./coursehistoryoffered');
const courseregistration = require('./courseregistration');
const department = require('./department');
const departmentcourse = require('./departmentcourse');
const medicalsubmission = require('./medicalsubmission');
const prerequestcoursedetails = require('./prerequestcoursedetails');
const result = require('./result');
const semesterdetails = require('./semesterdetails');
const studentacademic = require('./studentacademic');
const studentregistration = require('./studentregistration');
const studentunivasitydetails = require('./studentunivasitydetails');

const db = {};
const sequelize = new Sequelize(App_DB, APP_USER, APP_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2,
});

db.academicstaff = academicstaff(sequelize, Sequelize.DataTypes);
db.advisorhistory = advisorhistory(sequelize, Sequelize.DataTypes);
db.course = course(sequelize, Sequelize.DataTypes); 
db.coursehistoryoffered = coursehistoryoffered(sequelize, Sequelize.DataTypes);
db.courseregistration = courseregistration(sequelize, Sequelize.DataTypes);
db.department = department(sequelize, Sequelize.DataTypes);
db.departmentcourse = departmentcourse(sequelize, Sequelize.DataTypes);
db.medicalsubmission = medicalsubmission(sequelize, Sequelize.DataTypes);
db.prerequestcoursedetails = prerequestcoursedetails(sequelize, Sequelize.DataTypes);
db.result = result(sequelize, Sequelize.DataTypes);
db.semesterdetails = semesterdetails(sequelize, Sequelize.DataTypes);
db.studentacademic = studentacademic(sequelize, Sequelize.DataTypes);
db.studentregistration = studentregistration(sequelize, Sequelize.DataTypes);
db.studentunivasitydetails = studentunivasitydetails(sequelize, Sequelize.DataTypes);

const { academicstaff, advisorhistory, course, coursehistoryoffered, courseregistration, department, departmentcourse, medicalsubmission, prerequestcoursedetails, result, semesterdetails, studentacademic, studentregistration, studentunivasitydetails } = db;
//associations
academicstaff.hasMany(advisorhistory, { as: 'advisorhistory', foreignKey: 'advisorid'});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;