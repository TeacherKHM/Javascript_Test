// ===============================================
// Session 03 - Operators in JavaScript
// ===============================================

/*
  Objectives:
  1. Use basic arithmetic operators.
  2. Learn string concatenation and Template Strings.
  3. Understand comparison operators.
  4. Understand logical operators (AND, OR, NOT).
*/

// ===============================================
// 1. ARITHMETIC OPERATORS
// ===============================================

let num1 = 10;
let num2 = 5;

console.log("--- Arithmetic ---");
console.log("Sum:", num1 + num2);         // 15
console.log("Subtraction:", num1 - num2);        // 5
console.log("Multiplication:", num1 * num2); // 50
console.log("Division:", num1 / num2);       // 2
console.log("Modulus (Remainder):", num1 % num2); // 0 (10 divided by 5 is exact, remainder 0)

// Increment and Decrement
let counter = 1;
counter++; // increases by 1
console.log("Increment:", counter); // 2
counter--; // decreases by 1
console.log("Decrement:", counter); // 1

// ===============================================
// 2. STRING OPERATORS
// ===============================================

let firstName = "John";
let lastName = "Doe";

// Traditional concatenation
let fullName = firstName + " " + lastName;
console.log("\n--- Concatenation ---");
console.log(fullName);

// Template Strings (Modern - Recommended)
// Backticks (``) and ${} are used to insert variables
let greeting = `Hello ${firstName} ${lastName}, welcome!`;
console.log("Template String:", greeting);

// ===============================================
// 3. COMPARISON OPERATORS
// ===============================================
// Return true or false

console.log("\n--- Comparison ---");
// Equality
console.log(5 == "5");  // true (Same value, allows type coercion)
console.log(5 === "5"); // false (Strict: Same value AND same type) - RECOMMENDED

// Inequality
console.log(10 != "10"); // false
console.log(10 !== "10"); // true (Different types, are strictly different)

// Greater/Less than
console.log(10 > 5);  // true
console.log(10 < 20); // true
console.log(10 >= 10); // true

// ===============================================
// 4. LOGICAL OPERATORS
// ===============================================

// AND (&&): Both conditions must be true
console.log("\n--- Logical ---");
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||): At least one condition must be true
console.log(true || false); // true
console.log(false || false); // false

// NOT (!): Inverts the value
console.log(!true); // false

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Create two numeric variables and show in console: sum, subtraction, multiplication and division.

// 2. Calculate the remainder (modulus) of dividing 25 by 4.

// 3. Create variables `yourName` and `yourLastName`. Concatenate them into a third variable using `+`.

// 4. Do the same as exercise 3 but using Template Strings (``).

// 5. Compare if 10 is equal to '10' using strict equality (===) and print the result.

// 6. Create two boolean variables, one true and one false. Print the result of using the AND (&&) and OR (||) operator between them.
