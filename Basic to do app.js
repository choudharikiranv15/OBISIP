// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  taskInput.value = "";

  if (taskText !== "") {
    const task = {
      text: taskText,
      added: new Date(),
      completed: null
    };

    tasks.push(task);
    updateLists();
  }
}
