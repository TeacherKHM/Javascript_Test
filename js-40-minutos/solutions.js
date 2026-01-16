// ===============================================
// EXERCISE SOLUTIONS
// ===============================================
// This file contains the resolutions to the exercises proposed in each module.
// Try to solve them yourself before looking here.

// ===============================================
// SOLUTIONS 01 - VARIABLES
// ===============================================
{
    // 1. Single line comment
    // Exercise 1

    // 2. Multi-line comment
    /* 
      A variable is a space in memory 
      where we can store information. 
    */

    // 3. Declare variable with let
    let name = "MyName";
    // console.log(name);

    // 4. Declare variable with const
    const age = 30;
    // console.log(age);

    // 5. Reassign const (errors)
    // age = 31; // TypeError: Assignment to constant variable.

    // 6. Price variable
    let price = 100;
    console.log("Original price:", price);
    price = 150;
    console.log("Updated price:", price);

    // 7. Two variables in one log
    let city = "Madrid";
    let population = 3000000;
    console.log(city, ",", population);
}

// ===============================================
// SOLUTIONS 02 - DATA TYPES
// ===============================================
{
    // 1. Message variable
    let message = "Hello JavaScript";
    console.log(message);

    // 2. Integer and decimal
    let result = 100;
    let pi = 3.14;

    // 3. Boolean
    let isLearning = true;

    // 4. User undefined
    let user;
    console.log(typeof user); // "undefined"

    // 5. Null
    let empty = null;
    console.log(typeof empty); // "object"

    // 6. Personal data
    let myName = "Ana";
    let myAge = 25;
    let isStudent = true;
    console.log(myName, myAge, isStudent);
}

// ===============================================
// SOLUTIONS 03 - OPERATORS
// ===============================================
{
    // 1. Arithmetic
    let x = 20;
    let y = 5;
    console.log("Sum:", x + y);
    console.log("Subtraction:", x - y);
    console.log("Mult:", x * y);
    console.log("Div:", x / y);

    // 2. Modulus
    console.log("Remainder 25/4:", 25 % 4); // 1

    // 3. Concatenation
    let yourName = "Juan";
    let yourSurname = "Garcia";
    let fullName = yourName + " " + yourSurname;
    console.log(fullName);

    // 4. Template String
    let templateName = `${yourName} ${yourSurname}`;
    console.log(templateName);

    // 5. Strict equality
    console.log("10 === '10':", 10 === '10'); // false

    // 6. Logical operators
    let t = true;
    let f = false;
    console.log("AND:", t && f); // false
    console.log("OR:", t || f);  // true
}

// ===============================================
// SOLUTIONS 04 - CONDITIONALS
// ===============================================
{
    // 1. Even or Odd
    let checkNumber = 7;
    if (checkNumber % 2 === 0) {
        console.log(`${checkNumber} is even`);
    } else {
        console.log(`${checkNumber} is odd`);
    }

    // 2. Age Classification
    let classAge = 16;
    if (classAge < 13) console.log("Child");
    else if (classAge < 18) console.log("Teenager");
    else if (classAge < 26) console.log("Young Adult");
    else if (classAge < 65) console.log("Adult");
    else console.log("Senior");

    // 3. Ternary Vote
    let voteAge = 17;
    let canVote = voteAge >= 18 ? "Yes can vote" : "Cannot vote";
    console.log(canVote);

    // 4. Switch Cinema Price
    let ticketType = "student";
    let cinemaPrice;
    switch(ticketType) {
        case "normal": cinemaPrice = 10; break;
        case "student": cinemaPrice = 7; break;
        case "senior": cinemaPrice = 5; break;
        case "child": cinemaPrice = 3; break;
        default: cinemaPrice = 10;
    }
    console.log("Ticket price:", cinemaPrice);

    // 5. Email Validator
    let email = "test@email.com";
    if (email.includes("@") && !email.startsWith(".") && email.length > 5) {
        console.log("Valid email");
    } else {
        console.log("Invalid email");
    }

    // 6. Annual Bonus
    let years = 3;
    let perf = "high";
    let bonus = 0;
    if (perf === "high" && years > 2) bonus = 20;
    else if (perf === "medium") bonus = 10;
    console.log("Bonus of " + bonus + "%");

    // 7. Days of month (Simplified)
    let monthId = 2; // February
    let days;
    switch(monthId) {
        case 2: days = 28; break; // Assuming non-leap year
        case 4: case 6: case 9: case 11: days = 30; break;
        default: days = 31;
    }
    console.log(`Month ${monthId} has ${days} days`);

    // 8. Simplified Password Validator
    let pwd = "Abc123";
    let errors = [];
    if (pwd.length < 6) errors.push("Too short");
    // Simulation of uppercase and number check
    if (pwd === pwd.toLowerCase()) errors.push("Missing uppercase"); 
    if (!/\d/.test(pwd)) errors.push("Missing number"); // Using basic regex

    if (errors.length > 0) console.log("Errors:", errors);
    else console.log("Valid password");
}

