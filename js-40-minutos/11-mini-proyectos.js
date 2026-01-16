// ===============================================
// SESSION 11 - Combined Mini Projects
// Duration: 40 minutes
// Objectives for today:
// • Apply everything learned in practical projects
// • Create an interactive counter
// • Build a functional traffic light
// • Develop a basic calculator
// • Combine DOM, events, and programming logic
// ===============================================

// ===============================================
// PROJECT 1: INTERACTIVE COUNTER
// ===============================================
// We will create a counter with buttons to add, subtract, and reset
// We will use variables, functions, events, and DOM manipulation

console.log("=== STARTING PROJECT 1: COUNTER ===");

// Counter variables
let project1Counter = 0;
let upperLimit = 100;
let lowerLimit = -100;

// DOM Elements
let displayCounter = document.querySelector("#display-counter");
let btnAdd = document.querySelector("#btn-add");
let btnSubtract = document.querySelector("#btn-subtract");
let btnReset = document.querySelector("#btn-reset");
let btnDouble = document.querySelector("#btn-double");

// Function to update the display
function updateCounterDisplay() {
    if (displayCounter) {
        displayCounter.textContent = project1Counter;
        
        // Change color based on value
        if (project1Counter > 50) {
            displayCounter.style.color = "red";
            displayCounter.style.fontSize = "24px";
        } else if (project1Counter < -50) {
            displayCounter.style.color = "blue";
            displayCounter.style.fontSize = "24px";
        } else if (project1Counter === 0) {
            displayCounter.style.color = "black";
            displayCounter.style.fontSize = "20px";
        } else {
            displayCounter.style.color = "green";
            displayCounter.style.fontSize = "20px";
        }
        
        // Disable buttons if limits are reached
        if (btnAdd) btnAdd.disabled = project1Counter >= upperLimit;
        if (btnSubtract) btnSubtract.disabled = project1Counter <= lowerLimit;
    }
}

// Function to add
function addCounter() {
    if (project1Counter < upperLimit) {
        project1Counter++;
        updateCounterDisplay();
        showMessage(`Counter: ${project1Counter}`, "success");
    } else {
        showMessage("Upper limit reached!", "error");
    }
}

// Function to subtract
function subtractCounter() {
    if (project1Counter > lowerLimit) {
        project1Counter--;
        updateCounterDisplay();
        showMessage(`Counter: ${project1Counter}`, "info");
    } else {
        showMessage("Lower limit reached!", "error");
    }
}

// Function to reset
function resetCounter() {
    project1Counter = 0;
    updateCounterDisplay();
    showMessage("Counter reset", "warning");
}

// Function to double
function doubleCounter() {
    let newValue = project1Counter * 2;
    if (newValue >= lowerLimit && newValue <= upperLimit) {
        project1Counter = newValue;
        updateCounterDisplay();
        showMessage(`Counter doubled: ${project1Counter}`, "success");
    } else {
        showMessage("Cannot double: exceeds limits", "error");
    }
}

// Add event listeners
if (btnAdd) btnAdd.addEventListener("click", addCounter);
if (btnSubtract) btnSubtract.addEventListener("click", subtractCounter);
if (btnReset) btnReset.addEventListener("click", resetCounter);
if (btnDouble) btnDouble.addEventListener("click", doubleCounter);

// Keyboard support
document.addEventListener("keydown", function(event) {
    if (event.key === "+" || event.key === "=") {
        addCounter();
    } else if (event.key === "-" || event.key === "_") {
        subtractCounter();
    } else if (event.key === "0") {
        resetCounter();
    } else if (event.key === "*") {
        doubleCounter();
    }
});

// Initialize display
updateCounterDisplay();

// ===============================================
// PROJECT 2: FUNCTIONAL TRAFFIC LIGHT
// ===============================================
// We will create a traffic light that changes colors automatically
// and also allows manual control

console.log("=== STARTING PROJECT 2: TRAFFIC LIGHT ===");

// Traffic light variables
let trafficLightColors = ["red", "yellow", "green"];
let currentTrafficLightIndex = 0;
let trafficLightInterval = null;
let isActive = false;

// DOM Elements
let redLight = document.querySelector("#red-light");
let yellowLight = document.querySelector("#yellow-light");
let greenLight = document.querySelector("#green-light");
let btnStartTrafficLight = document.querySelector("#btn-start-traffic-light");
let btnStopTrafficLight = document.querySelector("#btn-stop-traffic-light");
let btnNextLight = document.querySelector("#btn-next-light");
let trafficLightStatus = document.querySelector("#traffic-light-status");

// Function to update traffic light lights
function updateLights(activeColor) {
    // Turn off all lights
    if (redLight) redLight.classList.remove("active");
    if (yellowLight) yellowLight.classList.remove("active");
    if (greenLight) greenLight.classList.remove("active");
    
    // Turn on the active light
    switch (activeColor) {
        case "red":
            if (redLight) redLight.classList.add("active");
            break;
        case "yellow":
            if (yellowLight) yellowLight.classList.add("active");
            break;
        case "green":
            if (greenLight) greenLight.classList.add("active");
            break;
    }
    
    // Update status
    if (trafficLightStatus) {
        trafficLightStatus.textContent = `Status: ${activeColor.toUpperCase()}`;
        trafficLightStatus.style.color = activeColor;
    }
}

