const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
// function-> it is callback function that's why it is not having any name b/c it is called by forEach method internally
//  val-> name given to each element of array while iterating
//     console.log(val);
// } )

// arrow function in forEach method
// coding.forEach( (item) => {
//  item-> name given to each element of array while iterating
//     console.log(item);
// } )

//
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)   //telling forEach method to call printMe function for each element of array and pass that element as argument to printMe function

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
// we can give more than one parameter in forEach method like above and they will give us item, index and whole array respectively while iterating over array

// objects in array
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
// we can access each object property using dot notation while iterating over array of objects
