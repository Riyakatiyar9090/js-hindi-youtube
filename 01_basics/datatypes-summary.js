// // number as string
// let score1 = "33";
// console.log(typeof score1); //string
// let value1 = Number(score1);
// console.log(typeof value1);

// // number
// let score2 = 33;
// console.log(typeof score2); // number

// // not a number nor string
// let score3 = "33abc";
// let value2 = Number(score3);
// console.log(typeof score3);
// console.log(typeof value2);
// console.log(value2); //when u see its actual value,it gives NaN
// // null
// let score4 = null;
// console.log(score4);
// let value4 = Number(score4);
// console.log(value4);
// // undefined
// let score5 = undefined;
// console.log(score5);
// let value5 = Number(score5);
// console.log(value5);
// // boolean
// let score6 = true;
// console.log(score6);
// let value6 = Number(score6);
// console.log(value6);
// // string
// let score7 = "hitesh";
// console.log(score7);
// let value7 = Number(score7);
// console.log(value7);

// for type casting all datatypes should be written
//  the first letter capital---> Number,String,Boolean

// *********************************Operations**********************************************
// concatenation of string
let str1 = "riya";
let str2 = "katiyar";
let str3 = str1 + str2;
console.log(str3);

// play with numbers
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log(1 + 2 + "2"); // 32
// front elements get added
console.log("1" + 2 + 2); // 122
// back elements will not added but get concate

console.log(true); //true
console.log(+true); //1
// console.log(true+) //error
console.log(false); //false
console.log(-false); //-0
console.log(-""); //-0
// console.log(false-) //error

//***************************comparison******************
console.log("2" > 1); //true
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// JavaScript is a dynamically typed language. ✅
// Dynamically typed ka matlab:
// Variable ka type run-time par decide hota hai, compile-time par nahi.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  //function as a variable
  console.log("Hello world");
};

console.log(typeof outsideTemp); //object
console.log(typeof anotherId);
console.log(typeof bigNumber); //undefined as it is not initialized if we make it as comment
console.log(typeof myFunction); // funtion (function object)
// https://262.ecma-international.org/5.1/#sec-11.4.3

// *******************************memory**********************
// stack---> primitive
// heap-----> non primitive

let myname = "hitesh choudhary";
let another_name = myname;
another_name = "chaiurcode";
console.log(myname); //hitesh choudhary
console.log(another_name); //chaiurcode

let user1 = {
  email: "abc@gmail.com",
  rollno: 123,
};
let user2 = user1;
user2.email = "cde@gmail.com";
console.log(user1.email); //cde@gmail.com
console.log(user2.email); //cde@gmail.com
