// ===============================================
// SESSION 12 - localStorage and Fetch API
// Duration: 40 minutes
// Objectives for today:
// • Understand what localStorage is and how to save data in the browser
// • Learn to save, read, and delete data from localStorage
// • Master fetch API to make requests to servers
// • Work with JSON to exchange data
// ===============================================

// ===============================================
// 1. WHAT IS LOCALSTORAGE?
// ===============================================
// localStorage is like a small database in the user's browser
// Data persists even if the user closes the tab or browser
// It is useful for saving preferences, settings, user data, etc.

/*
localStorage features:
• Stores up to 5-10 MB of data (depends on browser)
• Data persists between sessions
• Only stores strings (not objects, arrays, numbers directly)
• It is specific to each domain (origin)
• It is synchronous (blocks the main thread)
*/

// ===============================================
// 2. SAVING DATA TO LOCALSTORAGE
// ===============================================

console.log("=== SAVING DATA TO LOCALSTORAGE ===");

// setItem() - save a piece of data
localStorage.setItem("userName", "Ana García");
localStorage.setItem("userAge", "25");
localStorage.setItem("userCity", "Madrid");

// Save complex data (convert to JSON)
let user = {
    id: 1,
    name: "Juan Pérez",
    email: "juan@email.com",
    preferences: {
        theme: "dark",
        language: "en",
        notifications: true
    }
};

// Convert object to JSON string before saving
localStorage.setItem("fullUser", JSON.stringify(user));

// Save arrays
let tasks = [
    { id: 1, text: "Learn JavaScript", completed: true },
    { id: 2, text: "Practice localStorage", completed: false },
    { id: 3, text: "Build an application", completed: false }
];

localStorage.setItem("tasks", JSON.stringify(tasks));

console.log("Data saved to localStorage");

// ===============================================
// 3. READING DATA FROM LOCALSTORAGE
// ===============================================

console.log("\n=== READING DATA FROM LOCALSTORAGE ===");

// getItem() - read a specific piece of data
let savedName = localStorage.getItem("userName");
let savedAge = localStorage.getItem("userAge");
let savedCity = localStorage.getItem("userCity");

console.log("Name:", savedName);
console.log("Age:", savedAge);
console.log("City:", savedCity);

// Read complex data (convert from JSON)
let savedUser = localStorage.getItem("fullUser");
if (savedUser) {
    let parsedUser = JSON.parse(savedUser);
    console.log("Full user:", parsedUser);
    console.log("User email:", parsedUser.email);
    console.log("Preferred theme:", parsedUser.preferences.theme);
}

// Read array of tasks
let savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
    let parsedTasks = JSON.parse(savedTasks);
    console.log("Tasks:", parsedTasks);
    console.log("Amount of tasks:", parsedTasks.length);
}

// Verify if data exists
let nonexistentData = localStorage.getItem("dataThatDoesNotExist");
console.log("Nonexistent data:", nonexistentData); // null

// Safe way to read data
function readLocalStorageData(key) {
    let data = localStorage.getItem(key);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (error) {
            return data; // If not JSON, return as string
        }
    }
    return null;
}

let safeUser = readLocalStorageData("fullUser");
console.log("User read safely:", safeUser);

// ===============================================
// 4. DELETING DATA FROM LOCALSTORAGE
// ===============================================

console.log("\n=== DELETING DATA FROM LOCALSTORAGE ===");

// removeItem() - delete a specific piece of data
localStorage.removeItem("userCity");
console.log("City deleted");

// clear() - delete ALL data from current domain
// WARNING! This removes all localStorage for the site
// localStorage.clear();
// console.log("All localStorage has been cleared");

// Verify what data remains
console.log("Current keys in localStorage:");
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

// ===============================================
// 5. INTRODUCTION TO FETCH API
// ===============================================
// Fetch is the modern way to make HTTP requests in JavaScript
// It allows us to communicate with servers and APIs

console.log("\n=== INTRODUCTION TO FETCH API ===");

// Basic GET request
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log("Response:", response);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);
        
        // Convert response to JSON
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
        console.log("User name:", data.name);
        console.log("Email:", data.email);
    })
    .catch(error => {
        console.error("Error in request:", error);
    });

// ===============================================
// 6. WORKING WITH JSON
// ===============================================
// JSON (JavaScript Object Notation) is the standard format for exchanging data

console.log("\n=== WORKING WITH JSON ===");

