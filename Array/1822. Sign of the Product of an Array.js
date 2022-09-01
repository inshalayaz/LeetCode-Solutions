/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  //     Checking if the array includes any 0 if yes don't perform any calculation just return 0
  if (nums.includes(0)) {
    return 0;
  }

  //     Array doesn't have any 0 in it so perform the heavy operation

  let product = nums.reduce((acc, curr) => {
    return curr * acc;
  });

  //     Take decision
  if (product > 0) return 1;
  else if (product < 0) return -1;
  else return 0;
};

// https://leetcode.com/problems/sign-of-the-product-of-an-array/discuss/2411851/javascript-efficient-solution-easy-to-understand-reduce-83ms-43mb
