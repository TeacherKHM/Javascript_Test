// ===============================================
// SESSION 13 - Final Project: Complete To-Do List
// Duration: 40 minutes
// Objectives for today:
// • Apply all concepts learned in a real project
// • Create a complete To-Do List application
// • Implement CRUD (Create, Read, Update, Delete)
// • Save data in localStorage for persistence
// ===============================================

// ===============================================
// FINAL PROJECT: COMPLETE TO-DO LIST
// ===============================================
// We are going to create a complete task management application with:
// • Add new tasks
// • Mark tasks as completed
// • Edit existing tasks
// • Delete tasks
// • Filter tasks (all, active, completed)
// • Save in localStorage
// • Statistics and counter
// • Animations and good UX

console.log("=== STARTING FINAL PROJECT: TO-DO LIST ===");

// ===============================================
// 1. DATA STRUCTURE AND STATE
// ===============================================

class TodoApp {
    constructor() {
        // Main application state
        this.tasks = this.loadTasks();
        this.currentFilter = "all"; // "all", "active", "completed"
        this.editingTaskId = null;
        
        // DOM Elements
        this.initializeElements();
        
        // Event listeners
        this.configureEventListeners();
        
        // Initial render
        this.render();
        this.updateStatistics();
        
        console.log("To-Do App initialized");
    }
    
    // ===============================================
    // 2. DATA MANAGEMENT (LOCALSTORAGE)
    // ===============================================
    
    loadTasks() {
        try {
            let savedTasks = localStorage.getItem("todoApp_tasks");
            return savedTasks ? JSON.parse(savedTasks) : [];
        } catch (error) {
            console.error("Error loading tasks:", error);
            return [];
        }
    }
    
    saveTasks() {
        try {
            localStorage.setItem("todoApp_tasks", JSON.stringify(this.tasks));
            console.log("Tasks saved to localStorage");
        } catch (error) {
            console.error("Error saving tasks:", error);
            this.showNotification("Error saving tasks", "error");
        }
    }
    
    // ===============================================
    // 3. DOM ELEMENT INITIALIZATION
    // ===============================================
    
    initializeElements() {
        // Form and input
        this.taskForm = document.querySelector("#form-task");
        this.taskInput = document.querySelector("#input-task");
        
        // Task list
        this.taskList = document.querySelector("#task-list");
        
        // Filters
        this.btnFilterAll = document.querySelector("#filter-all");
        this.btnFilterActive = document.querySelector("#filter-active");
        this.btnFilterCompleted = document.querySelector("#filter-completed");
        
        // General actions
        this.btnClearCompleted = document.querySelector("#clear-completed");
        this.btnMarkAll = document.querySelector("#mark-all");
        
        // Statistics
        this.totalCounter = document.querySelector("#counter-total");
        this.activeCounter = document.querySelector("#counter-active");
        this.completedCounter = document.querySelector("#counter-completed");
        
        // Notification container
        this.notificationContainer = document.querySelector("#notifications");
        
        console.log("DOM elements initialized");
    }
    
    // ===============================================
    // 4. EVENT LISTENER CONFIGURATION
    // ===============================================
    
