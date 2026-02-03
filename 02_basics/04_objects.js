// const tinderUser = new Object()  //singleton
const tinderUser = {}; //object literal(non-singleton)

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    //object
    userfullname: {
      //object
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname); //way to access object to object  then to variable

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { obj1, obj2 };
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }   ---> object ke andr object
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //---> same like concat in array if we dont't use {} then also it is write but it is good practice to use empty parenthesis {} ,it is treated as target and all other objects will treated as source

const obj5 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  // databasees give replies in this format---> array containing objects
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // gives all keys in array form
// console.log(Object.values(tinderUser)); // gives all values in array form
// console.log(Object.entries(tinderUser)); // gives all entries in array form

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check whether object has this or that property

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];
