// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

//Repeat the same steps for task 3
const task3Title = prompt("Enter task 3 title:");
const task3Description = prompt("Enter task 3 description:");
let task3Status = prompt(
  "Enter task 3 status (todo, doing, done):"
).toLowerCase();

while (
  task3Status !== "todo" &&
  task3Status !== "doing" &&
  task3Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 3 status (todo, doing, done):"
  ).toLowerCase();
}
// Create an array to hold the tasks
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 4,
    title: task1Title,
    description: task1Description,
    status: task1Status,
  },
  {
    id: 5,
    title: task2Title,
    description: task2Description,
    status: task2Status,
  },
  { id: 6,
    title: task3Title,
    description: task3Description,
    status: task3Status,
  },


];

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// Check if task3 is done, and log it if so
if (task3Status === "done") {
  console.log("Title: " + task3Title + ", status: " + task3Status);
}

// If neither task1 nor task2 nor task3 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
//alert to tell users that they've reached limit of tasks
if (initialTasks.length >= 6) {
  alert("There are enough tasks on your board, please check them in the console.");
}

