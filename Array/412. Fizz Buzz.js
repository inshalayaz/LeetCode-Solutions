var fizzBuzz = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 !== 0 && result.push('Fizz');
    i % 5 === 0 && i % 3 !== 0 && result.push('Buzz');
    i % 3 === 0 && i % 5 === 0 && result.push('FizzBuzz');
    if (i % 3 !== 0 && i % 5 !== 0) result.push(i.toString());
  }

  return result;
};

// https://leetcode.com/problems/fizz-buzz/discuss/2398946/javascript-solution-no-if-else-83-faster-solution-clean-code
