/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => {
    return a - b;
  });
  let total = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    total += salary[i];
  }
  console.log(salary);
  return total / (salary.length - 2);
};

// Solution URL
// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/discuss/2394652/javascript-solution-8039-faster-solution-426-mb-memory-usage-easy-solution
