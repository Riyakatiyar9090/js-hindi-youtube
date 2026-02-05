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

//  example->
// let val1=10
// let val2=5
// function addNum(num1,num2){
//     let total=num1+num2;
//     return total;
// }
// let result1=addNum(val1,val2);
// let result2=addNum(20,30);

// step 1--> global execution (this)
// step 2--> memory phase -----> in this way values are assigned in memory phase
// val1->undefined
// val2->undefined
// addNum->definition
// result1->undefined
// result2->undefined
// step 3--> execution phase
// val1->10
// val2->5
// addNum-> new box is created (new variable environment+execution thread)
// result1->15 (after function return)
// result2->50  (after function return)
// now again memory and execution phase will form for function addNum everytime when function is called
// first call-> memory phase
// num1->undefined
// num2->undefined
// total->undefined
// second call-> execution phase
// num1->10
// num2->5
// total->15
// return 15 -> to global execution context
//  and now this block will be delete from memory
// now again function is called with different values for result2 same process will repeat


// if there are nested function calls then the execution contexts will form a stack called call stack and follow lifo( last in first out) method
