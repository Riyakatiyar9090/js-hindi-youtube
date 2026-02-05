const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})
// when using curly braces(scope) we need to use return keyword to return value from arrow function
// why we use map method-> it returns new array after performing some operation on each element of original array
// can't we use simple any for method-> yes we can but map method is more concise and easier to read

// forming a chain of map methods
const newNums = myNumers
  .map((num) => num * 10)
  // result will pass to next map method
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