    configureEventListeners() {
        // Form to add tasks
        if (this.taskForm) {
            this.taskForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.addTask();
            });
        }
        
        // Filters
        if (this.btnFilterAll) {
            this.btnFilterAll.addEventListener("click", () => {
                this.changeFilter("all");
            });
        }
        
        if (this.btnFilterActive) {
            this.btnFilterActive.addEventListener("click", () => {
                this.changeFilter("active");
            });
        }
        
        if (this.btnFilterCompleted) {
            this.btnFilterCompleted.addEventListener("click", () => {
                this.changeFilter("completed");
            });
        }
        
        // General actions
        if (this.btnClearCompleted) {
            this.btnClearCompleted.addEventListener("click", () => {
                this.clearCompletedTasks();
            });
        }
        
        if (this.btnMarkAll) {
            this.btnMarkAll.addEventListener("click", () => {
                this.markAllAsCompleted();
            });
        }
        
        // Keyboard shortcuts
        document.addEventListener("keydown", (e) => {
            // Ctrl/Cmd + Enter to add quick task
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                this.taskInput?.focus();
            }
            
            // Escape to cancel editing
            if (e.key === "Escape") {
                this.cancelEditing();
            }
        });
        
        console.log("Event listeners configured");
    }
    
    // ===============================================
    // 5. CRUD: CREATE TASKS
    // ===============================================
    
    addTask() {
        let text = this.taskInput?.value.trim();
        
        if (!text) {
            this.showNotification("Please write a task", "warning");
            return;
        }
        
        if (text.length < 3) {
            this.showNotification("Task must have at least 3 characters", "warning");
            return;
        }
        
        let newTask = {
            id: Date.now(),
            text: text,
            completed: false,
            creationDate: new Date().toISOString(),
            completionDate: null,
            priority: "normal" // "low", "normal", "high"
        };
        
        this.tasks.unshift(newTask); // Add to beginning
        this.saveTasks();
        this.render();
        this.updateStatistics();
        
        // Clear input
        if (this.taskInput) {
            this.taskInput.value = "";
            this.taskInput.focus();
        }
        
        this.showNotification("Task added successfully", "success");
        console.log("Task added:", newTask);
    }
    
    // ===============================================
    // 6. CRUD: READ AND FILTER TASKS
    // ===============================================
    
    getFilteredTasks() {
        switch (this.currentFilter) {
            case "active":
                return this.tasks.filter(task => !task.completed);
            case "completed":
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }
    
    // ===============================================
    // 7. CRUD: UPDATE TASKS
    // ===============================================
    
    toggleTask(id) {
        let task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completionDate = task.completed ? new Date().toISOString() : null;
            this.saveTasks();
            this.render();
            this.updateStatistics();
            
            let message = task.completed ? "Task completed" : "Task reactivated";
            this.showNotification(message, "info");
        }
    }
    
    editTask(id) {
        let task = this.tasks.find(t => t.id === id);
        if (!task) return;
        
        // If already editing another task, cancel first
        if (this.editingTaskId && this.editingTaskId !== id) {
            this.cancelEditing();
        }
        
        this.editingTaskId = id;
        this.render(); // Re-render to show edit input
        
        // Focus edit input
        setTimeout(() => {
            let editInput = document.querySelector(`#edit-${id}`);
            if (editInput) {
                editInput.focus();
                editInput.select();
            }
        }, 0);
    }
    
    saveEditing(id, newText) {
        let text = newText.trim();
        
        if (!text) {
            this.showNotification("Task cannot be empty", "error");
            return;
        }
        
        let task = this.tasks.find(t => t.id === id);
        if (task) {
            task.text = text;
            this.editingTaskId = null;
            this.saveTasks();
            this.render();
            this.showNotification("Task updated", "success");
        }
    }
    
    cancelEditing() {
        this.editingTaskId = null;
        this.render();
    }
    
    // ===============================================
    // 8. CRUD: DELETE TASKS
    // ===============================================
    
    deleteTask(id) {
        let index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            let deletedTask = this.tasks.splice(index, 1)[0];
            this.saveTasks();
            this.render();
            this.updateStatistics();
            this.showNotification("Task deleted", "warning");
            console.log("Task deleted:", deletedTask);
        }
    }
    
    clearCompletedTasks() {
        let completedTasks = this.tasks.filter(t => t.completed);
        
        if (completedTasks.length === 0) {
            this.showNotification("No completed tasks to clear", "info");
            return;
        }
        
        if (confirm(`Are you sure you want to delete ${completedTasks.length} completed task(s)?`)) {
            this.tasks = this.tasks.filter(t => !t.completed);
            this.saveTasks();
            this.render();
            this.updateStatistics();
            this.showNotification(`${completedTasks.length} task(s) deleted`, "success");
        }
    }
    
    // ===============================================
    // 9. ADDITIONAL FUNCTIONS
    // ===============================================
    
    changeFilter(filter) {
        this.currentFilter = filter;
        this.updateFilterButtons();
        this.render();
    }
    
    updateFilterButtons() {
        // Remove active class from all buttons
        [this.btnFilterAll, this.btnFilterActive, this.btnFilterCompleted].forEach(btn => {
            btn?.classList.remove("active");
        });
        
        // Add active class to current button
        switch (this.currentFilter) {
            case "active":
                this.btnFilterActive?.classList.add("active");
                break;
            case "completed":
                this.btnFilterCompleted?.classList.add("active");
                break;
            default:
                this.btnFilterAll?.classList.add("active");
        }
    }
    
    markAllAsCompleted() {
        let activeTasks = this.tasks.filter(t => !t.completed);
        
        if (activeTasks.length === 0) {
            // If all are completed, unmark all
            this.tasks.forEach(task => {
                task.completed = false;
                task.completionDate = null;
            });
            this.showNotification("All tasks reactivated", "info");
        } else {
            // Mark all as completed
            this.tasks.forEach(task => {
                if (!task.completed) {
                    task.completed = true;
                    task.completionDate = new Date().toISOString();
                }
            });
            this.showNotification(`${activeTasks.length} task(s) completed`, "success");
        }
        
        this.saveTasks();
        this.render();
        this.updateStatistics();
    }
    
    // ===============================================
    // 10. INTERFACE RENDERING
    // ===============================================
    
    render() {
        if (!this.taskList) return;
        
        let filteredTasks = this.getFilteredTasks();
        
        // Clear list
        this.taskList.innerHTML = "";
        
        if (filteredTasks.length === 0) {
            this.renderEmptyMessage();
            return;
        }
        
        // Render each task
        filteredTasks.forEach(task => {
            this.renderTask(task);
        });
    }
    
    renderTask(task) {
        let li = document.createElement("li");
        li.className = `task-item ${task.completed ? "completed" : ""}`;
        li.dataset.id = task.id;
        
        if (this.editingTaskId === task.id) {
            // Edit mode
            li.innerHTML = `
                <div class="task-edit">
                    <input type="text" 
                           id="edit-${task.id}" 
                           value="${this.escapeHtml(task.text)}"
                           class="input-edit">
                    <div class="buttons-edit">
                        <button class="btn-save" onclick="app.saveEditing(${task.id}, this.parentElement.previousElementSibling.value)">
                            ✓
                        </button>
                        <button class="btn-cancel" onclick="app.cancelEditing()">
                            ✕
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Normal mode
            li.innerHTML = `
                <div class="task-content">
                    <input type="checkbox" 
                           class="checkbox-task" 
                           ${task.completed ? "checked" : ""}
                           onchange="app.toggleTask(${task.id})">
                    <span class="task-text ${task.completed ? "strikethrough" : ""}">
                        ${this.escapeHtml(task.text)}
                    </span>
                    <span class="task-date">
                        ${this.formatDate(task.creationDate)}
                    </span>
                </div>
                <div class="task-actions">
                    <button class="btn-edit" onclick="app.editTask(${task.id})" title="Edit">
                        ✏️
                    </button>
                    <button class="btn-delete" onclick="app.deleteTask(${task.id})" title="Delete">
                        🗑️
                    </button>
                </div>
            `;
        }
        
        this.taskList.appendChild(li);
    }
    
    renderEmptyMessage() {
        let message = "";
        switch (this.currentFilter) {
            case "active":
                message = "🎉 No active tasks! All completed.";
                break;
            case "completed":
                message = "📝 No completed tasks yet.";
                break;
            default:
                message = "📋 No tasks. Add one to start!";
        }
        
        let li = document.createElement("li");
        li.className = "empty-message";
        li.innerHTML = `<p>${message}</p>`;
        this.taskList.appendChild(li);
    }
    
    // ===============================================
    // 11. STATISTICS
    // ===============================================
    
    updateStatistics() {
        let total = this.tasks.length;
        let completed = this.tasks.filter(t => t.completed).length;
        let active = total - completed;
        
        if (this.totalCounter) {
            this.totalCounter.textContent = total;
        }
        
        if (this.activeCounter) {
            this.activeCounter.textContent = active;
        }
        
        if (this.completedCounter) {
            this.completedCounter.textContent = completed;
        }
        
        // Update mark all button text
        if (this.btnMarkAll) {
            if (active === 0) {
                this.btnMarkAll.textContent = "Unmark all";
            } else {
                this.btnMarkAll.textContent = `Mark all (${active})`;
            }
        }
    }
    
    // ===============================================
    // 12. UTILITIES AND HELPER FUNCTIONS
    // ===============================================
    
    escapeHtml(text) {
        let div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }
    
    formatDate(dateISO) {
        let date = new Date(dateISO);
        let today = new Date();
        let daysDifference = Math.floor((today - date) / (1000 * 60 * 60 * 24));
        
        if (daysDifference === 0) {
            return "Today";
        } else if (daysDifference === 1) {
            return "Yesterday";
        } else if (daysDifference < 7) {
            return `${daysDifference} days ago`;
        } else {
            return date.toLocaleDateString("en-US");
        }
    }
    
    showNotification(message, type = "info") {
        if (!this.notificationContainer) return;
        
        let notification = document.createElement("div");
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Inline styles for simplicity
        Object.assign(notification.style, {
            padding: "12px 20px",
            margin: "5px 0",
            borderRadius: "8px",
            backgroundColor: this.getNotificationColor(type),
            color: "white",
            fontWeight: "500",
            opacity: "0",
            transform: "translateX(100%)",
            transition: "all 0.3s ease"
        });
        
        this.notificationContainer.appendChild(notification);
        
        // Entry animation
        setTimeout(() => {
            notification.style.opacity = "1";
            notification.style.transform = "translateX(0)";
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transform = "translateX(100%)";
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    getNotificationColor(type) {
        switch (type) {
            case "success": return "#28a745";
            case "error": return "#dc3545";
            case "warning": return "#ffc107";
            case "info": return "#17a2b8";
            default: return "#6c757d";
        }
    }
}

// ===============================================
// 13. APP INITIALIZATION
// ===============================================

// Global variable to access app from inline onclicks
let app;

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing To-Do App...");
    
    // Verify that necessary elements exist
    if (!document.querySelector("#task-list")) {
        console.error("Necessary elements for application not found");
        return;
    }
    
    // Create app instance
    app = new TodoApp();
    
    // Show welcome message
    setTimeout(() => {
        app.showNotification("To-Do List ready to use! 📝", "success");
    }, 500);
    
    console.log("To-Do App fully initialized");
});

// ===============================================
// 14. EXPORT FOR EXTERNAL USE (if needed)
// ===============================================

// If we are in a module environment
if (typeof module !== "undefined" && module.exports) {
    module.exports = TodoApp;
}

// ===============================================
// 15. ADDITIONAL FUNCTIONS TO EXTEND THE APP
// ===============================================

// Function to export/import tasks
function exportTasks() {
    if (!app) return;
    
    let data = {
        version: "1.0",
        exportDate: new Date().toISOString(),
        tasks: app.tasks
    };
    
    let json = JSON.stringify(data, null, 2);
    let blob = new Blob([json], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    
    let a = document.createElement("a");
    a.href = url;
    a.download = `tasks-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    app.showNotification("Tasks exported successfully", "success");
}

// Function to import tasks
function importTasks(file) {
    if (!app || !file) return;
    
    let reader = new FileReader();
    reader.onload = function(e) {
        try {
            let data = JSON.parse(e.target.result);
            
            if (data.tasks && Array.isArray(data.tasks)) {
                if (confirm(`Import ${data.tasks.length} tasks? This will replace current tasks.`)) {
                    app.tasks = data.tasks;
                    app.saveTasks();
                    app.render();
                    app.updateStatistics();
                    app.showNotification("Tasks imported successfully", "success");
                }
            } else {
                throw new Error("Invalid file format");
            }
        } catch (error) {
            app.showNotification("Error importing tasks: " + error.message, "error");
        }
    };
    
    reader.readAsText(file);
}

// ===============================================
// SESSION 13 - Final Project: Complete To-Do List
// ===============================================

// ... (Rest of explanations remain the same) ...

// ===============================================
// ADDITIONAL EXERCISES (No Solutions)
// ===============================================

// 1. Add priorities to tasks (high, medium, low) and show a visual indicator.

// 2. Implement real-time search that filters tasks by their text while typing.

// 3. Allow adding categories or tags to tasks (e.g. "Work", "Personal") and filter by them.

// 4. Implement a light/dark mode that persists in localStorage.

// 5. Add a smooth CSS animation when completing or deleting a task.

// 6. Create a reminder system that shows a warning if a task has a deadline approaching.

// 7. Show advanced statistics: % completed, average resolution time, tasks created today.

// 8. (Advanced) Implement real synchronization with an external API (simulated or real) to save tasks in the cloud.

console.log("\nCongratulations! You have completed the course. Keep building!");


// ===============================================
// FINAL PROJECT SUMMARY
// ===============================================
// We have created a complete To-Do List application with:
// • Full CRUD (Create, Read, Update, Delete)
// • Persistence with localStorage
// • Filtering system
// • Real-time statistics
// • Notification system
// • Inline task editing
// • Validation and error handling
// • Keyboard shortcuts
// • Animations and good UX
// • Modular and reusable code
// 
// We applied all course concepts:
// • Variables, functions, arrays, objects
// • DOM, events, HTML manipulation
// • localStorage for persistence
// • Programming best practices
// • Error handling and validations
// • Basic software architecture
// 
// Congratulations on completing the JavaScript course! 🎉