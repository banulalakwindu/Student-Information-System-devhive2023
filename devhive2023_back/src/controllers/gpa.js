// gpa.js

function calculateGPA(grades) {
  const gradePoints = {
    Aplus: 4,
    A: 4,
    Aminus: 3.7,
    Bplus: 3.3,
    B: 3,
    Bminus: 2.7,
    Cplus: 2.3,
    C: 2,
    Cminus: 1.7,
    D: 1,
    E: 0,
  };

  const totalCredits = grades.length;
  let totalGradePoints = 0;

  grades.forEach((grade) => {
    totalGradePoints += gradePoints[grade];
  });

  return totalGradePoints / totalCredits;
}

module.exports = calculateGPA;
