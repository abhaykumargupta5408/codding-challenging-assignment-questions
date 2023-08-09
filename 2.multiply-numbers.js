multiplyNumbers(3, 4); // This will not work due to hoisting

const multiplyNumbers = function(num1, num2) {
  return num1 * num2;
};

console.log(multiplyNumbers(2, 5)); // This will work, and the function is defined above
