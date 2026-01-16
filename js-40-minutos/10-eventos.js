// ===============================================
// SESSION 10 - Events and Interactivity
// Duration: 40 minutes
// Objectives for today:
// • Understand what events are and how they work
// • Master addEventListener to respond to user actions
// • Learn the most common events: click, input, submit
// • Use the event object to get information about the event
// ===============================================

// ===============================================
// 1. WHAT ARE EVENTS?
// ===============================================
// Events are actions that occur on the web page
// They can be initiated by the user (click, keyboard) or by the browser (load)

/*
Common event types:
• Mouse: click, dblclick, mousedown, mouseup, mouseover, mouseout
• Keyboard: keydown, keyup, keypress
• Form: submit, change, input, focus, blur
• Window: load, resize, scroll
• Touch: touchstart, touchend, touchmove (mobile)
*/

// ===============================================
// 2. addEventListener - THE MODERN WAY
// ===============================================
// addEventListener is the recommended way to handle events
// Syntax: element.addEventListener('event', function);

console.log("=== Configuring events ===");

// Click event on a button
let clickButton = document.querySelector("#btn-click");
if (clickButton) {
    clickButton.addEventListener("click", function() {
        console.log("You clicked the button!");
        alert("Thanks for clicking");
    });
}

// Event with arrow function
let arrowButton = document.querySelector("#btn-arrow");
if (arrowButton) {
    arrowButton.addEventListener("click", () => {
        console.log("Click with arrow function");
        arrowButton.textContent = "Clicked!";
    });
}

// ===============================================
// 3. THE EVENT OBJECT
// ===============================================
// The event object contains information about the event that occurred

let infoButton = document.querySelector("#btn-info");
if (infoButton) {
    infoButton.addEventListener("click", function(event) {
        console.log("=== Event Information ===");
        console.log("Event type:", event.type); // "click"
        console.log("Element that triggered:", event.target); // The button
        console.log("X Position:", event.clientX); // Horizontal mouse position
        console.log("Y Position:", event.clientY); // Vertical mouse position
        console.log("With Ctrl?:", event.ctrlKey); // If Ctrl was pressed
        console.log("With Shift?:", event.shiftKey); // If Shift was pressed
        console.log("Timestamp:", event.timeStamp); // When it occurred
    });
}

// ===============================================
// 4. MOUSE EVENTS
// ===============================================

let mouseArea = document.querySelector("#area-mouse");
if (mouseArea) {
    // mouseover - when mouse enters the element
    mouseArea.addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightblue";
        this.textContent = "Mouse is INSIDE";
    });
    
    // mouseout - when mouse leaves the element
    mouseArea.addEventListener("mouseout", function() {
        this.style.backgroundColor = "lightgray";
        this.textContent = "Mouse is OUTSIDE";
    });
    
    // mousedown - when mouse button is pressed
    mouseArea.addEventListener("mousedown", function() {
        this.style.backgroundColor = "orange";
        console.log("Button pressed");
    });
    
    // mouseup - when mouse button is released
    mouseArea.addEventListener("mouseup", function() {
        this.style.backgroundColor = "lightgreen";
        console.log("Button released");
    });
    
    // dblclick - double click
    mouseArea.addEventListener("dblclick", function() {
        this.textContent = "Double click!";
        this.style.transform = "scale(1.2)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 300);
    });
}

// ===============================================
// 5. KEYBOARD EVENTS
// ===============================================

let keyboardInput = document.querySelector("#input-keyboard");
let keyboardResult = document.querySelector("#result-keyboard");

if (keyboardInput && keyboardResult) {
    // keydown - when a key is pressed
    keyboardInput.addEventListener("keydown", function(event) {
        console.log("Key pressed:", event.key);
        console.log("Key code:", event.code);
        
        // Detect specific keys
        if (event.key === "Enter") {
            console.log("You pressed Enter");
        }
        
        if (event.key === "Escape") {
            console.log("You pressed Escape");
            this.value = ""; // Clear input
        }
    });
    
    // keyup - when a key is released
    keyboardInput.addEventListener("keyup", function(event) {
        keyboardResult.textContent = `Current text: ${this.value}`;
    });
    
    // keypress - when a key that produces a character is pressed and released
    keyboardInput.addEventListener("keypress", function(event) {
        console.log("Character:", event.key);
    });
}

