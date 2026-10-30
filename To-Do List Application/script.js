
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const pendingCount = document.getElementById("pending-count");
const completedCount = document.getElementById("completed-count");
const message = document.getElementById("message");

function updateCounts() {
    const tasks = taskList.querySelectorAll("li");
    const completed = taskList.querySelectorAll("li.completed");

    pendingCount.textContent = tasks.length - completed.length;
    completedCount.textContent = completed.length;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        message.textContent = "Please enter a task!";
        taskInput.focus();
        return;
    }

    message.textContent = "";

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Mark task as completed");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.type = "button";

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounts();
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateCounts();
    });

    li.append(checkbox, span, deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    updateCounts();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
