// Immediately Invoked Function Expressions (IIFE)
// why it is used? - to avoid polluting global namespace and to create a private scope for variables

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})(); // adding parenthesis before function then it act as block
// must add semicolon at the end to start new iife

// unnamed iife
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
// iife using arrow function->>
// we directly pass the argument in fuction call (without name) if we want it to receive any variable

// javascript execution context - The environment where JavaScript code is executed.
// It decides:
// Which variables exist
// What their values are
// What this refers to
// Which function is running right now

// ITS TYPES--->
// 1. Global Execution Context - This is created:
// ✔ When your JS file first runs
// ✔ Only one time
// It contains:
// Global variables
// Global functions
// this → refers to window (in browser)
// 2. Functional Execution Context- Created:
// ✔ Every time a function is called
// ✔ Each function call gets its own separate context
// 3. Eval Execution Context -
// ✔ Created when code is executed inside an eval() function
