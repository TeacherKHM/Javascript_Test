// ===============================================
// SESSION 05 - Loops and Repetitions
// Duration: 40 minutes
// Objectives for today:
// • Master the traditional for loop
// • Learn to use while and do-while
// • Understand the for...of loop to iterate arrays
// • Control flow with break and continue
// ===============================================

// ===============================================
// FOR LOOP - THE MOST VERSATILE
// ===============================================
// The for loop allows us to repeat code a specific number of times
// Syntax: for (initialization; condition; update)

console.log("=== EXAMPLES OF FOR LOOP ===");

// Example 1: Count from 1 to 5
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Here we will explain each part of the for loop:
// let i = 1; → Initialization (create the counter)
// i <= 5; → Condition (while true, continue executing)
// i++ → Update (increment the counter after each lap)

// Example 2: Count backwards
console.log("\nCountdown from 10 to 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Liftoff! 🚀");

// Example 3: Multiplication table
console.log("\nTable of 7:");
for (let i = 1; i <= 10; i++) {
  let result = 7 * i;
  console.log(`7 × ${i} = ${result}`);
}

// Example 4: Sum the first 10 numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;  // It is the same as sum = sum + i
}
console.log(`\nThe sum of numbers from 1 to 10 is: ${sum}`);

// In class we will see the typical error of putting ; after the for
// Question for the class: what would happen if we write for (let i = 1; i <= 5; i++); ?

// ===============================================
// WHILE LOOP - REPEAT WHILE TRUE
// ===============================================
// while executes the code while the condition is true
// It is useful when we do not know how many times it will repeat

console.log("\n=== EXAMPLES OF WHILE LOOP ===");

// Example 1: Count with while
console.log("Counting with while:");
let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;  // Very important! If we don't increment, we will have an infinite loop
}

// Example 2: Guess number (simulation)
console.log("\nSimulation of guessing number:");
let secretNumber = 7;
let attempt = 1;
while (attempt !== secretNumber) {
  console.log(`Attempt ${attempt}: This is not the number...`);
  attempt++;
}
console.log(`You guessed it! The number was ${secretNumber}`);

// Example 3: Validate user input
console.log("\nInput validation:");
let validAge = false;
let userAge = 15;  // We simulate that the user entered 15

while (!validAge) {
  if (userAge >= 18) {
    console.log("✅ Valid age, you can enter");
    validAge = true;
  } else {
    console.log(`❌ Invalid age (${userAge}), you must be over 18`);
    userAge += 1;  // We simulate that the user changes their age
  }
}

// Watch out for this common error: infinite loops
// If the condition never becomes false, the program hangs

// ===============================================
// DO-WHILE LOOP - EXECUTE AT LEAST ONCE
// ===============================================
// do-while is like while but guarantees that the code runs at least once
// Syntax: do { code } while (condition);

console.log("\n=== EXAMPLES OF DO-WHILE LOOP ===");

// Example 1: User menu
console.log("Menu simulation:");
let option = 1;  // First user option

do {
  switch (option) {
    case 1:
      console.log("Option 1: View profile");
      break;
    case 2:
      console.log("Option 2: Settings");
      break;
    case 3:
      console.log("Option 3: Exit");
      break;
  }
  option++;  // We simulate that the user changes option
} while (option <= 3);

// Example 2: Guessing game with hint
console.log("\nGuessing game (with at least one attempt):");
let numberToGuess = 5;
let userAttempt = 3;
let attemptsMade = 0;

do {
  attemptsMade++;
  console.log(`Attempt ${attemptsMade}: ${userAttempt}`);
  
  if (userAttempt === numberToGuess) {
    console.log("Congratulations, you guessed it!");
  } else if (userAttempt < numberToGuess) {
    console.log("The number is higher");
    userAttempt++;
  } else {
    console.log("The number is lower");
    userAttempt--;
  }
} while (userAttempt !== numberToGuess && attemptsMade < 3);

// ===============================================
// FOR...OF LOOP - ITERATE OVER ARRAYS
// ===============================================
// for...of is the modern and easiest way to iterate arrays
// It gives us each element of the array directly

console.log("\n=== EXAMPLES OF FOR...OF ===");

// Example 1: Iterate an array of fruits
let fruits = ["apple", "banana", "orange", "grape", "strawberry"];
console.log("List of fruits:");

for (let fruit of fruits) {
  console.log(`- ${fruit}`);
}

// Example 2: Calculate average of grades
let grades = [8, 7, 9, 6, 10, 8, 7];
let sumGrades = 0;

console.log("\nStudent grades:");
for (let grade of grades) {
  console.log(grade);
  sumGrades += grade;
}

