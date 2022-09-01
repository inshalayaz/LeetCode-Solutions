/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let stack = [];
  s = s
    .replace(/[^A-Z0-9]+/gi, '')
    .toLowerCase()
    .split('');

  for (l of s) {
    stack.push(l.toLowerCase());
  }

  for (let i = 0; i < s.length; i++) {
    if (stack.pop().toLowerCase() !== s[i]) return false;
  }
  return true;
};

// https://leetcode.com/problems/valid-palindrome/discuss/2507958/JavaScript-Stack-Solution-or-Stack-Solution
