const Sequelize = require('sequelize');
const process = require('process');

const App_DB = process.env.APP_DB || 'devhive';
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
//const result = require('./result');
const semesterdetails = require('./semesterdetails');
const studentacademic = require('./studentacademic');
const studentregistration = require('./studentregistration');
const studentunivasitydetails = require('./studentuniversitydetails');
const allcourses = require('./allcourse');

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
//db.Result = result(sequelize, Sequelize.DataTypes);
db.Semesterdetails = semesterdetails(sequelize, Sequelize.DataTypes);
db.Studentacademic = studentacademic(sequelize, Sequelize.DataTypes);
db.Studentregistration = studentregistration(sequelize, Sequelize.DataTypes);
db.Studentunivasitydetails = studentunivasitydetails(sequelize, Sequelize.DataTypes);
db.Allcourses = allcourses(sequelize, Sequelize.DataTypes);

const {Academicstaff,Advisorhistory,Course,Coursehistoryoffered,Courseregistration,Department,Departmentcourse,Medicalsubmission,Prerequestcoursedetails,Semesterdetails,Studentacademic,Studentregistration,Studentunivasitydetails,Allcourses} = db;

//associations
db.Studentregistration.belongsTo(db.Studentunivasitydetails, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'studentuniversitydetails',
});

db.Studentunivasitydetails.hasOne(db.Studentregistration, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'studentregistration',
});

db.Studentunivasitydetails.hasMany(db.Medicalsubmission, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'medicalsubmission',
});

db.Medicalsubmission.belongsTo(db.Studentunivasitydetails, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'studentuniversitydetails',
});

db.Courseregistration.belongsTo(db.Studentunivasitydetails, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'studentuniversitydetails',
});

db.Studentunivasitydetails.hasMany(db.Courseregistration, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'courseregistration',
});

db.Courseregistration.hasMany(db.Course, {
  foreignKey: 'Course_Code',
  targetKey: 'Course_Code',
  as: 'course',
});

db.Course.belongsTo(db.Courseregistration, {
  foreignKey: 'Course_Code',
  targetKey: 'Course_Code',
  as: 'courseregistration',
});

db.Allcourses.hasMany(db.Prerequestcoursedetails, {
  foreignKey: 'Course_Code',
  targetKey: 'Course_Code',
  as: 'prerequestcoursedetails',
});

db.Prerequestcoursedetails.belongsTo(db.Allcourses, {
  foreignKey: 'Course_Code',
  targetKey: 'Course_Code',
  as: 'course',
});

db.Course.hasMany(db.Departmentcourse, {
  foreignKey: 'Course_Code',
  targetKey: 'Course_Code',
  // as: 'departmentcourse',
});

db.Departmentcourse.belongsTo(db.Course, {
  foreignKey: 'Course_Code',
  targetKey: 'Course_Code',
  // as: 'course',
});

db.Departmentcourse.hasMany(db.Department, {
  foreignKey: 'Department_ID',
  targetKey: 'Department_ID',
  as: 'department',
});

db.Department.belongsTo(db.Departmentcourse, {
  foreignKey: 'Department_ID',
  targetKey: 'Department_ID',
  as: 'departmentcourse',
});

db.Studentunivasitydetails.hasMany(db.Studentacademic, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'studentacademic',
});

db.Studentacademic.belongsTo(db.Studentunivasitydetails, {
  foreignKey: 'StudentUniversityDetail_ID',
  targetKey: 'Reg_Number',
  as: 'studentuniversitydetails',
});
//studentacademic to coursehistoryoffered
db.Coursehistoryoffered.hasMany(db.Studentacademic, {
  foreignKey: 'Course_Code',
  targetKey: 'Course_Code',
  as: 'studentacademic',
});

db.Studentacademic.belongsTo(db.Coursehistoryoffered, {
  foreignKey: 'CourseHistoryOffered_ID',
  targetKey: 'Course_Code',
  as: 'course',
});

//Coursehistoryoffered to Department 
db.Department.hasMany(db.Coursehistoryoffered, {
  foreignKey: 'Offered_Department_ID',
  targetKey: 'Department_ID',
  as: 'coursehistoryoffered',
});

db.Coursehistoryoffered.belongsTo(db.Department, {
  foreignKey: 'Offered_Department_ID',
  targetKey: 'Department_ID',
  as: 'department',
});

db.Department.hasMany(db.Academicstaff, {
  foreignKey: 'Department_ID',
  targetKey: 'Department_ID',
  as: 'academicstaff',
});

db.Academicstaff.belongsTo(db.Department, {
  foreignKey: 'Department_ID',
  targetKey: 'Department_ID',
  as: 'department',
});

db.Academicstaff.hasMany(db.Advisorhistory, {
  foreignKey: 'Staff_ID',
  targetKey: 'Staff_ID',
  as: 'advisorhistory',
});

db.Advisorhistory.belongsTo(db.Academicstaff, {
  foreignKey: 'Staff_ID',
  targetKey: 'Staff_ID',
  as: 'academicstaff',
});

db.Studentunivasitydetails.hasMany(db.Advisorhistory, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'advisorhistory',
});

db.Advisorhistory.belongsTo(db.Studentunivasitydetails, {
  foreignKey: 'Reg_Number',
  targetKey: 'Reg_Number',
  as: 'studentuniversitydetails',
});

db.Semesterdetails.hasMany(db.Studentunivasitydetails, {
  foreignKey: 'Semester_Current',
  targetKey: 'Semester_Current',
  as: 'studentuniversitydetails',
});

db.Studentunivasitydetails.belongsTo(db.Semesterdetails, {
  foreignKey: 'Semester_Current',
  targetKey: 'Semester_Current',
  as: 'semesterdetails',
});
db.Course.belongsTo(db.Allcourses, {
  foreignKey: 'Course_Code',
  targetKey: 'Course_Code',
  as: 'allcourses',
});

db.Academicstaff.hasMany(db.Course, {
  foreignKey: 'Coordinator_ID',
  targetKey: 'Staff_ID',
  as: 'course',
});

db.Course.belongsTo(db.Academicstaff, {
  foreignKey: 'Coordinator_ID',
  targetKey: 'Staff_ID',
  as: 'academicstaff',
});








Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;