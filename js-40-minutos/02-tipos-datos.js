// ===============================================
// Session 02 - Primitive Data Types
// ===============================================

/*
  Objectives:
  1. Know the primitive data types in JavaScript.
  2. Differentiate between 'undefined' and 'null'.
  3. Use 'typeof' to identify data types.
*/

// ===============================================
// 1. BASIC DATA TYPES
// ===============================================

// --- STRING (Text String) ---
// Can be defined with single quotes (''), double quotes ("") or backticks (``).
let text = "Hello world";
let textQuotes = 'JavaScript is great';
let textTemplate = `Backticks allow interpolation`;

console.log("--- Strings ---");
console.log(text);
console.log(textQuotes);
console.log(textTemplate);

// --- NUMBER (Nuúmeros) ---
// Includes integers and decimals (floats).
let integer = 42;
let decimal = 3.1416;
let negative = -10;

console.log("\n--- Numbers ---");
console.log(integer, decimal, negative);

// --- BOOLEAN (True/False) ---
// Only has two values: true or false. Used a lot in conditions.
let isTrue = true;
let isFalse = false;

console.log("\n--- Booleans ---");
console.log(isTrue, isFalse);

// --- UNDEFINED ---
// A variable declared but without an assigned value.
let variableUndefined;
console.log("\n--- Undefined ---");
console.log(variableUndefined); // undefined

// --- NULL ---
// Represents the INTENTIONAL absence of value.
let variableNull = null;
console.log("\n--- Null ---");
console.log(variableNull); // null

// ===============================================
// 2. TYPEOF OPERATOR
// ===============================================
// Allows us to know the data type of a variable.

console.log("\n--- Using typeof ---");
console.log(typeof text);       // "string"
console.log(typeof integer);      // "number"
console.log(typeof isTrue); // "boolean"
console.log(typeof variableUndefined); // "undefined"

// IMPORTANT CURIOSITY of JS:
console.log(typeof variableNull); // "object" (This is a historical JS error)

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Declare a variable named `message` with the text "Hello JavaScript" and print it.

// 2. Declare a variable named `result` with the number 100 and another with the number 3.14.

// 3. Declare a boolean variable named `isLearning` with value true.

// 4. Declare a variable `user` but do not assign it a value. Print its type using `typeof`.

// 5. Assign the value `null` to a new variable named `empty`. Print its type. What appears? (Remember the curiosity).

// 6. Declare variables to store: your name, your age, and if you are a student (boolean). Print them all together.
