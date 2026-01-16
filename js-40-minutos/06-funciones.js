// ===============================================
// SESSION 06 - Functions
// Duration: 40 minutes
// Objectives for today:
// • Understand what functions are and why they are useful
// • Learn to create declared and expressed functions
// • Master arrow functions
// • Work with parameters and default values
// ===============================================

// ===============================================
// WHAT IS A FUNCTION?
// ===============================================
// A function is like a recipe: a set of instructions that we can use many times
// It helps us organize code and avoid repetition

console.log("=== WHAT IS A FUNCTION? ===");

// Here we will explain the concept of function:
// 1. Reusable: we can call it many times
// 2. Organized: groups related code
// 3. Parameterizable: can accept different data
// 4. Predictable: always does the same thing with the same data

// Question for the class: why would it be useful to have a function to greet?

// ===============================================
// DECLARED FUNCTIONS - THE TRADITIONAL WAY
// ===============================================
// Declared functions are the most classic way to create functions
// Syntax: function functionName(parameter1, parameter2) { code }

console.log("\n=== DECLARED FUNCTIONS ===");

// Example 1: Simple function without parameters
function greet() {
  console.log("Hello! Welcome to JavaScript");
}

// To use the function, we call it like this:
greet();
greet();  // We can call it as many times as we want

// Example 2: Function with parameters
function greetPerson(name, age) {
  console.log(`Hello ${name}! You are ${age} years old.`);
}

greetPerson("Ana", 25);
greetPerson("Carlos", 30);
greetPerson("Maria", 22);

// Example 3: Function that returns a value (return)
function sum(a, b) {
  return a + b;  // return returns the result
}

let result1 = sum(5, 3);
let result2 = sum(10, 20);
console.log("5 + 3 =", result1);
console.log("10 + 20 =", result2);

// Example 4: Function with more complex calculations
function calculatePriceWithTax(price, tax = 21) {
  let finalPrice = price + (price * tax / 100);
  return finalPrice;
}

let productPrice = 100;
let priceWithTax = calculatePriceWithTax(productPrice);
console.log(`Price without tax: ${productPrice}€`);
console.log(`Price with tax: ${priceWithTax}€`);

// In class we will see the typical error of forgetting the return
// If a function does not have return, it returns undefined

// ===============================================
// EXPRESSED FUNCTIONS - STORED IN VARIABLES
// ===============================================
// Expressed functions are assigned to variables
// They are very common in modern JavaScript

console.log("\n=== EXPRESSED FUNCTIONS ===");

// Example 1: Basic expressed function
let sayGoodbye = function() {
  console.log("Goodbye! Thanks for visiting us");
};

sayGoodbye();
sayGoodbye();

// Example 2: Expressed function with parameters
let multiply = function(a, b) {
  return a * b;
};

console.log("7 × 8 =", multiply(7, 8));
console.log("12 × 3 =", multiply(12, 3));

// Example 3: Expressed function to validate age
let isOfLegalAge = function(age) {
  return age >= 18;
};

console.log("Is 25 of legal age?", isOfLegalAge(25));
console.log("Is 16 of legal age?", isOfLegalAge(16));

// Key difference: expressed functions cannot be called before declaring them
// Declared functions can be called before (hoisting)

// ===============================================
// ARROW FUNCTIONS - THE MODERN WAY
// ===============================================
// Arrow functions are a shorter and more modern way to write functions
// Introduced in ES6 and are very popular

console.log("\n=== ARROW FUNCTIONS ===");

// Example 1: Basic arrow function
let greetArrow = () => {
  console.log("Hello from an arrow function!");
};

greetArrow();

// Example 2: Arrow function with one parameter (doesn't need parentheses)
let duplicate = number => {
  return number * 2;
};

console.log("Duplicate 5:", duplicate(5));
console.log("Duplicate 10:", duplicate(10));

// Example 3: Arrow function with implicit return (single line)
let square = number => number * number;  // Doesn't need {} or return

console.log("Square of 4:", square(4));
console.log("Square of 7:", square(7));

// Example 4: Arrow function with multiple parameters
let calculateDiscount = (price, percentage) => {
  let discount = price * percentage / 100;
  return price - discount;
};

console.log("Price with 20% discount:", calculateDiscount(100, 20));
console.log("Price with 15% discount:", calculateDiscount(200, 15));

// Example 5: Arrow function with implicit return and multiple parameters
let sumThree = (a, b, c) => a + b + c;

console.log("Sum 2 + 3 + 4:", sumThree(2, 3, 4));

// Here we will explain why arrow functions are popular:
// 1. Shorter and more readable
// 2. They don't have their own 'this' (we'll see this later)
// 3. Ideal for short functions and callbacks

// ===============================================
// DEFAULT PARAMETERS
// ===============================================
// We can give default values to parameters
// If no value is provided, the default value is used

