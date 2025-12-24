// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); // in slash form
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// month starts from 0th number

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //also giving time in it

// let myCreatedDate = new Date("2023-01-14")
// here if we write (2023-00-14) then it give error when we write date in date format then starts from 1 not from 0
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);  // print answer in millisecond till current date
console.log(myCreatedDate.getTime()); //print answer in millisecond
// console.log(Math.floor(Date.now()/1000)); // to print answer in second

let newDate = new Date();
console.log(newDate); // print current date with current time
console.log(newDate.getMonth() + 1); //to get month number starting with 1
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
}); // we can change the format of localeString
