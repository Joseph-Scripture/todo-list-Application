const container = document.querySelector('.container');

class Task {
    constructor(title, description, due, priority, checklist, notes){
        this.title = title;
        this.description = description;
        this.due = due;
        this.priority = priority;
        this.checklist = checklist;
        this.notes = notes;
    }
}