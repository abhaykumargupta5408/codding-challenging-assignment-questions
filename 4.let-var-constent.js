{
    console.log("Before declarations:");
    console.log("x:", x); // 'undefined' due to hoisting
    console.log("y:", y); // 'undefined' due to hoisting
    console.log("z:", z); // ReferenceError due to 'const' not being hoisted
  
    let x = 10;
    var y = 20;
    const z = 30;
  
    console.log("After declarations:");
    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);
  }
  