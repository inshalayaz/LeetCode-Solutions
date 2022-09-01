var maximumWealth = function (accounts) {
  let wealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += +accounts[i][j];
    }
    wealth = Math.max(sum, wealth);
  }

  return wealth;
};

// https://leetcode.com/problems/richest-customer-wealth/discuss/2398690/javascript-solution-easy-to-understand-73ms-421-mb-faster-than-7863