// ===============================================
// SOLUTIONS 05 - LOOPS
// ===============================================
{
    // 1. 1 to 20 for
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }

    // 2. 1 to 20 evens
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) console.log(i);
    }

    // 3. Sum 1 to 100
    let totalSum = 0;
    for (let i = 1; i <= 100; i++) {
        totalSum += i;
    }
    console.log("Total sum:", totalSum);

    // 4. Countdown while
    let count = 10;
    while (count >= 1) {
        console.log(count);
        count--;
    }

    // 5. Greet array
    let namesList = ["Ana", "Juan", "Maria", "Carlos"];
    for (let name of namesList) {
        console.log(`Hello ${name}!`);
    }

    // 6. Max array
    let numbersList = [5, 12, 3, 8, 20, 1];
    let max = numbersList[0];
    for (let number of numbersList) {
        if (number > max) max = number;
    }
    console.log("Max:", max);

    // 7. Simulated Do-while
    let secret = 7;
    let simulatedAttempt = 0;
    do {
        simulatedAttempt++;
    } while (simulatedAttempt !== secret);
    console.log(`Guessed in ${simulatedAttempt} attempts`);

    // 8. Tables 2 to 5
    for (let t = 2; t <= 5; t++) {
        console.log(`--- Table of ${t} ---`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${t} x ${j} = ${t*j}`);
        }
    }
}

// ===============================================
// SOLUTIONS 06 - FUNCTIONS
// ===============================================
{
    // 1. Rectangle Area
    function rectangleArea(width, height) {
        return width * height;
    }
    console.log("Area 5x3:", rectangleArea(5, 3));

    // 2. Is Even
    function isEven(number) {
        return number % 2 === 0;
    }
    console.log("8 even?", isEven(8));

    // 3. Celsius to Fahrenheit
    let celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
    console.log("25C to F:", celsiusToFahrenheit(25));

    // 4. Greet Time
    function greetWithTime(name, time = "day") {
        return `Good ${time}, ${name}!`;
    }
    console.log(greetWithTime("Ana"));

    // 5. Greater of two
    let greaterOfTwo = (a, b) => a > b ? a : b;
    console.log("Greater 10, 20:", greaterOfTwo(10, 20));

    // 6. Discount Price
    function calculateFinalPrice(price, discount = 0) {
        return price * (1 - discount / 100);
    }
    console.log("Price 100 - 20%:", calculateFinalPrice(100, 20));

    // 7. Can Drive
    let canDrive = (age, hasLicense) => age >= 18 && hasLicense;
    console.log("Drive 20 with License:", canDrive(20, true));

    // 8. Random Range
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log("Random 1-10:", randomNumber(1, 10));
}

// ===============================================
// SOLUTIONS 07 - ARRAYS
// ===============================================
{
    // 1. First and Last
    let numbers = [10, 20, 30, 40, 50];
    console.log("First:", numbers[0]);
    console.log("Last:", numbers[numbers.length - 1]);

    // 2. Push Fruits
    let fruits = [];
    fruits.push("apple", "banana", "grapes");
    console.log("Fruits push:", fruits);

    // 3. Map Duplicate
    let numsMap = [1, 2, 3, 4, 5];
    let duplicates = numsMap.map(n => n * 2);
    console.log("Duplicates map:", duplicates);

    // 4. Filter Evens
    let numsFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evens = numsFilter.filter(n => n % 2 === 0);
    console.log("Evens filter:", evens);

    // 5. Find Greater 5
    let numsFind = [1, 3, 5, 7, 9];
    let greater5 = numsFind.find(n => n > 5);
    console.log("First > 5:", greater5);

    // 6. Reduce Sum
    let numsReduce = [10, 20, 30, 40];
    let sum = numsReduce.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum reduce:", sum);

    // 7. Sort Alphabetical
    let words = ["zebra", "apple", "banana", "tree"];
    words.sort(); // Watch out for accents in sort by default
    console.log("Sort words:", words);

    // 8. Map Names Objects
    let users = [
        { id: 1, name: "Ana", age: 25 },
        { id: 2, name: "Juan", age: 30 },
        { id: 3, name: "Maria", age: 28 }
    ];
    let names = users.map(u => u.name);
    console.log("Extracted names:", names);
}

// ===============================================
// SOLUTIONS 08 - OBJECTS
// ===============================================
{
    // 1. Car Object
    let car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        showInfo: function() {
            return `${this.brand} ${this.model} (${this.year})`;
        }
    };
    console.log(car.showInfo());

    // 2. Destructuring Person
    let person = { name: "Ana", age: 25, city: "Madrid" };
    let { name, age } = person;
    console.log(`Name: ${name}, Age: ${age}`);

    // 3. Copy Object
    let original = { a: 1, b: 2 };
    let copy = { ...original, b: 20 };
    console.log("Org:", original, "Copy:", copy);

    // 4. Destructuring Array
    let colors = ["red", "green", "blue", "yellow"];
    let [c1, c2, c3] = colors;
    console.log("3 colors:", c1, c2, c3);

    // 5. Dynamic Property
    let key = "dynamic";
    let value = "content";
    let objDyn = {
        [key]: value
    };
    console.log("Dynamic:", objDyn);

    // 6. Object.keys
    let user = { name: "Juan", age: 30, email: "j@e.com" };
    console.log("Keys:", Object.keys(user));

    // 7. Spread Objects
    let o1 = { a: 1 };
    let o2 = { b: 2 };
    let combined = { ...o1, ...o2 };
    console.log("Combined:", combined);

    // 8. Nested Object
    let student = { student: { name: "Maria", data: { major: "Systems" } } };
    console.log("Major:", student.student.data.major);
}

// ===============================================
// SOLUTIONS 09 - DOM (Code examples, require HTML)
// ===============================================
{
    // 1. Selector ID
    let title = document.getElementById("main-title"); // or querySelector
    if (title) title.textContent = "New Title";

    // 2. Select All and Styles
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => p.style.backgroundColor = "yellow");

    // 3. ClassList and Timeout
    let box = document.querySelector(".box");
    if (box) {
        box.classList.add("highlight");
        setTimeout(() => box.classList.remove("highlight"), 2000);
    }

    // 4. Create Element
    let div = document.createElement("div");
    div.textContent = "New Div";
    div.classList.add("new-class");
    document.body.appendChild(div);

    // 5. Attributes
    let img = document.querySelector("#my-image");
    if (img) img.setAttribute("src", "http://example.com/img.jpg");

    // 6. InnerHTML
    let listContainer = document.querySelector("#list");
    if (listContainer) {
        listContainer.innerHTML = "<ul><li>A</li><li>B</li><li>C</li></ul>";
    }

    // 7. Toggle Event (Note: Events are covered in detail in session 10, but introduced here)
    let btn = document.querySelector("#btn-toggle");
    if (btn) {
        btn.addEventListener("click", () => btn.classList.toggle("active"));
    }

    // 8. Count Class
    let important = document.querySelectorAll(".important");
    console.log("Amount important:", important.length);
}

// ===============================================
// SOLUTIONS 10 - EVENTS
// ===============================================
{
    // 1. Click Button
    let btn = document.querySelector("#btn-ex1");
    if (btn) {
        btn.addEventListener("click", function() {
            this.textContent = "Clicked!";
        });
    }

    // 2. Click Coordinates
    // document.addEventListener("click", (e) => {
    //     console.log(`Click at ${e.clientX}, ${e.clientY}`);
    // });

    // 3. Input Real Time
    let input = document.querySelector("#input-ex3");
    let p = document.querySelector("#result-ex3");
    if (input && p) {
        input.addEventListener("input", function() {
            p.textContent = this.value;
        });
    }

    // 4. Enter in Input
    let inputEnter = document.querySelector("#input-ex4");
    if (inputEnter) {
        inputEnter.addEventListener("keydown", function(e) {
            if (e.key === "Enter") console.log("Enter:", this.value);
        });
    }

    // 5. Mouseover/out
    let div = document.querySelector("#div-ex5");
    if (div) {
        div.addEventListener("mouseover", function() { this.style.backgroundColor = "lightblue"; });
        div.addEventListener("mouseout", function() { this.style.backgroundColor = "white"; });
    }

    // 6. Prevent Submit
    let form = document.querySelector("#form-ex6");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log("Submit prevented");
        });
    }

    // 7. Counter
    let count = 0;
    let btnCount = document.querySelector("#btn-ex7");
    let display = document.querySelector("#display-ex7");
    if (btnCount && display) {
        btnCount.addEventListener("click", () => {
            count++;
            display.textContent = count;
        });
    }

    // 8. Delegation
    let container = document.querySelector("#container-ex8");
    if (container) {
        container.addEventListener("click", function(e) {
            if (e.target.classList.contains("item")) {
                console.log("Item clicked:", e.target.textContent);
            }
        });
    }
}

// ===============================================
// SOLUTIONS 11 - MINI PROJECTS (Fragments to implement)
// ===============================================
{
    // 1. Custom Counter
    let btnSet = document.querySelector("#btn-set");
    let inputSet = document.querySelector("#input-value");
    // Assuming variables project1Counter and updateCounterDisplay exist
    if (btnSet && inputSet) {
        btnSet.addEventListener("click", () => {
            let val = parseInt(inputSet.value);
            if (!isNaN(val)) {
                // project1Counter = val; // Uncomment in real project
                // updateCounterDisplay();
                console.log("New counter value:", val);
            }
        });
    }

    // 2. Traffic Light with Sound
    function playSound() { console.log("*BEEP* Light change"); }
    // Integrate playSound() inside nextColor() function

    // 3. Calculator Functions
    function opRoot() {
        // let val = parseFloat(displayCalculadora.textContent);
        // updateDisplay(Math.sqrt(val));
        console.log("Square root executed");
    }

    // 4. Timer
    function startTimer(seconds) {
        console.log(`Timer started: ${seconds}s`);
        let interval = setInterval(() => {
            seconds--;
            console.log(seconds);
            if (seconds <= 0) {
                clearInterval(interval);
                alert("Time!");
            }
        }, 1000);
    }

    // 5. Button Animation
    function animateBtn(btn) {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => btn.style.transform = "scale(1)", 100);
    }
    // Add to event listener: animateBtn(this);

    // 6. Guessing Game
    let secret = Math.floor(Math.random() * 100) + 1;
    function checkGuess(guess) {
        if (guess === secret) console.log("Correct!");
        else console.log(guess < secret ? "Higher" : "Lower");
    }

    // 7. Global Theme Mode
    let toggleThemeBtn = document.querySelector("#btn-theme");
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // 8. Mini ToDo
    let todoInput = document.querySelector("#todo-input");
    let todoList = document.querySelector("#todo-list");
    if (todoInput && todoList) {
        todoInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && todoInput.value) {
                let li = document.createElement("li");
                li.textContent = todoInput.value;
                todoList.appendChild(li);
                todoInput.value = "";
            }
        });
    }
}

// ===============================================
// SOLUTIONS 12 - LOCALSTORAGE AND FETCH
// ===============================================
{
    // 1. Save Preferences
    let prefs = { theme: "dark", language: "fr", font: "medium" };
    localStorage.setItem("preferences", JSON.stringify(prefs));
    console.log("Prefs saved");

    // 2. Read Language
    let stored = localStorage.getItem("preferences");
    if (stored) {
        let p = JSON.parse(stored);
        console.log("Language:", p.language);
    }

    // 3. Visits Counter
    let count = parseInt(localStorage.getItem("visits") || "0");
    count++;
    localStorage.setItem("visits", count.toString());
    console.log("Visit #", count);

    // 4. Fetch Users
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(r => r.json())
    //     .then(data => console.log("User 1:", data[0].name));

    // 5. Notes System
    function saveNote(text) {
        let notes = JSON.parse(localStorage.getItem("notes") || "[]");
        notes.push({ t: text, d: new Date() });
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    
    // 6. Simulated Post
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //     method: "POST",
    //     body: JSON.stringify({ name: "Test", email: "a@b.c" }),
    //     headers: { "Content-Type": "application/json" }
    // }).then(r => r.json()).then(d => console.log("Created:", d));

    // 7. Simple Cache
    let cache = {};
    function getWithCache(url) {
        if (cache[url] && (Date.now() - cache[url].time < 300000)) {
            return Promise.resolve(cache[url].data);
        }
        return fetch(url).then(r => r.json()).then(d => {
            cache[url] = { data: d, time: Date.now() };
            return d;
        });
    }

    // 8. Check Connection
    async function checkConn() {
        try {
            await fetch("https://jsonplaceholder.typicode.com/posts/1");
            console.log("Online");
        } catch(e) {
            localStorage.setItem("offlineMode", "true");
            console.log("Offline saved");
        }
    }
}

// ===============================================
// SOLUTIONS 13 - FINAL PROJECT (Suggested Improvements)
// ===============================================
{
    // 1. Add Priority
    function setPriority(id, p) {
        // In a real project, this would modify the tasks array
        console.log(`Task ${id} priority: ${p}`);
        // app.tasks.find(t => t.id === id).priority = p;
        // app.render();
    }

    // 2. Search
    function search(query) {
        let results = []; // app.tasks.filter(t => t.text.includes(query));
        console.log(`Searching: ${query}, found: ${results.length}`);
    }

    // 3. Categories
    function addCategory(id, cat) {
        // app.tasks.find(t => t.id === id).category = cat;
        console.log(`Category ${cat} added to task ${id}`);
    }

    // 4. Dark Mode
    function toggleDark() {
        document.body.classList.toggle("dark");
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    }

    // 6. Reminders
    function setReminder(id, time) {
        let delay = new Date(time) - new Date();
        if (delay > 0) setTimeout(() => alert(`Reminder task ${id}`), delay);
    }
}
