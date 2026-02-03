const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this); //will print whole object thing with different username given to it eg - hitesh,sam
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // gives {} here but
//  when we run on browser it give many global objects in which windows is the one of the most global object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // gives undefined b/c in function we can't access its member using this keyword
//     console.log(this); //  only this keyword inside the function will print many things like global,performance etc.
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" }); // must be parenthesis before  object if u pass object in arrow function
// and then they act as block
console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
