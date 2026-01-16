// ===============================================
// SESSION 07 - Arrays and Fundamental Methods
// Duration: 40 minutes
// Objectives for today:
// • Master array creation and manipulation
// • Learn the most important methods: push, pop, map, filter, find
// • Understand the difference between methods that modify and those that don't
// • Use arrays to solve practical problems
// ===============================================

// ===============================================
// 1. WHAT IS AN ARRAY?
// ===============================================
// An array is like an ordered list of elements
// It can contain different data types and is accessed by index (position)

// Array creation
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];
let empty = [];

console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixed);
console.log("Empty array:", empty);

// ===============================================
// 2. ACCESSING ELEMENTS
// ===============================================
// Arrays use indices starting at 0

console.log("=== Accessing elements ===");
console.log("First fruit:", fruits[0]); // "apple"
console.log("Second fruit:", fruits[1]); // "banana"
console.log("Last fruit:", fruits[fruits.length - 1]); // "orange"

// Modify elements
fruits[1] = "pear";
console.log("Modified array:", fruits);

// Add element at a specific position
fruits[3] = "grape";
console.log("With added element:", fruits);

// ===============================================
// 3. BASIC PROPERTIES
// ===============================================

// length - number of elements
console.log("=== Basic properties ===");
console.log("Amount of fruits:", fruits.length);
console.log("Amount of numbers:", numbers.length);

// Verify if it is an array
console.log("Is fruits an array?", Array.isArray(fruits));
console.log("Is text an array?", Array.isArray("hello"));

// ===============================================
// 4. METHODS THAT MODIFY THE ORIGINAL ARRAY
// ===============================================

// push() - add to the end
console.log("\n=== Methods that modify ===");
console.log("Original array:", fruits);
fruits.push("watermelon");
console.log("After push:", fruits);

// pop() - remove the last element
let removed = fruits.pop();
console.log("Element removed with pop:", removed);
console.log("After pop:", fruits);

// unshift() - add to the beginning
fruits.unshift("strawberry");
console.log("After unshift:", fruits);

// shift() - remove from the beginning
let removedFirst = fruits.shift();
console.log("Element removed with shift:", removedFirst);
console.log("After shift:", fruits);

// splice() - add/remove at any position
console.log("\n=== Using splice ===");
let colors = ["red", "green", "blue", "yellow"];
console.log("Original array:", colors);

// Remove elements (position, quantity)
colors.splice(1, 2); // Remove from position 1, 2 elements
console.log("After splice (remove):", colors);

// Add elements
colors.splice(1, 0, "orange", "purple"); // At position 1, remove 0, add 2
console.log("After splice (add):", colors);

// Replace elements
colors.splice(2, 1, "white"); // At position 2, remove 1, add 1
console.log("After splice (replace):", colors);

// ===============================================
// 5. METHODS THAT DO NOT MODIFY THE ORIGINAL ARRAY
// ===============================================

// slice() - extract a portion of the array
console.log("\n=== Methods that do not modify ===");
let countries = ["Spain", "France", "Italy", "Germany", "Portugal"];
console.log("Original array:", countries);

let firstThree = countries.slice(0, 3); // From index 0 to 3 (not included)
console.log("First three countries:", firstThree);
console.log("Original array remains same:", countries);

let lastTwo = countries.slice(-2); // Last two elements
console.log("Last two countries:", lastTwo);

// concat() - join arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let joined = array1.concat(array2);
console.log("Joined arrays:", joined);

// join() - convert array to string
let words = ["Hello", "world", "JavaScript"];
let sentence = words.join(" "); // Joins with space
console.log("Sentence:", sentence);

let csv = words.join(","); // Joins with comma
console.log("CSV:", csv);

// ===============================================
// 6. SEARCH METHODS
// ===============================================

// indexOf() - find index of an element
console.log("\n=== Search methods ===");
let animals = ["dog", "cat", "bird", "fish", "cat"];
console.log("Animals array:", animals);

console.log("Index of 'cat':", animals.indexOf("cat")); // First occurrence
console.log("Index of 'bird':", animals.indexOf("bird"));
console.log("Index of 'not exists':", animals.indexOf("not exists")); // -1 if not found

// lastIndexOf() - last occurrence
console.log("Last index of 'cat':", animals.lastIndexOf("cat"));

// includes() - verify if an element exists
console.log("Includes 'dog'?", animals.includes("dog"));
console.log("Includes 'elephant'?", animals.includes("elephant"));

// find() - find the first element that meets a condition
let numbersFind = [5, 12, 8, 130, 44];
let firstOver10 = numbersFind.find(number => number > 10);
console.log("First number over 10:", firstOver10);

// findIndex() - find the index of the first element that meets condition
let indexOver10 = numbersFind.findIndex(number => number > 10);
console.log("Index of first number over 10:", indexOver10);

// ===============================================
// 7. TRANSFORMATION METHODS (FUNCTIONAL)
// ===============================================
// These methods create new arrays based on the original

