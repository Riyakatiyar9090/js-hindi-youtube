const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in object) {
  console.log(key); // gives only key of object
}
// output ->
// js
// cpp
// rb
// swift

for (const key in object) {
  console.log(object[key]); // gives value of object using key
}
// output ->
// javascript
// C++
// ruby
// swift by apple

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
// checking for in loop on array
for (const key in programming) {
  //console.log(key);    print index of array in form of string
  //console.log(programming[key]);  print value of array using index in form of string .not recommended to use for in loop on array because it gives index in form of string and also it gives index of array not value of array directly
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }  Nothing prints because map is not iterable using for in loop and also map is not object so we can't use for in loop to iterate over map
// output -> nothing prints
