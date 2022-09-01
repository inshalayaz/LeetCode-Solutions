/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length < 3) return true;

  arr.sort((a, b) => a - b);

  let diff = arr[0] - arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== diff) return false;
  }

  return true;
};

// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/discuss/2411917/javascript-simple-and-easy-solution-90ms-421mb