// Convert object to JSON (stringify)
let personJSON = {
    name: "Maria Lopez",
    age: 28,
    skills: ["JavaScript", "HTML", "CSS"],
    active: true
};

let personString = JSON.stringify(personJSON);
console.log("Object converted to JSON string:", personString);
console.log("Data type:", typeof personString);

// Convert JSON to object (parse)
let parsedPerson = JSON.parse(personString);
console.log("JSON converted to object:", parsedPerson);
console.log("Data type:", typeof parsedPerson);

// JSON with pretty print format
let prettyPersonString = JSON.stringify(personJSON, null, 2);
console.log("JSON with pretty format:");
console.log(prettyPersonString);

// ===============================================
// 7. POST REQUESTS WITH FETCH
// ===============================================
// POST is used to send data to the server (create new resources)

console.log("\n=== POST REQUESTS ===");

let newUser = {
    name: "Carlos Rodriguez",
    username: "carlosr",
    email: "carlos@email.com",
    address: {
        street: "Main Street",
        city: "Barcelona"
    }
};

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
})
.then(response => response.json())
.then(data => {
    console.log("User created:", data);
    console.log("Assigned ID:", data.id);
})
.catch(error => {
    console.error("Error creating user:", error);
});

// ===============================================
// 8. PUT AND DELETE REQUESTS
// ===============================================

// PUT - update an existing resource
console.log("\n=== PUT REQUESTS ===");

let updatedUser = {
    id: 1,
    name: "Ana Garcia Updated",
    email: "ana.new@email.com"
};

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser)
})
.then(response => response.json())
.then(data => {
    console.log("User updated:", data);
})
.catch(error => {
    console.error("Error updating user:", error);
});

// DELETE - delete a resource
console.log("\n=== DELETE REQUESTS ===");

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE"
})
.then(response => {
    console.log("Response DELETE:", response);
    if (response.ok) {
        console.log("User deleted successfully");
    }
})
.catch(error => {
    console.error("Error deleting user:", error);
});

// ===============================================
// 9. ERROR HANDLING AND STATES
// ===============================================

console.log("\n=== ERROR HANDLING AND STATES ===");

// Improved function to handle requests
async function makeRequest(url, options = {}) {
    try {
        console.log(`Making request to: ${url}`);
        
        let response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }
        
        let data = await response.json();
        console.log("Request successful:", data);
        return data;
        
    } catch (error) {
        console.error("Error in request:", error);
        
        // Save error to localStorage for analysis
        let errors = JSON.parse(localStorage.getItem("errors") || "[]");
        errors.push({
            timestamp: new Date().toISOString(),
            url: url,
            error: error.message
        });
        localStorage.setItem("errors", JSON.stringify(errors));
        
        throw error;
    }
}

// Use the improved function
makeRequest("https://jsonplaceholder.typicode.com/users")
    .then(users => {
        console.log("Users obtained:", users.length);
        
        // Save users to localStorage
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Users saved to localStorage");
    })
    .catch(error => {
        console.error("Could not obtain users");
    });

// ===============================================
// 10. PRACTICAL EXAMPLE: TASK MANAGER WITH PERSISTENCE
// ===============================================

console.log("\n=== TASK MANAGER WITH LOCALSTORAGE ===");

class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.nextId = this.getNextId();
    }
    
    // Load tasks from localStorage
    loadTasks() {
        let savedTasks = localStorage.getItem("tasksApp");
        return savedTasks ? JSON.parse(savedTasks) : [];
    }
    
    // Save tasks to localStorage
    saveTasks() {
        localStorage.setItem("tasksApp", JSON.stringify(this.tasks));
        console.log("Tasks saved to localStorage");
    }
    
    // Get next ID
    getNextId() {
        if (this.tasks.length === 0) return 1;
        return Math.max(...this.tasks.map(t => t.id)) + 1;
    }
    
    // Add new task
    addTask(text) {
        let newTask = {
            id: this.nextId++,
            text: text,
            completed: false,
            creationDate: new Date().toISOString(),
            completionDate: null
        };
        
        this.tasks.push(newTask);
        this.saveTasks();
        console.log("Task added:", newTask);
        return newTask;
    }
    
    // Mark task as completed
    completeTask(id) {
        let task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            task.completionDate = new Date().toISOString();
            this.saveTasks();
            console.log("Task completed:", task);
            return true;
        }
        return false;
    }
    
    // Delete task
    deleteTask(id) {
        let index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            let deletedTask = this.tasks.splice(index, 1)[0];
            this.saveTasks();
            console.log("Task deleted:", deletedTask);
            return deletedTask;
        }
        return null;
    }
    
    // Get statistics
    getStatistics() {
        let total = this.tasks.length;
        let completed = this.tasks.filter(t => t.completed).length;
        let pending = total - completed;
        
        return {
            total,
            completed,
            pending,
            completedPercentage: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }
    
    // Sync with server (simulated)
    async syncWithServer() {
        try {
            console.log("Syncing tasks with server...");
            
            // Simulate POST request to sync
            let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tasks: this.tasks,
                    timestamp: new Date().toISOString()
                })
            });
            
            if (response.ok) {
                let data = await response.json();
                console.log("Tasks synced:", data);
                
                // Save last sync timestamp
                localStorage.setItem("lastSync", new Date().toISOString());
                return true;
            }
            
        } catch (error) {
            console.error("Error syncing:", error);
            return false;
        }
    }
}