let average = sumGrades / grades.length;
console.log(`Average: ${average.toFixed(2)}`);

// Example 3: Filter even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = [];

console.log("\nEven numbers:");
for (let number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
    evens.push(number);
  }
}

// Example 4: Find the longest name
let names = ["Ana", "Maria", "Juan Carlos", "Lucia", "Alejandro"];
let longestName = "";

for (let name of names) {
  if (name.length > longestName.length) {
    longestName = name;
  }
}
console.log(`\nThe longest name is: "${longestName}"`);

// ===============================================
// BREAK AND CONTINUE - CONTROL FLOW
// ===============================================
// break allows us to exit the loop early
// continue allows us to skip to the next iteration

console.log("\n=== EXAMPLES OF BREAK AND CONTINUE ===");

// Example 1: Use break to find a number
console.log("Searching for number 7 in the array:");
let searchNumbers = [1, 3, 5, 7, 9, 11, 13];
let found = false;

for (let number of searchNumbers) {
  console.log(`Checking: ${number}`);
  
  if (number === 7) {
    console.log("Number 7 found!");
    found = true;
    break;  // Exit the loop immediately
  }
}

if (!found) {
  console.log("Number 7 is not in the array");
}

// Example 2: Use continue to skip numbers
console.log("\nOdd numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // Skip even numbers
  }
  console.log(i);
}

// Example 3: Validate passwords
console.log("\nPassword validation:");
let passwords = ["123", "abc", "password", "hello123", "secret"];
let validPassword = null;

for (let password of passwords) {
  console.log(`Checking: "${password}"`);
  
  // If it is too short, skip to the next
  if (password.length < 6) {
    console.log("  → Too short");
    continue;
  }
  
  // If no numbers, skip to the next
  if (!/\d/.test(password)) {
    console.log("  → No numbers");
    continue;
  }
  
  // If we get here, the password is valid
  console.log("  → ✅ Valid password");
  validPassword = password;
  break;
}

if (validPassword) {
  console.log(`Password found: ${validPassword}`);
} else {
  console.log("No valid password found");
}

// ===============================================
// NESTED LOOPS - LOOPS INSIDE LOOPS
// ===============================================
// Sometimes we need loops inside other loops
// Warning! They can be very slow if not used well

console.log("\n=== EXAMPLES OF NESTED LOOPS ===");

// Example 1: Multiplication tables
console.log("Multiplication tables from 1 to 3:");
for (let table = 1; table <= 3; table++) {
  console.log(`\nTable of ${table}:`);
  
  for (let i = 1; i <= 10; i++) {
    let result = table * i;
    console.log(`${table} × ${i} = ${result}`);
  }
}

// Example 2: Search in a matrix (array of arrays)
console.log("\nSearching in matrix:");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let numberToFind = 5;
let position = null;

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === numberToFind) {
      position = `row ${row}, column ${col}`;
      break;  // Exit inner loop
    }
  }
  
  if (position) {
    break;  // Exit outer loop too
  }
}

if (position) {
  console.log(`The number ${numberToFind} is in ${position}`);
} else {
  console.log(`The number ${numberToFind} is not in the matrix`);
}

// ===============================================
// COMMON ERRORS AND BEST PRACTICES
// ===============================================

console.log("\n=== COMMON ERRORS ===");

// Error 1: Infinite loop (do not execute this!)
// console.log("Example of infinite loop (commented):");
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   // Forgot to increment i! This would never end
// }

// Error 2: Putting semicolon after for
console.log("\nError with semicolon:");
for (let i = 1; i <= 3; i++); {
  console.log("This only executes once");
}

// Error 3: Incorrect condition in loop
console.log("\nError in condition:");
for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("Boom!");
  } else {
    console.log(`${i}...`);
  }
}

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Print numbers from 1 to 20 using a for loop.

// 2. Print only even numbers from 1 to 20 using a for loop and an if.

// 3. Calculate the sum of all numbers from 1 to 100 and show the final result.

// 4. Perform a countdown from 10 to 1 using a while loop.

// 5. Create an array with 5 people's names. Use a for...of loop to greet each one (e.g., "Hello Ana!").

// 6. Given the array [5, 12, 3, 8, 20, 1], find which is the largest number using a loop.

// 7. Create a simple "game" using do-while where you generate a random number from 1 to 10.
//    (Simulated: you don't need to ask for real input from the user, just print the attempts until it matches a "secret" number).

// 8. Print multiplication tables from 2 to 5 using nested loops.

console.log("\nEnd of session 05! Practice loops at home!");