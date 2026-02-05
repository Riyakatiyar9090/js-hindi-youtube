// for of

// ["", "", ""]
// [{}, {}, {}]

// array
// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//another way to iterate over array without using index and length of array
// used to iterate over string, array, maps, sets etc. but not used to iterate over objects because objects are not iterable
//console.log(num);
// }

// string
const greetings = "Hello world!";
// for (const greet of greetings) {
//console.log(`Each char is ${greet}`)
// }

// Maps-> uniquely key value pair (does not store duplicate keys) and stores elements in the order of insertion(that we give)
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);
// output ---> in form of map
// 'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'

// for (const key of map) {
//   console.log(key);
// }
// output ---> in form of array
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
// output ---> in form of key value pair
// IN :- India
// USA :- United States of America
// Fr :- France

// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };
// const myObject = {
//   'game1': "NFS",
//   'game2': "Spiderman",
// };
// in both way object can be written and both are same
// quotes are optional in object but if we want to use space in key,start with number or special character then we must have to use quotes in key

// for (const [key, value] of myObject) {  // TypeError: myObject is not iterable
//     console.log(key, ':-', value);
// }