// Keyboard events on the entire document
document.addEventListener("keydown", function(event) {
    // Detect key combinations
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // Prevent default behavior (save)
        console.log("Ctrl+S detected - Custom save");
    }
    
    if (event.altKey && event.key === "Tab") {
        console.log("Alt+Tab detected");
    }
});

// ===============================================
// 6. FORM EVENTS
// ===============================================

// input event - triggered every time the value changes
let inputInput = document.querySelector("#input-input");
let inputCounter = document.querySelector("#counter-input");

if (inputInput && inputCounter) {
    inputInput.addEventListener("input", function() {
        let amount = this.value.length;
        inputCounter.textContent = `${amount} characters`;
        
        // Real-time validation
        if (amount > 20) {
            inputCounter.style.color = "red";
            this.classList.add("error");
        } else {
            inputCounter.style.color = "green";
            this.classList.remove("error");
        }
    });
}

// change event - triggered when element loses focus and changed
let selectChange = document.querySelector("#select-change");
let selectResult = document.querySelector("#result-select");

if (selectChange && selectResult) {
    selectChange.addEventListener("change", function() {
        selectResult.textContent = `You selected: ${this.value}`;
        console.log("Value changed to:", this.value);
    });
}

// focus event - when element receives focus
let inputFocus = document.querySelector("#input-focus");
if (inputFocus) {
    inputFocus.addEventListener("focus", function() {
        this.style.backgroundColor = "lightyellow";
        this.placeholder = "Type something...";
    });
}

// blur event - when element loses focus
if (inputFocus) {
    inputFocus.addEventListener("blur", function() {
        this.style.backgroundColor = "white";
        console.log("Final value:", this.value);
    });
}

// ===============================================
// 7. FORM SUBMIT EVENT
// ===============================================

let form = document.querySelector("#my-form");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting and reloading the page
        
        console.log("=== Form Data ===");
        
        // Get form data
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let age = document.querySelector("#age").value;
        
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Age:", age);
        
        // Validation
        if (!name || !email) {
            alert("Please fill in all fields");
            return;
        }
        
        if (!email.includes("@")) {
            alert("Invalid email");
            return;
        }
        
        // Show success message
        let successMessage = document.querySelector("#success-message");
        if (successMessage) {
            successMessage.textContent = `Form submitted successfully, ${name}!`;
            successMessage.style.color = "green";
            successMessage.style.display = "block";
        }
        
        // Clear form
        this.reset();
    });
}

// ===============================================
// 8. WINDOW EVENTS
// ===============================================

// load event - when page finishes loading
window.addEventListener("load", function() {
    console.log("Page fully loaded");
    
    // Show welcome message
    let welcome = document.querySelector("#welcome");
    if (welcome) {
        welcome.textContent = "Welcome to the page!";
        welcome.style.opacity = "0";
        welcome.style.transition = "opacity 1s";
        
        setTimeout(() => {
            welcome.style.opacity = "1";
        }, 100);
    }
});

// resize event - when window is resized
window.addEventListener("resize", function() {
    console.log("Window resized");
    console.log("Width:", window.innerWidth);
    console.log("Height:", window.innerHeight);
    
    let windowInfo = document.querySelector("#window-info");
    if (windowInfo) {
        windowInfo.textContent = `Window: ${window.innerWidth}x${window.innerHeight}`;
    }
});

// scroll event - when page is scrolled
window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    console.log("Scroll Y:", scrollY);
    
    // Change header style on scroll
    let header = document.querySelector("header");
    if (header) {
        if (scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});

// ===============================================
// 9. EVENT DELEGATION
// ===============================================
// Technique to handle events on multiple elements with a single listener

let delegationList = document.querySelector("#list-delegation");
if (delegationList) {
    // Add listener to parent instead of each child
    delegationList.addEventListener("click", function(event) {
        // Verify if click was on an <li> element
        if (event.target.tagName === "LI") {
            console.log("Clicked on:", event.target.textContent);
            
            // Highlight clicked element
            // First remove highlight from all
            let allLis = this.querySelectorAll("li");
            allLis.forEach(li => li.classList.remove("highlighted"));
            
            // Add highlight to clicked element
            event.target.classList.add("highlighted");
        }
    });
}

