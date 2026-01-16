// ===============================================
// SESSION 08 - Objects and Data Structures
// Duration: 40 minutes
// Objectives for today:
// • Master object creation and manipulation
// • Learn object and array destructuring
// • Understand the spread operator (...) with objects
// • Use objects to model real-world data
// ===============================================

// ===============================================
// 1. WHAT IS AN OBJECT?
// ===============================================
// An object is a collection of properties (key-value)
// It is like a file with information about something

// Object creation
let person = {
    name: "Ana",
    age: 25,
    city: "Madrid"
};

console.log("Person object:", person);

// Object with different data types
let student = {
    name: "Juan",
    age: 20,
    isActive: true,
    grades: [8, 9, 7],
    address: {
        street: "Main Street",
        number: 123
    },
    greet: function() {
        return "Hello, I am " + this.name;
    }
};

console.log("Student object:", student);

// ===============================================
// 2. ACCESSING PROPERTIES
// ===============================================

// Dot notation (most common)
console.log("=== Accessing properties ===");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Is active?:", student.isActive);

// Bracket notation (useful for dynamic properties)
console.log("Name with brackets:", student["name"]);

let property = "age";
console.log("Age with variable:", student[property]);

// Accessing nested properties
console.log("Street:", student.address.street);
console.log("First grade:", student.grades[0]);

// ===============================================
// 3. MODIFYING AND ADDING PROPERTIES
// ===============================================

// Modify existing properties
console.log("\n=== Modifying properties ===");
console.log("Original age:", student.age);
student.age = 21;
console.log("Modified age:", student.age);

// Add new properties
student.lastName = "Garcia";
student.email = "juan@email.com";
console.log("With new properties:", student);

// Add properties with bracket notation
student["phone"] = "600123456";
console.log("With phone:", student);

// ===============================================
// 4. METHODS IN OBJECTS
// ===============================================
// Methods are functions that belong to an object

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    
    // Traditional method
    start: function() {
        return "The car is starting";
    },
    
    // Shorthand method (ES6+)
    accelerate: function() {
        return `${this.brand} ${this.model} is accelerating`;
    },
    
    // Method with parameters
    drive: function(kilometers) {
        return `Driving ${kilometers} km`;
    },
    
    // Method that modifies the object
    ageCar: function() {
        this.year++;
        return `The car is now from year ${this.year}`;
    }
};

console.log("\n=== Object methods ===");
console.log(car.start());
console.log(car.accelerate());
console.log(car.drive(100));
console.log(car.ageCar());
console.log("Aged car:", car);

// ===============================================
// 5. THIS KEYWORD
// ===============================================
// this refers to the current object inside a method

let user = {
    name: "Maria",
    age: 28,
    
    introduce: function() {
        return `My name is ${this.name} and I am ${this.age} years old`;
    },
    
    haveBirthday: function() {
        this.age++;
        return `Happy Birthday! Now I am ${this.age} years old`;
    }
};

console.log("\n=== Using this ===");
console.log(user.introduce());
console.log(user.haveBirthday());
console.log(user.haveBirthday());

// Watch out for this in different contexts
function globalFunction() {
    console.log("this in global function:", this); // Depends on context
}

// ===============================================
// 6. OBJECT DESTRUCTURING
// ===============================================
// Destructuring allows us to extract properties cleanly

let product = {
    id: 1,
    name: "Laptop",
    price: 999,
    category: "Electronics",
    stock: 10
};

console.log("\n=== Object destructuring ===");

// Basic destructuring
let { name, price, category } = product;
console.log("Name:", name);
console.log("Price:", price);
console.log("Category:", category);

// Destructuring with renaming
let { name: productName, price: productPrice } = product;
console.log("Renamed name:", productName);

// Destructuring with default values
let { id, name: nom, stock: quantity = 0 } = product;
console.log("Stock with default value:", quantity);

// Destructuring in function parameters
function showProduct({ name, price, category }) {
    return `${name} - $${price} (${category})`;
}

console.log(showProduct(product));

// ===============================================
// 7. ARRAY DESTRUCTURING
// ===============================================

let colors = ["red", "green", "blue", "yellow"];
console.log("\n=== Array destructuring ===");

// Basic destructuring
let [first, second, third] = colors;
console.log("First color:", first);
console.log("Second color:", second);

// Skip elements
let [color1, , color3] = colors;
console.log("First and third color:", color1, color3);

// With default value
let [c1, c2, c3, c4, c5 = "purple"] = colors;
console.log("Fifth color with default:", c5);

// Destructuring with rest operator
let [firstColor, ...otherColors] = colors;
console.log("First color:", firstColor);
console.log("Other colors:", otherColors);

// ===============================================
// 8. SPREAD OPERATOR (...) WITH OBJECTS
// ===============================================
// The spread operator allows us to copy and combine objects

console.log("\n=== Spread operator with objects ===");

let basePerson = {
    name: "Carlos",
    age: 30,
    city: "Barcelona"
};

// Copy object
let personCopy = { ...basePerson };
console.log("Copy:", personCopy);