console.log("\n=== DEFAULT PARAMETERS ===");

// Example 1: Basic default parameter
function createUser(name, role = "user") {
  return `User: ${name}, Role: ${role}`;
}

console.log(createUser("Ana", "admin"));
console.log(createUser("Carlos"));  // Uses default role "user"

// Example 2: Multiple default parameters
function configureServer(host = "localhost", port = 3000, ssl = false) {
  return `Server configured at ${host}:${port}, SSL: ${ssl}`;
}

console.log(configureServer());
console.log(configureServer("example.com"));
console.log(configureServer("example.com", 443, true));

// Example 3: Arrow function with default parameters
let greetWithLanguage = (name, language = "spanish") => {
  let greetings = {
    spanish: `¡Hola ${name}!`,
    english: `Hello ${name}!`,
    french: `Bonjour ${name}!`
  };
  return greetings[language] || greetings["spanish"];
};

console.log(greetWithLanguage("Ana"));
console.log(greetWithLanguage("John", "english"));

// ===============================================
// VARIABLE SCOPE
// ===============================================
// Variables have different scopes: global and local

console.log("\n=== VARIABLE SCOPE ===");

// Global variable
let globalMessage = "I am a global variable";

function showScope() {
  // Local variable (only exists inside the function)
  let localMessage = "I am a local variable";
  
  console.log("Inside the function:");
  console.log(globalMessage);  // ✅ We can access the global
  console.log(localMessage);   // ✅ We can access the local
}

showScope();

console.log("\nOutside the function:");
console.log(globalMessage);  // ✅ We can access the global
// console.log(localMessage);  // ❌ Error! We cannot access the local

// Example 2: Variables with the same name
let counter = 10;  // Global variable

function incrementCounter() {
  let counter = 0;  // Local variable (does not affect global)
  counter++;
  console.log("Local counter:", counter);
}

incrementCounter();
console.log("Global counter:", counter);

// ===============================================
// PRACTICAL REAL-WORLD EXAMPLES
// ===============================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: BMI Calculator
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  let category;
  
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }
  
  return {
    bmi: bmi.toFixed(2),
    category: category
  };
}

let bmiResult = calculateBMI(70, 1.75);
console.log(`BMI: ${bmiResult.bmi} - ${bmiResult.category}`);

// Example 2: Password Generator
let generatePassword = (length = 12) => {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
  let password = "";
  
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  
  return password;
};

console.log("Generated password:", generatePassword());
console.log("Short password:", generatePassword(8));

// Example 3: Email Validator
let validateEmail = function(email) {
  // Basic validations
  if (!email || email.length === 0) {
    return { valid: false, error: "Email is required" };
  }
  
  if (!email.includes("@")) {
    return { valid: false, error: "Email must contain @" };
  }
  
  if (email.length < 5) {
    return { valid: false, error: "Email is too short" };
  }
  
  return { valid: true, error: null };
};

console.log("Validate correct email:", validateEmail("user@email.com"));
console.log("Validate incorrect email:", validateEmail("useremail.com"));

// ===============================================
// COMMON ERRORS AND BEST PRACTICES
// ===============================================

console.log("\n=== COMMON ERRORS ===");

// Error 1: Forgetting return
function sumWithoutReturn(a, b) {
  a + b;  // ❌ No return, returns undefined
}

let resultWithoutReturn = sumWithoutReturn(5, 3);
console.log("Result without return:", resultWithoutReturn);

// Error 2: Calling a function before declaring it (with expressed function)
// greetEarly();  // ❌ Error! Cannot call before
let greetEarly = function() {
  console.log("Hello");
};

// Error 3: Confusing parameters
function introduce(name, age) {
  console.log(`My name is ${name} and I am ${age} years old`);
}

introduce(25, "Ana");  // ❌ Parameters are swapped

// Best practices:
// 1. Descriptive function names
// 2. One function, one responsibility
// 3. Document what parameters do
// 4. Use default parameters when useful

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Create a function named `rectangleArea` that receives width and height and returns the area.

// 2. Create a function named `isEven` that receives a number and returns true if it is even or false if it is not.

// 3. Create an arrow function that converts Celsius degrees to Fahrenheit. (Formula: (C * 9/5) + 32).

// 4. Create a function `greet` that receives a `name` and a `time` (default "day"). It should return "Good <time>, <name>!".

// 5. Create an arrow function that receives two numbers and returns the greater of the two (use ternary or if).
// 6. Create a function `calculateFinalPrice` that receives a price and a discount percentage (default 0). Returns the final price.

// 7. Create an arrow function that validates if a person can drive (must be >= 18 years old and have a license).

// 8. Create a function to generate a random integer number between a min and max range.

console.log("\nEnd of session 06! Practice functions at home!");