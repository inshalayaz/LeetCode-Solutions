/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  nums = nums.map((num) => (sum += num));

  return nums;
};

// https://leetcode.com/discuss/topic/2398535/javascript-map-best-and-easy-solution-97-faster-419-mb/
