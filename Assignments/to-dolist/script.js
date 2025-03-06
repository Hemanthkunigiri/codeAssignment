function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;

    // Create a new list item
    let li = document.createElement("li");
    li.textContent = taskValue; 

    // Create the delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        removeTask(this);
    };

    // Append button to the list item
    li.appendChild(deleteButton);

    // Append list item to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear input field
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
