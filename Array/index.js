//what is Array
//---in JAvaScript ,an array is single variable that is used to store elements of different datatypes . JAvaScript arrays are zero-indexed. 


// ----------

// Declaring Arrays

const student = ['Adhyan kumar', 'santan kumar']
const rollno = [ 1, 2, 3, 4, 5 ]
const mixedArray = ["Adhayn kumar" , 1 , true]

// console.log(student);
// console.log(rollno);
// console.log(mixedArray)



//Accessing Element
console.log(student[0]); //output: "Adhyan kumar"
console.log(rollno[3]); // output: 4
console.log(mixedArray[0]); // output: 


// Array methods

// 1)`push()` and `pop()`
// `Push()` adds elements to the end of an array
// `pop()`  removes the last element from the end of an array

const fruits = ['apple', 'grape', 'orange', ]
fruits.push("kiwi");
console.log(fruits); // Output: ["apple", "grape", "orange", "kiwi"]

let lastFruit = fruits.pop();
console.log(lastFruit); // Output: "kiwi"
console.log(fruits); // Output: ["apple", "grape", "orange"]



// 2)`shift()` and unshift()`
// `shift()` removes the frist element from an array
// `unshift()` adds elements to the beginning of an array

fruits.shift();
console.log(fruits); // Output: ["grape", "orange"]

fruits.unshift("mango", "pear");
console.log(fruits); // Output: ["mango", "pear", "grape", "orange"]


// 3)`slice()` and `splice()`
// `slice()` slice(starIndex, endIndex)
let slicedArray = fruits.slice(1, 3);
console.log(slicedArray); // Output: ["pear", "grape"]


//`splice()` splice(starIndex, deleteCount, item1, item2, .....)` can add, remove, or replace element in an array.
fruits.splice(1, 1, "kiwi", "melon");
console.log(fruits); // Output: ["mango", "kiwi", "melon", "grape", "orange"]



//4) `concat()`: joins two or more arrays
let moreFruits = ["pineapple", "strawberry"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);



//Array Properties: 
`length`
//The `length` property returns the number of elements in an array
console.log(fruits.length); // Output: 5
