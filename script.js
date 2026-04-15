document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;
        span.classList.add("task-text");

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.classList.add("complete-btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        completeBtn.addEventListener("click", () => {
            li.classList.toggle("completed");

            if (li.classList.contains("completed")) {
                completeBtn.textContent = "↺";
            } else {
                completeBtn.textContent = "✔";
            }
        });

        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");

        btnGroup.appendChild(completeBtn);
        btnGroup.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnGroup);
        taskList.appendChild(li);

        taskInput.value = "";
    }
});