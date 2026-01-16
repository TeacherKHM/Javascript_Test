// Session 01 - Comments, Variables and Console.log

// ===============================================
// 1. COMMENTS
// ===============================================

// Single-line comment: Use // to ignore text following it on that line.
// Example: This does not execute

/*
  Block comment:
  Used for multi-line comments.
  Starts with /* and ends with * /
*/

// ===============================================
// 2. VARIABLES
// ===============================================

/*
  In JavaScript there are three ways to declare variables:
  1. var (old way, avoid modern use)
  2. let (modern standard for variables that can change)
  3. const (modern standard for constants that DO NOT change)
*/

// --- VAR ---
// Has function or global scope.
// Can be redeclared and reassigned.
var variableVar = "I am a var variable";
console.log(variableVar);

// --- LET ---
// Has block scope (what is between {}).
// Can be reassigned, but NOT redeclared in the same scope.
let variableLet = "I am a let variable";
console.log(variableLet);

variableLet = "I have changed value"; // This is valid
console.log(variableLet);

// --- CONST ---
// Has block scope.
// CANNOT be reassigned or redeclared.
const variableConst = "I am a constant";
console.log(variableConst);

// variableConst = "New value"; // Error! Cannot reassign a constant.

// ===============================================
// 3. SCOPE (ALCANCE)
// ===============================================

{
  let scopeBlock = "I only exist inside here";
  var scopeFunctional = "I exist outside the block too";
  console.log("Inside block:", scopeBlock);
}

// console.log(scopeBlock); // Error: scopeBlock is not defined
console.log("Outside block:", scopeFunctional); // Works because it is var

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Write a single-line comment saying "Exercise 1".

// 2. Write a multi-line comment explaining what a variable is.

// 3. Declare a variable named `name` using `let` and assign your name to it.

// 4. Declare a variable named `age` using `const` and assign your age to it.

// 5. Try to reassign the value of `age` in the next line (keep the code commented out so it doesn't break execution).

// 6. Create a variable `price` and print it to the console. Then change its value and print it again.

// 7. Declare two variables with different data types (e.g., string and number) and print their values separated by a comma in a single console.log.
