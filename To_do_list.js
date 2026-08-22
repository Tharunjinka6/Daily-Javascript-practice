// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('tasklist');

// Applying events
function inputchange() {
    console.log("something is being entered in the input");
}

// Event listener: Adding a new task
addTaskButton.addEventListener('click', () => {

    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');

    // Create a span to hold the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.color = "red";

    // Event listener: Deleting a task
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Append task text and delete button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
});