// Create instance of manager
let manager = new TaskManager();

// Usage examples
manager.addTask("Learn localStorage");
manager.addTask("Practice fetch API");
manager.addTask("Create full application");

let stats = manager.getStatistics();
console.log("Statistics:", stats);

// ===============================================
// 11. BEST PRACTICES
// ===============================================

console.log("\n=== BEST PRACTICES ===");

// ✅ Best practices with localStorage
// 1. Always check if data exists before using it
function getUser() {
    let user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

// 2. Use try-catch when parsing JSON
function getSafeData(key) {
    try {
        let data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Error parsing data:", error);
        return null;
    }
}

// 3. Clean old data periodically
function cleanOldData() {
    let timestamp = localStorage.getItem("lastSync");
    if (timestamp) {
        let date = new Date(timestamp);
        let now = new Date();
        let daysPassed = (now - date) / (1000 * 60 * 60 * 24);
        
        if (daysPassed > 30) {
            console.log("Cleaning old data...");
            // localStorage.removeItem("tempData");
        }
    }
}

// ✅ Best practices with fetch
// 1. Always handle errors
async function getSafeRequest(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// 2. Use timeouts to avoid infinite requests
function fetchWithTimeout(url, options = {}, timeout = 5000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Timeout")), timeout)
        )
    ]);
}

// 3. Cache responses to improve performance
let cacheMap = new Map();

async function getWithCache(url) {
    if (cacheMap.has(url)) {
        console.log("Data obtained from cache");
        return cacheMap.get(url);
    }
    
    try {
        let data = await getSafeRequest(url);
        cacheMap.set(url, data);
        return data;
    } catch (error) {
        console.error("Error obtaining data:", error);
        throw error;
    }
}

// ===============================================
// SESSION 12 - localStorage and Fetch API
// ===============================================

// ... (Rest of explanations remain the same) ...

// ===============================================
// EXERCISES (No Solutions)
// ===============================================

// 1. Create a `preferences` object with theme, language, and font, and save it to `localStorage` converted to JSON.

// 2. Read the `preferences` object from localStorage and show the language value in console.

// 3. Implement a "visits" counter that is saved in `localStorage`. Every time you run the code, it should increase.

// 4. Use `fetch` to get the list of users from "https://jsonplaceholder.typicode.com/users" and show the name of the first one.

// 5. Create two functions: `saveNote(text)` and `readNotes()`. Notes should be saved in an array in `localStorage`.

// 6. Simulate sending a registration form (name, email) using `fetch` with POST method to the JSONPlaceholder API.

// 7. Design a simple cache function that saves `fetch` responses in an object and reuses them if requested again in less than 5 minutes.

// 8. Write a function `checkConnection()` that attempts to make a fetch to an API. If it fails, save "offlineMode" in localStorage.

console.log("\nEnd of session 12! Persistence and Network mastered!");

// ===============================================
// SESSION SUMMARY
// ===============================================
// Today we learned:
// • What is localStorage and how to persist data in the browser
// • Save, read, and delete data with setItem, getItem, removeItem
// • Convert objects and arrays to JSON with stringify and parse
// • Use fetch API to make HTTP requests
// • Work with different methods: GET, POST, PUT, DELETE
// • Handle errors and states in asynchronous requests
// • Create applications with data persistence
// • Best practices for security and performance

// Question for the class: When would you use localStorage instead of a database?
// Why is it important to handle errors in fetch requests?