// Function to change to the next color
function nextColor() {
    currentTrafficLightIndex = (currentTrafficLightIndex + 1) % trafficLightColors.length;
    let currentColor = trafficLightColors[currentTrafficLightIndex];
    updateLights(currentColor);
    
    // Show message based on color
    let message = "";
    switch (currentColor) {
        case "red":
            message = "STOP! Stop completely";
            break;
        case "yellow":
            message = "CAUTION! Prepare to stop";
            break;
        case "green":
            message = "GO! You can pass";
            break;
    }
    showMessage(message, "info");
}

// Function to start automatic traffic light
function startTrafficLight() {
    if (!isActive) {
        isActive = true;
        showMessage("Traffic light started", "success");
        
        // Change every 2 seconds
        trafficLightInterval = setInterval(nextColor, 2000);
        
        // Disable start button
        if (btnStartTrafficLight) btnStartTrafficLight.disabled = true;
        if (btnStopTrafficLight) btnStopTrafficLight.disabled = false;
    }
}

// Function to stop traffic light
function stopTrafficLight() {
    if (isActive) {
        isActive = false;
        showMessage("Traffic light stopped", "warning");
        
        // Clear interval
        if (trafficLightInterval) {
            clearInterval(trafficLightInterval);
            trafficLightInterval = null;
        }
        
        // Enable start button
        if (btnStartTrafficLight) btnStartTrafficLight.disabled = false;
        if (btnStopTrafficLight) btnStopTrafficLight.disabled = true;
    }
}

// Add event listeners
if (btnStartTrafficLight) btnStartTrafficLight.addEventListener("click", startTrafficLight);
if (btnStopTrafficLight) btnStopTrafficLight.addEventListener("click", stopTrafficLight);
if (btnNextLight) btnNextLight.addEventListener("click", nextColor);

// Initialize traffic light in red
updateLights("red");

// ===============================================
// PROJECT 3: BASIC CALCULATOR
// ===============================================
// A calculator that performs basic operations
// with validation and error handling

console.log("=== STARTING PROJECT 3: CALCULATOR ===");

// Calculator variables
let currentOperation = "";
let previousNumber = null;
let newNumber = true;

// DOM Elements
let calculatorDisplay = document.querySelector("#calculator-display");
let btnNumbers = document.querySelectorAll(".btn-number");
let btnOperations = document.querySelectorAll(".btn-operation");
let btnEqual = document.querySelector("#btn-equal");
let btnClear = document.querySelector("#btn-clear");
let btnDelete = document.querySelector("#btn-delete");
let calculatorHistory = document.querySelector("#calculator-history");

let history = [];

// Function to update display
function updateDisplay(value) {
    if (calculatorDisplay) {
        calculatorDisplay.textContent = value;
    }
}

// Function to add number to display
function addNumber(number) {
    if (newNumber) {
        updateDisplay(number);
        newNumber = false;
    } else {
        let currentValue = calculatorDisplay.textContent;
        if (currentValue === "0") {
            updateDisplay(number);
        } else {
            updateDisplay(currentValue + number);
        }
    }
}

// Function to add decimal point
function addPoint() {
    let currentValue = calculatorDisplay.textContent;
    if (!currentValue.includes(".")) {
        updateDisplay(currentValue + ".");
        newNumber = false;
    }
}

// Function to select operation
function selectOperation(operation) {
    let currentValue = parseFloat(calculatorDisplay.textContent);
    
    if (previousNumber === null) {
        previousNumber = currentValue;
    } else if (currentOperation) {
        let result = calculate();
        updateDisplay(result);
        previousNumber = result;
    }
    
    currentOperation = operation;
    newNumber = true;
    
    // Show selected operation
    showMessage(`Operation: ${operation}`, "info");
}

// Function to calculate
function calculate() {
    let currentValue = parseFloat(calculatorDisplay.textContent);
    let result = 0;
    
    switch (currentOperation) {
        case "+":
            result = previousNumber + currentValue;
            break;
        case "-":
            result = previousNumber - currentValue;
            break;
        case "*":
            result = previousNumber * currentValue;
            break;
        case "/":
            if (currentValue === 0) {
                showMessage("Error: Division by zero", "error");
                return previousNumber;
            }
            result = previousNumber / currentValue;
            break;
        default:
            return currentValue;
    }
    
    // Add to history
    let completeOperation = `${previousNumber} ${currentOperation} ${currentValue} = ${result}`;
    history.push(completeOperation);
    updateHistory();
    
    return result;
}

