/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function (num) {
  let steps = 0;
  while (num !== 0) {
    num % 2 == 0 ? (num = num / 2) : (num -= 1);

    steps += 1;
  }

  return steps;
};

// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/discuss/2399093/javascript-solution-faster-than-9762-better-runtime-and-memory-than-recursion-58ms-415mb
