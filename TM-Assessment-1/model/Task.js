
// data model

class Task {
    constructor(id, title, project, schedule, label, priority) {
        this.id = id;
        this.title = title;
        this.project = project;
        this.schedule = schedule;
        this.label = label;
        this.priority = priority;
    }
}

module.exports = Task
