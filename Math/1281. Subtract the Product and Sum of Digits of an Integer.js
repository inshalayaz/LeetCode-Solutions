var subtractProductAndSum = function (n) {
  let sum = 0;
  let product = 1;

  while (n > 0) {
    let lastDigit = n % 10;

    sum += lastDigit;
    product *= lastDigit;

    n = Math.floor(n / 10);
  }

  return product - sum;
};

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/discuss/2397583/javascript-solution-easy-to-understand-93-faster-62ms-417mb