// Function to show result
function showResult() {
    if (currentOperation && previousNumber !== null) {
        let result = calculate();
        updateDisplay(result);
        currentOperation = "";
        previousNumber = null;
        newNumber = true;
        showMessage(`Result: ${result}`, "success");
    }
}

// Function to clear calculator
function clearCalculator() {
    updateDisplay("0");
    currentOperation = "";
    previousNumber = null;
    newNumber = true;
    showMessage("Calculator cleared", "warning");
}

// Function to delete last digit
function deleteLast() {
    let currentValue = calculatorDisplay.textContent;
    if (currentValue.length > 1) {
        updateDisplay(currentValue.slice(0, -1));
    } else {
        updateDisplay("0");
        newNumber = true;
    }
}

// Function to update history
function updateHistory() {
    if (calculatorHistory) {
        calculatorHistory.innerHTML = "";
        history.slice(-5).reverse().forEach(operation => {
            let item = document.createElement("div");
            item.textContent = operation;
            item.classList.add("history-item");
            calculatorHistory.appendChild(item);
        });
    }
}

// Event listeners for numbers
btnNumbers.forEach(button => {
    button.addEventListener("click", function() {
        addNumber(this.textContent);
    });
});

// Event listener for decimal point
let btnPoint = document.querySelector("#btn-point");
if (btnPoint) {
    btnPoint.addEventListener("click", addPoint);
}

// Event listeners for operations
btnOperations.forEach(button => {
    button.addEventListener("click", function() {
        selectOperation(this.textContent);
    });
});

// Event listeners for control buttons
if (btnEqual) btnEqual.addEventListener("click", showResult);
if (btnClear) btnClear.addEventListener("click", clearCalculator);
if (btnDelete) btnDelete.addEventListener("click", deleteLast);

// Keyboard support
document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        addNumber(event.key);
    } else if (event.key === ".") {
        addPoint();
    } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        selectOperation(event.key);
    } else if (event.key === "Enter" || event.key === "=") {
        showResult();
    } else if (event.key === "Escape" || event.key === "c" || event.key === "C") {
        clearCalculator();
    } else if (event.key === "Backspace") {
        deleteLast();
    }
});

// ===============================================
// HELPER FUNCTION TO SHOW MESSAGES
// ===============================================

function showMessage(text, type = "info") {
    // Create message element
    let message = document.createElement("div");
    message.textContent = text;
    message.classList.add("message", `message-${type}`);
    
    // Styles based on type
    switch (type) {
        case "success":
            message.style.backgroundColor = "#d4edda";
            message.style.color = "#155724";
            break;
        case "error":
            message.style.backgroundColor = "#f8d7da";
            message.style.color = "#721c24";
            break;
        case "warning":
            message.style.backgroundColor = "#fff3cd";
            message.style.color = "#856404";
            break;
        case "info":
            message.style.backgroundColor = "#d1ecf1";
            message.style.color = "#0c5460";
            break;
    }
    
    // Common styles
    message.style.padding = "10px 15px";
    message.style.margin = "5px 0";
    message.style.borderRadius = "5px";
    message.style.border = "1px solid";
    message.style.position = "fixed";
    message.style.top = "20px";
    message.style.right = "20px";
    message.style.zIndex = "1000";
    message.style.maxWidth = "300px";
    message.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    message.style.transition = "opacity 0.3s";
    
    // Add to DOM
    document.body.appendChild(message);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 300);
    }, 3000);
}

// ===============================================
// INITIALIZATION OF ALL PROJECTS
// ===============================================

// Show welcome message
setTimeout(() => {
    showMessage("Mini projects ready to use!", "success");
}, 1000);

// ===============================================
// SESSION 11 - Combined Mini Projects
// ===============================================

// ... (Rest of explanations remain the same) ...

// ===============================================
// ADDITIONAL EXERCISES (No Solutions)
// ===============================================

// 1. Add a button and input to the counter to set a custom initial value.

// 2. Modify the traffic light to play a sound (or show a special console message) every time it changes color.

// 3. Add square root (√) and power (^2) functions to the calculator.

// 4. Implement a simple timer that counts down from 60 seconds and shows an alert when finished.

// 5. Add a simple CSS animation (like scale or rotate) to the counter buttons when clicked.

// 6. Create a small game where the user must guess a secret number between 1 and 100 generated randomly.

// 7. Implement a global button that changes the theme of the whole page (light mode / dark mode).

// 8. Create a simple task list (ToDo List) that allows adding tasks by typing in an input and pressing Enter.

console.log("\nEnd of session 11! You have built great things today!");


// ===============================================
// SESSION SUMMARY
// ===============================================
// Today we created three complete mini projects:
// • Interactive counter with limits and keyboard
// • Functional traffic light with manual and automatic control
// • Basic calculator with history and validation
// 
// We applied all learned concepts:
// • Variables and constants
// • Functions and parameters
// • Events and DOM manipulation
// • Conditionals and loops
// • Arrays and objects
// • Programming best practices

// Question for the class: What features would you add to these projects?
// How could you combine these projects into a larger one?