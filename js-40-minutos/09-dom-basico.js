// ===============================================
// SESSION 09 - Basic DOM and HTML Manipulation
// Duration: 40 minutes
// Objectives for today:
// • Understand what the DOM is and how JavaScript interacts with HTML
// • Learn to select elements with querySelector
// • Master textContent, innerHTML and content manipulation
// • Use classList to modify CSS classes
// ===============================================

// ===============================================
// 1. WHAT IS THE DOM?
// ===============================================
// DOM = Document Object Model
// It is the representation of our HTML page as JavaScript objects
// Think of the DOM as a tree where each HTML tag is a branch

/*
DOM Structure (mental example):
document
├── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── h1
        ├── p
        ├── div
        │   ├── span
        │   └── button
        └── footer
*/

// ===============================================
// 2. SELECTING DOM ELEMENTS
// ===============================================
// To manipulate elements, we must first select them

// querySelector() - selects the first element that matches
console.log("=== Selecting elements ===");

// Select by tag
let firstH1 = document.querySelector("h1");
console.log("First h1:", firstH1);

// Select by class
let firstElementWithClass = document.querySelector(".my-class");
console.log("First element with class .my-class:", firstElementWithClass);

// Select by ID
let elementById = document.querySelector("#my-id");
console.log("Element with ID #my-id:", elementById);

// Select with complex CSS selectors
let buttonInsideDiv = document.querySelector("div .button");
let inputWithEmailType = document.querySelector("input[type='email']");

// querySelectorAll() - selects ALL elements that match
let allParagraphs = document.querySelectorAll("p");
let allButtons = document.querySelectorAll("button");
let allElementsWithClass = document.querySelectorAll(".important");

console.log("All paragraphs:", allParagraphs);
console.log("Amount of paragraphs:", allParagraphs.length);

// ===============================================
// 3. READING AND MODIFYING CONTENT
// ===============================================

// textContent - only the text, without HTML tags
console.log("\n=== Working with textContent ===");

// Suppose we have: <h1 id="title">Hello <span>World</span></h1>
let title = document.querySelector("#title");
if (title) {
    console.log("Original textContent:", title.textContent); // "Hello World"
    
    // Modify textContent
    title.textContent = "New Title";
    console.log("Modified textContent:", title.textContent);
}

// innerHTML - includes HTML tags
console.log("\n=== Working with innerHTML ===");

let content = document.querySelector("#content");
if (content) {
    console.log("Original innerHTML:", content.innerHTML);
    
    // Modify innerHTML (watch out for security!)
    content.innerHTML = "<p>New paragraph <strong>important</strong></p>";
    console.log("Modified innerHTML:", content.innerHTML);
}

// Key difference between textContent and innerHTML
let example = document.querySelector("#example");
if (example) {
    example.innerHTML = "Text with <em>emphasis</em>";
    console.log("innerHTML:", example.innerHTML); // "Text with <em>emphasis</em>"
    console.log("textContent:", example.textContent); // "Text with emphasis"
}

// ===============================================
// 4. MANIPULATING ATTRIBUTES
// ===============================================

// getAttribute() - get value of an attribute
console.log("\n=== Working with attributes ===");

let link = document.querySelector("a");
if (link) {
    let href = link.getAttribute("href");
    let target = link.getAttribute("target");
    console.log("Link href:", href);
    console.log("Link target:", target);
}

// setAttribute() - modify or add attributes
let image = document.querySelector("img");
if (image) {
    image.setAttribute("src", "new-image.jpg");
    image.setAttribute("alt", "Image description");
    image.setAttribute("width", "300");
}

// Boolean attributes (checked, disabled, hidden)
let checkbox = document.querySelector("input[type='checkbox']");
if (checkbox) {
    checkbox.checked = true; // Check checkbox
    checkbox.disabled = false; // Enable
}

// ===============================================
// 5. MANIPULATING CSS CLASSES
// ===============================================
// classList is the modern way to work with classes

console.log("\n=== Working with classList ===");

let element = document.querySelector(".dynamic-element");
if (element) {
    // add() - add a class
    element.classList.add("new-class");
    console.log("Classes after add:", element.className);
    
    // remove() - remove a class
    element.classList.remove("old-class");
    
    // toggle() - add if adds, remove if exists
    element.classList.toggle("active"); // If not exists, adds it
    element.classList.toggle("active"); // Since exists, removes it
    
    // contains() - verify if a class exists
    let hasClass = element.classList.contains("important");
    console.log("Has class 'important'?:", hasClass);
    
    // replace() - replace one class with another
    element.classList.replace("old", "new");
}

// ===============================================
// 6. MANIPULATING CSS STYLES
// ===============================================

// style - modify CSS styles directly
console.log("\n=== Working with styles ===");

let box = document.querySelector(".box");
if (box) {
    // Modify individual CSS properties
    box.style.backgroundColor = "lightblue";
    box.style.fontSize = "18px";
    box.style.padding = "20px";
    box.style.borderRadius = "10px";
    
    // Important: CSS properties with hyphens become camelCase
    // CSS: background-color → JavaScript: backgroundColor
    // CSS: border-radius → JavaScript: borderRadius
    // CSS: margin-top → JavaScript: marginTop
}

// getComputedStyle() - get calculated styles
if (box) {
    let styles = window.getComputedStyle(box);
    let currentColor = styles.backgroundColor;
    let currentFontSize = styles.fontSize;
    console.log("Current background color:", currentColor);
    console.log("Current font size:", currentFontSize);
}

// ===============================================
// 7. CREATING AND REMOVING ELEMENTS
// ===============================================