// ===============================================
// 10. REMOVING EVENT LISTENERS
// ===============================================

// To remove a listener, we need the same function
let removeButton = document.querySelector("#btn-remove");
let clickCounter = 0;

function myClickFunction() {
    clickCounter++;
    console.log("Click number:", clickCounter);
    
    if (clickCounter >= 3) {
        console.log("Removing event listener");
        removeButton.removeEventListener("click", myClickFunction);
        removeButton.textContent = "Listener removed";
        removeButton.disabled = true;
    }
}

if (removeButton) {
    removeButton.addEventListener("click", myClickFunction);
}

// ===============================================
// 11. PRACTICAL EXAMPLES
// ===============================================

// Example 1: Counter with buttons
let counter = 0;
let counterDisplay = document.querySelector("#display-counter");
let btnAdd = document.querySelector("#btn-add");
let btnSubtract = document.querySelector("#btn-subtract");
let btnReset = document.querySelector("#btn-reset");

function updateDisplay() {
    if (counterDisplay) {
        counterDisplay.textContent = counter;
        
        // Change color based on value
        if (counter > 0) {
            counterDisplay.style.color = "green";
        } else if (counter < 0) {
            counterDisplay.style.color = "red";
        } else {
            counterDisplay.style.color = "black";
        }
    }
}

if (btnAdd) {
    btnAdd.addEventListener("click", () => {
        counter++;
        updateDisplay();
    });
}

if (btnSubtract) {
    btnSubtract.addEventListener("click", () => {
        counter--;
        updateDisplay();
    });
}

if (btnReset) {
    btnReset.addEventListener("click", () => {
        counter = 0;
        updateDisplay();
    });
}

// Example 2: Change background color
let btnChangeColor = document.querySelector("#btn-change-color");
if (btnChangeColor) {
    btnChangeColor.addEventListener("click", function() {
        let colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        this.textContent = `Color: ${randomColor}`;
    });
}

// ===============================================
// 12. BEST PRACTICES
// ===============================================

// ✅ Best practices
// 1. Use addEventListener instead of onclick attributes
// button.onclick = function() { ... }; // ❌ Old way
// button.addEventListener("click", function() { ... }); // ✅ Modern way

// 2. Use named functions to be able to remove listeners
function handleClick() {
    console.log("Click handled");
}
// button.addEventListener("click", handleClick); // ✅ Can be removed
// button.addEventListener("click", function() { ... }); // ❌ Hard to remove

// 3. Use event.preventDefault() when necessary
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload
    });
}

// 4. Verify that elements exist before adding listeners
let element = document.querySelector("#my-element");
if (element) {
    element.addEventListener("click", handleClick);
}

// 5. Use event delegation for multiple similar elements
// Instead of adding listener to each <li>, add it to parent <ul>

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Add a `click` event to a button so that when pressed it changes its own text to "Clicked!".

// 2. Create an event in the document that shows in console the coordinates (x, y) where a click is made.

// 3. Create a text field (input) that shows in a paragraph what the user types in real-time (`input` event).

// 4. Detect when the user presses the "Enter" key in an input and show the value in console.

// 5. Change the background color of a `div` when hovering over it (`mouseover`) and restore it on exit (`mouseout`).

// 6. Intercept form submission (`submit`) to prevent page reload and show a message in console.

// 7. Create a counter (variable) that increases with each click on a button and show it on screen.

// 8. Use event delegation: add a single listener to a container to detect clicks on its child elements with class "item".

console.log("\nEnd of session 10! Let's practice events!");

// ===============================================
// SESSION SUMMARY
// ===============================================
// Today we learned:
// • What are events and how they work in JavaScript
// • Use addEventListener to respond to user actions
// • The event object and its useful information
// • Mouse, keyboard, and form events
// • Window events (load, resize, scroll)
// • Event delegation to handle multiple elements
// • How to remove event listeners
// • Best practices and security in event handling

// Question for the class: When would you use keydown instead of keyup?
// Why is it important to use event.preventDefault() in forms?