// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //[0,1,2,3,4,5,6]
// myArr.push(7) //[0,1,2,3,4,5,6,7]
// myArr.pop() //[0,1,2,3,4,5,6]

// myArr.unshift(9) //[9,0,1,2,3,4,5,6]
// myArr.shift() // it will remove 9 as it is not in order [0,12,3,4,5,6]

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3));
// if element is not in arr then it will give -1

// const newArr = myArr.join() //print same array but in string form not under square bracket -->> 0,1,2,3,4,5,6

// console.log(myArr);
// console.log( newArr);

// slice, splice
const myArr1 = [0, 1, 2, 3, 4, 5];
console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3);

console.log(myn1); //[1,2]
console.log("B ", myArr1); //[0,1,2,3,4,5]
// here there is no change in original array and slice will exclude last index.

const myn2 = myArr1.splice(1, 3);
console.log("C ", myArr1); //[0,4,5]
console.log(myn2); //[1,2,3]
// here it will remove part of array from the original array and splice will include last index.