// createElement() - create new elements
console.log("\n=== Creating elements ===");

// Create a new paragraph
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph";
newParagraph.classList.add("dynamic-paragraph");

// Create a new button
let newButton = document.createElement("button");
newButton.textContent = "Click here";
newButton.classList.add("btn", "btn-primary");

// appendChild() - add element to DOM
let container = document.querySelector("#container");
if (container) {
    container.appendChild(newParagraph);
    container.appendChild(newButton);
}

// insertAdjacentHTML() - insert HTML at specific positions
let section = document.querySelector("#section");
if (section) {
    // 'beforebegin' - Before the element
    // 'afterbegin' - Inside the element, at the beginning
    // 'beforeend' - Inside the element, at the end
    // 'afterend' - After the element
    
    section.insertAdjacentHTML('beforeend', '<div class="new">New element</div>');
}

// remove() - remove elements
let elementToRemove = document.querySelector(".remove");
if (elementToRemove) {
    elementToRemove.remove();
}

// ===============================================
// 8. TRAVERSING DOM ELEMENTS
// ===============================================

// Traverse a collection of elements
console.log("\n=== Traversing elements ===");

let allDivs = document.querySelectorAll("div");
allDivs.forEach((div, index) => {
    console.log(`Div ${index}:`, div.textContent);
    // We can modify each element
    div.style.border = "1px solid red";
});

// children - access direct children elements
let parent = document.querySelector(".parent");
if (parent) {
    let children = parent.children;
    console.log("Children of parent element:", children);
    
    for (let i = 0; i < children.length; i++) {
        console.log(`Child ${i}:`, children[i]);
    }
}

// parentElement - access parent element
let child = document.querySelector(".child");
if (child) {
    let parentElement = child.parentElement;
    console.log("Parent element:", parentElement);
}

// ===============================================
// 9. PRACTICAL EXAMPLES
// ===============================================

// Example 1: Character counter
function updateCounter() {
    let textarea = document.querySelector("#text");
    let counter = document.querySelector("#counter");
    
    if (textarea && counter) {
        let amount = textarea.value.length;
        counter.textContent = `${amount} characters`;
        
        if (amount > 100) {
            counter.style.color = "red";
        } else {
            counter.style.color = "green";
        }
    }
}

// Example 2: Change theme (light/dark)
function changeTheme() {
    let body = document.body;
    let button = document.querySelector("#btn-theme");
    
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        if (button) button.textContent = "Dark Theme";
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        if (button) button.textContent = "Light Theme";
    }
}

// Example 3: Real-time form validation
function validateEmail() {
    let input = document.querySelector("#email");
    let message = document.querySelector("#email-error");
    
    if (input && message) {
        let email = input.value;
        let validEmail = email.includes("@") && email.includes(".");
        
        if (validEmail) {
            input.classList.remove("invalid");
            input.classList.add("valid");
            message.textContent = "Valid Email";
            message.style.color = "green";
        } else {
            input.classList.remove("valid");
            input.classList.add("invalid");
            message.textContent = "Invalid Email";
            message.style.color = "red";
        }
    }
}

// ===============================================
// 10. BEST PRACTICES AND SECURITY
// ===============================================

// ✅ Best practices
// 1. Verify that the element exists before manipulating it
let safeElement = document.querySelector("#my-element");
if (safeElement) {
    safeElement.textContent = "Safe text";
}

// 2. Use textContent instead of innerHTML when possible
// textContent is safer against XSS attacks
if (safeElement) {
    safeElement.textContent = "<script>alert('hacked')</script>"; // Safe
    // safeElement.innerHTML = "<script>alert('hacked')</script>"; // Dangerous
}

// 3. Use CSS classes instead of inline styles
if (safeElement) {
    safeElement.classList.add("style-class"); // ✅ Better
    // safeElement.style.color = "red"; // ❌ Avoid if possible
}

// 4. Descriptive names for variables
let primaryButton = document.querySelector("#btn-primary"); // ✅ Clear
let b = document.querySelector("#btn"); // ❌ Confusing

// ❌ Bad practices to avoid
// 1. Not verifying if the element exists
// let nonexistent = document.querySelector("#not-exists");
// nonexistent.textContent = "This will error";

// 2. Using innerHTML with untrusted content
// let userInput = "<script>alert('XSS')</script>";
// element.innerHTML = userInput; // Dangerous!

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Select an element by its ID "main-title" and change its text to "New Title".

// 2. Select all paragraphs (<p>) of the page and change their background color to "yellow".

// 3. Select an element with class "box", add the class "highlight" and then remove it after 2 seconds (using setTimeout).

// 4. Create a new <div> element, assign it a text and a class, and add it to the end of the <body>.

// 5. Select an image by its ID and change its `src` attribute to a new URL.

// 6. Select a container by its ID and use `innerHTML` to add an unordered list (<ul>) with 3 elements (<li>).

// 7. Add a click event to a button so that when pressed it toggles the class "active".

// 8. Count how many elements have the class "important" and show the number in console.

console.log("\nEnd of session 09! Practice DOM at home!");

// ===============================================
// SESSION SUMMARY
// ===============================================
// Today we learned:
// • What is the DOM and how it represents our HTML page
// • Select elements with querySelector and querySelectorAll
// • Modify content with textContent and innerHTML
// • Manipulate attributes with getAttribute and setAttribute
// • Work with CSS classes using classList
// • Modify CSS styles with style property
// • Create, add, and remove DOM elements
// • Traverse element collections
// • Security and performance best practices

// Question for the class: When should you use textContent instead of innerHTML?
// Why is it important to verify if an element exists before manipulating it?