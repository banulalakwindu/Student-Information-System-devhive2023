// gpaCalculate.jsx

const calculateGPA = (gradesArray) => {
    const gradePoints = {
      'A+': 4.0,
      'A': 4.0,
      'A-': 3.7,
      'B+': 3.3,
      'B': 3.0,
      'B-': 2.7,
      'C+': 2.3,
      'C': 2.0,
      'C-': 1.7,
      'D+':1.3,
      'D': 1.0,
      'E': 0.0,
      'I': 0.0
    };
  
    const totalCredits = gradesArray.length;
    let totalGradePoints = 0;
  
    gradesArray.forEach((grade) => {
      switch (grade) {
        case 'A+':
        case 'A':
        case 'A-':
        case 'B+':
        case 'B':
        case 'B-':
        case 'C+':
        case 'C':
        case 'C-':
        case 'D+':
        case 'D':
        case 'E':
        case 'I':
          totalGradePoints += gradePoints[grade];
          break;
        default:
          console.error(`Invalid grade: ${grade}`);
      }
    });
  
    const gpa = totalGradePoints / totalCredits;
    return gpa;
  };
  
  export default calculateGPA;
  