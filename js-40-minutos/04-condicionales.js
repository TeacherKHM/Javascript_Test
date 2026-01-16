// ===============================================
// SESSION 04 - Conditionals
// Duration: 40 minutes
// Objectives for today:
// • Master if/else and if/else if/else structures
// • Learn to use the ternary operator
// • Understand when to use switch instead of if/else
// • Practice with complex and nested conditions
// ===============================================

// ===============================================
// IF/ELSE - THE BASIS OF CONDITIONS
// ===============================================
// if/else allows us to execute code depending on whether a condition is true or false
// Here we will explain the fundamental structure

console.log("=== BASIC EXAMPLES OF IF/ELSE ===");

// Example 1: Verify if someone is of legal age
let age = 18;
if (age >= 18) {
  console.log("You are of legal age");
} else {
  console.log("You are under age");
}

// Example 2: Verify if a number is positive
let number = -5;
if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// In class we will see the typical error of not using else if when needed
// Question for the class: what would happen if we used separate if instead of else if?

// ===============================================
// IF/ELSE IF/ELSE - MULTIPLE CONDITIONS
// ===============================================
// When we have more than two options, we use else if

console.log("\n=== MULTIPLE CONDITIONS ===");

// Example: Grade a score
let score = 85;
if (score >= 90) {
  console.log("Outstanding");
} else if (score >= 80) {
  console.log("Notable");
} else if (score >= 70) {
  console.log("Approved");
} else if (score >= 60) {
  console.log("Sufficient");
} else {
  console.log("Failed");
}

// Example: Determine age range
let personAge = 25;
if (personAge < 13) {
  console.log("You are a child");
} else if (personAge < 18) {
  console.log("You are a teenager");
} else if (personAge < 30) {
  console.log("You are a young adult");
} else if (personAge < 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior adult");
}

// ===============================================
// COMPLEX CONDITIONS WITH LOGICAL OPERATORS
// ===============================================
// We can combine multiple conditions using && (AND) and || (OR)

console.log("\n=== COMPLEX CONDITIONS ===");

// Example 1: AND (&&) - all conditions must be true
let hasLicense = true;
let hasCar = false;
let drivingAge = 20;

if (drivingAge >= 18 && hasLicense && hasCar) {
  console.log("You can drive your own car");
} else if (drivingAge >= 18 && hasLicense) {
  console.log("You can drive but you don't have a car");
} else {
  console.log("You cannot drive");
}

// Example 2: OR (||) - at least one condition must be true
let isWeekend = false;
let isHoliday = true;
let isVacation = false;

if (isWeekend || isHoliday || isVacation) {
  console.log("You don't work today!");
} else {
  console.log("Time to go to work");
}

// Example 3: Combining AND and OR
let isStudent = true;
let hasDiscount = false;
let isOver65 = false;

if ((isStudent && hasDiscount) || isOver65) {
  console.log("You are entitled to a discount");
} else {
  console.log("You are not entitled to a discount");
}

// Watch out for this common error: not using parentheses in complex conditions
// This can give unexpected results due to operator precedence

// ===============================================
// TERNARY OPERATOR - IF/ELSE IN ONE LINE
// ===============================================
// The ternary operator is a compact way to write simple if/else
// Syntax: condition ? value_if_true : value_if_false

console.log("\n=== TERNARY OPERATOR ===");

// Example 1: Traditional way vs ternary
let userAge = 17;
let message;

// Traditional way
if (userAge >= 18) {
  message = "You can enter";
} else {
  message = "You cannot enter";
}
console.log("With if/else:", message);

// With ternary operator
let ternaryMessage = userAge >= 18 ? "You can enter" : "You cannot enter";
console.log("With ternary:", ternaryMessage);

// Example 2: Assign values based on conditions
let productPrice = 100;
let isPremium = true;
let finalPrice = isPremium ? productPrice * 0.8 : productPrice;
console.log(`Final price: ${finalPrice}€ (with ${isPremium ? "20%" : "0%"} discount)`);

// Example 3: Nested ternaries (not recommended for many levels)
let points = 75;
let grade = points >= 90 ? "A" : 
            points >= 80 ? "B" : 
            points >= 70 ? "C" : 
            points >= 60 ? "D" : "F";
console.log(`Grade: ${grade}`);

// Here we will explain why nested ternaries can be difficult to read
// In class we will see the typical error of abusing nested ternaries

// ===============================================
// SWITCH - WHEN WE HAVE MULTIPLE FIXED OPTIONS
// ===============================================
// switch is useful when comparing a variable with multiple fixed values

