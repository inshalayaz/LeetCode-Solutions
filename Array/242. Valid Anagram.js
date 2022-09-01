var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  s = s.split('').sort();
  t = t.split('').sort();

  for (i in s) {
    if (s[i] !== t[i]) return false;
  }

  return true;
};

// https://leetcode.com/problems/valid-anagram/discuss/2512252/Valid-Anagram-or-Simple-JavaScript-Solution-or-Easy-Solution-or-Explaination
