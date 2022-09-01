/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/2410467/javascript-1-liner-simple-and-easy-solution-easy-to-understand-76ms-421mb
