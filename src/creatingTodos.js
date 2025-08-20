class Task {
    constructor(
        title,
        description,
        dueDate,
        priority = 'normal',
        checklist = [],
        category = 'General',
        completed = false,
        projectName = 'Default'
    ) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.category = category;
        this.completed = completed;
        this.projectName = projectName;
        this.createdAt = this.formatDate(new Date());
    }

    // Format date for createdAt
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    // Checklist methods
    addChecklistItem(item) {
        this.checklist.push(item);
    }

    removeChecklistItem(index) {
        if (index >= 0 && index < this.checklist.length) {
            this.checklist.splice(index, 1);
        }
    }

    // Display task as a string
    toString() {
        return `${this.title} (${this.projectName}) - Due: ${this.dueDate} - Priority: ${this.priority} - Created: ${this.createdAt} - Completed: ${this.completed}`;
    }
}
export function createTodo(title, description, dueDate, priority, category, projectName) {
    return new Task(title, description, dueDate, priority, [], category, false, projectName);
}

// Project Class
class Project {
    constructor(name = 'Default', todos = []) {
        this.name = name;
        this.todos = todos;
        this.createdAt = this.formatDate(new Date());
    }

    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    addTodo(task) {
        this.todos.push(task);
    }

    removeTodo(task) {
        this.todos = this.todos.filter(t => t !== task);
    }

    getTodosByPriority(priority) {
        return this.todos.filter(t => t.priority === priority);
    }

    getCompletedTodos() {
        return this.todos.filter(t => t.completed);
    }

    getPendingTodos() {
        return this.todos.filter(t => !t.completed);
    }
}
