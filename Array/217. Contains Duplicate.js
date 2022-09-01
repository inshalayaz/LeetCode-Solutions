/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length === 1) return false;

  let tempArr = [...new Set(nums)];

  if (tempArr.length !== nums.length) return true;

  return false;
};

// https://leetcode.com/problems/contains-duplicate/discuss/2511922/JavaScript-Solution-With-Explanation-or-Simple-solution-or-97ms-or-51-MB
