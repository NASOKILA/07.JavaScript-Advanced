
class Task {

    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = "Open";
    }

    get deadline() {
        return this._deadline;
    }
    set deadline(newDeadline) {
        let today = Date.now();
        if (newDeadline < today)
            throw new Error("Cannot create a task, deadline is set to a past date.");

        this._deadline = newDeadline;
    }

    isOverdue() {
        let result = Date.now() > this._deadline && this.status !== "Complete";
        return result;
    }

    get rank() {
        if (this.isOverdue())
            return 0;
        else if (this.status === "In Progress")
            return 1;
        else if (this.status === "Open")
            return 2;
        else
            return 3;
    }

    static comparator(a, b) {

        let criteria = a.rank - b.rank;

        if (criteria === 0)
            return a.deadline - b.deadline;

        return criteria;
    }

    toString() {

        let statusIcon;

        if (this.isOverdue())
            statusIcon = "\u26A0";
        else if (this.status === "Open")
            statusIcon = "\u2731";
        else if (this.status === "In Progress")
            statusIcon = "\u219D";
        else if (this.status === "Complete")
            statusIcon = "\u2714";

        let result;

        if (this.status === "Complete")
            result = `[${statusIcon}] ${this.title}`;
        else if (this.isOverdue())
            result = `[${statusIcon}] ${this.title} (overdue)`;
        else
            result = `[${statusIcon}] ${this.title} (deadline: ${this.deadline.toString()})`;

        return result;
    }
}

let date1 = new Date();

date1.setDate(date1.getDate() + 7);

let task1 = new Task('JS Homework', date1);
let date2 = new Date();

date2.setFullYear(date2.getFullYear() + 1);

let task2 = new Task('Start career', date2);

console.log(task1 + '\n' + task2);

let date3 = new Date();

date3.setDate(date3.getDate() + 3);

let task3 = new Task('football', date3);
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());

task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";

let tasks = [task1, task2, task3, task4, task5];

setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); 