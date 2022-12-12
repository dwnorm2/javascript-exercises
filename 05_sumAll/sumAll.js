const sumAll = function (num1, num2) {
  let sum = 0;
  if (
    Math.sign(num1) === -1 ||
    Math.sign(num2) === -1 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  } else if (num1 > num2) {
    for (i = num2; i <= num1; i++) {
      sum += i;
    }
    return sum;
  } else
    for (i = num1; i <= num2; i++) {
      sum += i;
    }
  return sum;
};

// npm test sumAll.spec.js
// Do not edit below this line
module.exports = sumAll;
