{
    console.log("Before assignment:");
    console.log("x:", x); // ReferenceError due to temporal dead zone
  
    let x = 10;
  
    console.log("After assignment:");
    console.log("x:", x);
  }
  