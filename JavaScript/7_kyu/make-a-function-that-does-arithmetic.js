// https://www.codewars.com/kata/make-a-function-that-does-arithmetic/train/javascript

const arithmetic = (a, b, operator) => {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    return a / b;
  }
};