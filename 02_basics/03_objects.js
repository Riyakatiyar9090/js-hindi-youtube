// Object.create
// object can be --
// --->singleton
// --->object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh", // here js automatically identifies the datatype of key so not need to use qoutes
  fullname: "Hitesh Choudhary",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1", //use of symbol,must take symbol name in square bracket
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
///////////////////////////////////////////////////////
//  if key is used in such given form then this is how we access it
// Property Name	          Access Method
// name	                      obj.name
// fullName	                  obj.fullName
// "full name"	              obj["full name"]
// "user-id"	              obj["user-id"]
// "123abc"	                  obj["123abc"]
///////////////////////////////////////////////////////////

// console.log(JsUser.email)
// console.log(JsUser["email"]) // here pas key as a string
console.log(JsUser.fullname);
console.log(JsUser["full name"]); // only way to print it using square bracket
console.log(typeof JsUser[mySym]); //correct way
// console.log(JsUser.mySym) // not correct way to access symbol

JsUser.email = "hitesh@chatgpt.com"; //way to update things
// Object.freeze(JsUser) // freeze is used to lock object so that it will not get update anymore
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); //   this will help in remembering all the variables inside object if we have forgotten then
};
console.log(JsUser.greeting); // function (anonymous)--> function has not been executed,only the reference of the function has come
console.log(JsUser.greeting()); //Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user,Hitesh