// Modify copy without affecting original
personCopy.age = 31;
console.log("Original:", basePerson);
console.log("Modified copy:", personCopy);

// Add properties
let extendedPerson = { ...basePerson, country: "Spain", phone: "600123456" };
console.log("Extended:", extendedPerson);

// Overwrite properties
let modifiedPerson = { ...basePerson, age: 35, city: "Valencia" };
console.log("Modified:", modifiedPerson);

// Combine objects
let address = {
    street: "Main Street",
    number: 45,
    city: "Madrid" // This property will overwrite the base object's
};

let completePerson = { ...basePerson, ...address };
console.log("Combined:", completePerson);

// ===============================================
// 9. USEFUL OBJECT METHODS
// ===============================================

let book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    pages: 176,
    available: true
};

console.log("\n=== Useful object methods ===");

// Object.keys() - get all keys
let keys = Object.keys(book);
console.log("Book keys:", keys);

// Object.values() - get all values
let values = Object.values(book);
console.log("Book values:", values);

// Object.entries() - get array of [key, value]
let entries = Object.entries(book);
console.log("Book entries:", entries);

// hasOwnProperty() - verify if a property exists
console.log("Has property 'title'?:", book.hasOwnProperty("title"));
console.log("Has property 'publisher'?:", book.hasOwnProperty("publisher"));

// in operator - another way to verify properties
console.log("'author' in book?:", "author" in book);
console.log("'isbn' in book?:", "isbn" in book);

// ===============================================
// 10. DYNAMIC AND COMPUTED OBJECTS
// ===============================================

// Properties with dynamic names
console.log("\n=== Dynamic properties ===");

let propertyName = "dynamic";
let dynamicObject = {
    fixedProperty: "fixed value",
    [propertyName]: "dynamic value"
};

console.log("Dynamic object:", dynamicObject);

// Add properties dynamically
let prefix = "temp_";
let counter = 1;
dynamicObject[prefix + counter] = "temp value 1";
console.log("With dynamic property:", dynamicObject);

// ===============================================
// 11. NESTED OBJECTS AND COMPLEX STRUCTURES
// ===============================================

let company = {
    name: "TechCorp",
    founded: 2010,
    employees: [
        {
            id: 1,
            name: "Ana",
            position: "Developer",
            department: {
                name: "Engineering",
                budget: 100000
            }
        },
        {
            id: 2,
            name: "Juan",
            position: "Designer",
            department: {
                name: "Design",
                budget: 50000
            }
        }
    ],
    projects: [
        {
            name: "Project Alpha",
            status: "active",
            budget: 75000
        },
        {
            name: "Project Beta",
            status: "planning",
            budget: 50000
        }
    ]
};

console.log("\n=== Complex structures ===");
console.log("Name of first employee:", company.employees[0].name);
console.log("Budget of Ana's department:", company.employees[0].department.budget);
console.log("Status of first project:", company.projects[0].status);

// ===============================================
// 12. BEST PRACTICES
// ===============================================

// 1. Descriptive names
let goodUser = {
    fullName: "Maria Garcia Lopez", // ✅ Clear
    birthDate: "1995-06-15", // ✅ Specific
    email: "maria.garcia@email.com" // ✅ Descriptive
};

let badUser = {
    n: "Maria", // ❌ Confusing
    bd: "1995-06-15", // ❌ Abbreviated
    e: "maria@email.com" // ❌ Too short
};

// 2. Consistent structure
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 999,
        stock: 10,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Mouse",
        price: 25,
        stock: 50,
        category: "Accessories"
    }
];

// 3. Avoid undefined properties
let profile = {
    name: "Carlos",
    age: 30,
    email: "carlos@email.com",
    phone: null // Better than undefined
};

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Create an object `car` with properties: brand, model, year and a method `showInfo` that returns "Brand Model (Year)".

// 2. Given the object `person = { name: "Ana", age: 25, city: "Madrid" }`, use destructuring to extract `name` and `age`.

// 3. Create a copy of an object `{ a: 1, b: 2 }` and modify property `b` to 20 in the copy, without affecting the original.

// 4. Given the array `["red", "green", "blue", "yellow"]`, use destructuring to get the first 3 colors in separate variables.

// 5. Create an object with a dynamic property. The key must be in a variable `key` and the value in `value`.

// 6. Use `Object.keys()` to show all keys of the object `{ name: "Juan", age: 30, email: "juan@email.com" }`.

// 7. Combine two objects `{ a: 1 }` and `{ b: 2 }` into a new one using the spread operator.

// 8. Given a nested object `{ student: { name: "Maria", data: { major: "Systems" } } }`, access the property `major`.

console.log("\nEnd of session 08! Practice objects at home!");

// ===============================================
// SESSION SUMMARY
// ===============================================
// Today we learned:
// • Create and manipulate objects
// • Access properties with dot and bracket notation
// • Methods and use of this
// • Object and array destructuring
// • Spread operator to copy and combine objects
// • Useful methods: Object.keys, Object.values, Object.entries
// • Nested objects and complex structures
// • Best practices when working with objects

// Question for the class: When would you use destructuring instead of accessing properties directly?
// Why is it important to use spread operator when copying objects?