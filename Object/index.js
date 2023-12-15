// In JavaScript, an object is a complex data type that allows you to store and organize data using key-value pairs.
// Objects are used to represent real-world entities, and they provide a way to structure and organize information. Here's an overview of objects in JavaScript:


// Creating Objects:
// You can create an object by enclosing key-value pairs within curly braces {}. Keys and values are separated by colons, and key-value pairs are separated by commas.


// Object literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
      city: "New York",
      zipCode: "10001"
    },
    sayHello: function() {
      console.log("Hello!");
    }
  };


// Accessing Object Properties:
// You can access object properties using dot notation or square bracket notation.

// console.log(person.firstName); // Output: "John"
// console.log(person["lastName"]); // Output: "Doe"
// console.log(person.address.city); // Output: "New York"
// person.sayHello(); // Output: "Hello!"


// Modifying Object Properties:
// You can modify the values of object properties by assignment.

person.age = 31;
person["isStudent"] = true;

// Adding and Deleting Properties:
// You can add new properties to an object or delete existing ones.

person.email = "john@example.com"; // Add a new property
delete person.age; // Delete the "age" property


// Object Methods:
// Methods are functions that are properties of an object. They can be invoked using the object's dot notation.

let car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
      console.log("Engine started!");
    }
  };
  
//   car.start(); // Output: "Engine started!"
  

// Object Iteration:
// You can iterate over the keys or values of an object using loops or the Object.keys(), Object.values(), or Object.entries() methods.

// Iterate over keys
for (let key in person) {
    // console.log(key); // Outputs: "firstName", "lastName", "age", ...
  }
  
  // Iterate over values
  for (let value of Object.values(person)) {
    // console.log(value);
  }
  
  // Iterate over key-value pairs
  for (let [key, value] of Object.entries(person)) {
    // console.log(`${key}: ${value}`);
  }
  
  const obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.keys(obj)); // ['0', '1', '2']


// Object Destructuring:
// Destructuring allows you to extract properties from objects and assign them to variables.

let { firstName, lastName } = person;
console.log(firstName, lastName); // Outputs: "John" "Doe"
