// gpa.test.js

const calculateGPA = require('./gpa');

describe('calculateGPA', () => {
  it('calculates GPA correctly', () => {
    const grades = ['A', 'B', 'C', 'A'];
    const expectedGPA = 3.25;

    const result = calculateGPA(grades);
    expect(result).toEqual(expectedGPA);
  });
});
