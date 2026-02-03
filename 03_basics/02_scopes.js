//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); // error as we can't access members of function outside the function

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website); //error
}

// console.log(username); //error

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); //normal function can be call either writing function call above or below

function addone(num) {
  //called as function
  return num + 1;
}

addTwo(5); // we cant access function like expression like this ---> function body must be above the function call
const addTwo = function (num) {
  //it can be called as function but also sometimes as expresssion
  return num + 2;
};
