function calculateSum(num1, num2) {
    console.log("Value of x:", x); // This will log 'undefined' due to hoisting
    var x;
    x = num1 + num2;
    console.log("Value of x after assignment:", x);
    return x;
  }
  
  calculateSum(5, 10);
  