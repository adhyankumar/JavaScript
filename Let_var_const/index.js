// In JavaScript, let, var, and const are used for declaring variables, but they have some differences in terms of scope, hoisting, and reassignment.

//var:
// Scope: Variables declared with var are function-scoped. They are visible throughout the entire function in which they are declared, regardless of where the declaration occurs. If declared outside any function, they are globally scoped.

// Hoisting: Variables declared with var are hoisted to the top of their scope. This means that you can use a variable before it's declared, but the value will be undefined.

// Reassignment: Variables declared with var can be redeclared and reassigned.

var x = 10;
if (true) {
  var x = 20;
//  console.log(x); // Output: 20
}
// console.log(x); // Output: 20


// let:
// Scope: Variables declared with let have block scope. They are only visible within the block (enclosed by curly braces) where they are defined.

// Hoisting: Variables declared with let are hoisted to the top of their block but are not initialized. Trying to access the variable before the declaration results in a ReferenceError.

// Reassignment: Variables declared with let can be reassigned but not redeclared in the same scope.

let y = 10;
if (true) {
  let y = 20;
//   console.log(y); // Output: 20
}
// console.log(y); // Output: 10



// const:
// Scope: Variables declared with const also have block scope. They are only visible within the block where they are defined.

// Hoisting: Like let, variables declared with const are hoisted to the top of their block but are not initialized. Trying to access the variable before the declaration results in a ReferenceError.

// Reassignment: Variables declared with const cannot be reassigned after they are initialized. They must be assigned a value when declared, and this value cannot be changed.


const z = 10;
// z = 20; // Error: Assignment to a constant variable

if (true) {
  const z = 20;
//   console.log(z); // Output: 20
}
// console.log(z); // Output: 10


// When to use each:
// Use const when the value of the variable will not change after initialization.

// Use let when the value of the variable will change.

// Minimize the use of var due to its function-scoping and hoisting behavior. Prefer let and const for better code maintainability.
