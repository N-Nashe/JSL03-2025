// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
}

// Repeat the same steps for task 3
const task3Title = prompt("Enter task 3 title:");
const task3Description = prompt("Enter task 3 description:");
let task3Status = prompt("Enter task 3 status (todo, doing, done):").toLowerCase();

while (
  task3Status !== "todo" &&
  task3Status !== "doing" &&
  task3Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task3Status = prompt("Enter task 3 status (todo, doing, done):").toLowerCase();
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
    description: "Gain practical experience and collaborate with others in the software development community",
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
  {
    id: 6,
    title: task3Title,
    description: task3Description,
    status: task3Status,
  },
];

// Find the highest current id in the initialTasks array
const getNextTaskId = () => {
  if (initialTasks.length === 0) return 1;
  return Math.max(...initialTasks.map(task => task.id)) + 1;
};

// Log all tasks title and status as objects in the array
const taskSummaries = initialTasks.map(task => ({
  title: task.title,
  description: task.description,
  status: task.status,
}));

console.log("All tasks:", taskSummaries);

// Array to hold tasks that are done
const doneTasks = initialTasks.filter(task => task.status === "done");

// Log the tasks that are done below the initial tasks
console.log("Tasks that are done:", doneTasks);

// If neither task1 nor task2 nor task3 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

// Alert to tell users that they've reached limit of tasks
if (initialTasks.length >= 3) {
  alert("There are enough tasks on your board, please check them in the console.");
}