// map() - transform each element
console.log("\n=== Transformation methods ===");
let numbersMap = [1, 2, 3, 4, 5];
console.log("Original array:", numbersMap);

let duplicates = numbersMap.map(number => number * 2);
console.log("Duplicated numbers:", duplicates);

let squares = numbersMap.map(number => number ** 2);
console.log("Squared numbers:", squares);

// Practical example: extract object properties
let users = [
    { name: "Ana", age: 25 },
    { name: "Juan", age: 30 },
    { name: "Maria", age: 28 }
];

let names = users.map(user => user.name);
console.log("User names:", names);

// filter() - filter elements that meet condition
let numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numbersFilter.filter(number => number % 2 === 0);
console.log("Even numbers:", evens);

let over5 = numbersFilter.filter(number => number > 5);
console.log("Numbers over 5:", over5);

// Practical example: filter users by age
let over25 = users.filter(user => user.age > 25);
console.log("Users over 25:", over25);

// ===============================================
// 8. REDUCTION METHODS
// ===============================================

// reduce() - reduce array to a single value
console.log("\n=== Reduction methods ===");
let numbersReduce = [1, 2, 3, 4, 5];

let sum = numbersReduce.reduce((accumulator, current) => accumulator + current, 0);
console.log("Total sum:", sum);

let product = numbersReduce.reduce((accumulator, current) => accumulator * current, 1);
console.log("Total product:", product);

// Find the maximum
let maximum = numbersReduce.reduce((max, current) => current > max ? current : max);
console.log("Maximum number:", maximum);

// ===============================================
// 9. SORTING METHODS
// ===============================================

// sort() - sort array
console.log("\n=== Sorting methods ===");
let disordered = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Disordered array:", disordered);

// Warning: sort() without function sorts as strings
disordered.sort();
console.log("Sorted as strings (incorrect for numbers):", disordered);

// Correct order for numbers
let numbersSort = [3, 1, 4, 1, 5, 9, 2, 6];
numbersSort.sort((a, b) => a - b);
console.log("Numerically sorted (ascending):", numbersSort);

// Descending order
numbersSort.sort((a, b) => b - a);
console.log("Numerically sorted (descending):", numbersSort);

// Sort strings
let wordsSort = ["banana", "apple", "orange", "grape"];
wordsSort.sort();
console.log("Sorted words:", wordsSort);

// reverse() - reverse order
console.log("Reversed array:", wordsSort.reverse());

// ===============================================
// 10. TRAVERSING ARRAYS
// ===============================================

// forEach() - execute function for each element
console.log("\n=== Traversing arrays ===");
let traverse = [10, 20, 30, 40, 50];

console.log("Using forEach:");
traverse.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});

// for...of - modern way to traverse
console.log("\nUsing for...of:");
for (let element of traverse) {
    console.log("Element:", element);
}

// traditional for - when you need the index
console.log("\nUsing traditional for:");
for (let i = 0; i < traverse.length; i++) {
    console.log(`Position ${i}: ${traverse[i]}`);
}

// ===============================================
// 11. PRACTICAL EXAMPLES
// ===============================================

// Remove duplicates from an array
function removeDuplicates(array) {
    return [...new Set(array)];
}

let withDuplicates = [1, 2, 2, 3, 4, 4, 5];
let withoutDuplicates = removeDuplicates(withDuplicates);
console.log("Without duplicates:", withoutDuplicates);

// Check if all elements meet condition
let allPositive = numbersFilter.every(number => number > 0);
console.log("Are all positive?", allPositive);

// Check if any element meets condition
let hasOver8 = numbersFilter.some(number => number > 8);
console.log("Is there any number over 8?", hasOver8);

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Create an array with 5 numbers and show in console the first and last element.

// 2. Given an empty array, use `push` to add 3 fruits.

// 3. Use `map` to create a new array containing the numbers of the original array multiplied by 2.

// 4. Use `filter` to obtain only even numbers from an array from 1 to 10.

// 5. Use `find` to find the first number greater than 5 in the array [1, 3, 5, 7, 9].

// 6. Use `reduce` to calculate the total sum of an array of numbers.

// 7. Sort alphabetically the array ["zebra", "apple", "banana", "tree"].

// 8. You have an array of user objects ({id, name, age}). Use `map` to extract only the names into a new array.

console.log("\nEnd of session 07! Practice arrays at home!");

// ===============================================
// SESSION SUMMARY
// ===============================================
// Today we learned:
// • Create and access array elements
// • Methods that modify: push, pop, shift, unshift, splice
// • Methods that do not modify: slice, concat, join
// • Search methods: indexOf, includes, find, findIndex
// • Transformation methods: map, filter
// • Reduction methods: reduce
// • Sorting methods: sort, reverse
// • Ways to traverse: forEach, for...of, traditional for

// Question for the class: When would you use map instead of forEach?
// Why is it important to know if a method modifies the original array?