console.log("\n=== SWITCH EXAMPLES ===");

// Example 1: Day of the week
let weekDay = 3;
let dayName;

switch (weekDay) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(`Day ${weekDay} is ${dayName}`);

// Example 2: Product type
let productType = "electronics";
let tax;

switch (productType) {
  case "food":
    tax = 0;
    break;
  case "books":
    tax = 4;
    break;
  case "electronics":
    tax = 21;
    break;
  case "clothing":
    tax = 21;
    break;
  default:
    tax = 21;
}
console.log(`The ${productType} product has ${tax}% VAT`);

// Example 3: Multiple cases with the same result
let month = 12;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Autumn";
    break;
  default:
    season = "Invalid month";
}
console.log(`Month ${month} is in ${season}`);

// ===============================================
// WHEN TO USE SWITCH VS IF/ELSE
// ===============================================
// Question for the class: when is it better to use switch and when if/else?

// Switch is better when:
// 1. We check a variable against fixed values
// 2. We have many different cases
// 3. The cases are mutually exclusive

// if/else is better when:
// 1. Conditions are complex (ranges, multiple variables)
// 2. We need to use complex logical operators
// 3. Conditions are not fixed values

// ===============================================
// PRACTICAL REAL-WORLD EXAMPLES
// ===============================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Login system
let username = "admin";
let password = "12345";
let isValidUser = username === "admin" && password === "12345";

if (isValidUser) {
  console.log("✅ Login correct - Welcome admin");
} else {
  console.log("❌ Login incorrect - Invalid username or password");
}

// Example 2: Shipping calculator
let packageWeight = 2.5; // kg
let distance = 100; // km
let isUrgent = true;

let shippingCost;
if (isUrgent) {
  shippingCost = 15 + (packageWeight * 2) + (distance * 0.1);
} else {
  shippingCost = 5 + (packageWeight * 1) + (distance * 0.05);
}
console.log(`Shipping cost: ${shippingCost.toFixed(2)}€`);

// Example 3: Form validation
let formName = "Juan";
let email = "juan@email.com";
let formAge = 25;
let termsAccepted = true;

let errors = [];

if (!formName || formName.length < 3) {
  errors.push("Name must have at least 3 characters");
}

if (!email || !email.includes("@")) {
  errors.push("Email must be valid");
}

if (!formAge || formAge < 18) {
  errors.push("You must be over 18 years old");
}

if (!termsAccepted) {
  errors.push("You must accept the terms and conditions");
}

if (errors.length === 0) {
  console.log("✅ Form valid");
} else {
  console.log("❌ Errors in form:");
  errors.forEach(error => console.log(`- ${error}`));
}

// ===============================================
// COMMON ERRORS AND BEST PRACTICES
// ===============================================

console.log("\n=== COMMON ERRORS ===");

// Error 1: Forgetting break in switch
console.log("Example without break (common error):");
let level = 2;
switch (level) {
  case 1:
    console.log("Basic level");
  case 2:
    console.log("Intermediate level");
  case 3:
    console.log("Advanced level");
}
// This will print all messages from level 2 onwards

// Error 2: Using = instead of === in conditions
let x = 5;
if (x = 10) {  // Error! This assigns 10 to x instead of comparing
  console.log("This will always execute");
}

// Error 3: Not considering all possible cases
let temperature = 15;
if (temperature > 20) {
  console.log("It's hot");
} else if (temperature < 10) {
  console.log("It's cold");
}
// What happens if the temperature is between 10 and 20? Nothing is printed

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Create a program that determines if a number is even or odd.

// 2. Create an age classification system: child (<13), teenager (13-17), young adult (18-25), adult (26-64), senior (65+).

// 3. Use the ternary operator to determine if someone can vote (over 18 years old). Show the message by console.

// 4. Create a switch to determine the price of a movie ticket.
//    - Normal: 10€
//    - Student: 7€
//    - Retiree: 5€
//    - Child: 3€

// 5. Validate an email (simulated) that meets: contain "@", not start with "." and have more than 5 characters.

// 6. Create a program that calculates an annual bonus.
//    - If performance is "high" and has > 2 years: 20%.
//    - If performance is "medium": 10%.
//    - Rest: 0%.

// 7. Use switch to determine the number of days in a month (numeric variable 1-12). Consider a non-leap year (Feb = 28).

// 8. Create a password validator. Must have:
//    - At least 6 characters.
//    - One uppercase letter (simulated or using real methods).
//    - One number (simulated or using real methods).
//    Print errors if it does not comply.

console.log("\nEnd of session 04! Practice conditionals at home!");