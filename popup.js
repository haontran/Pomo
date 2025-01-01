const taskInput = document.getElementById("task-input")
const addTaskBtn = document.getElementById("add-task-btn")
const deleteTaskBtn = document.getElementById("delete-task-btn")
const taskSection = document.querySelector(".task-section")

const taskList = document.querySelector(".task-list")

addTaskBtn.addEventListener("click", () => addTask())

function addTask() {
    const taskValue = taskInput.value.trim()
    if (taskValue) {
        const taskItem = document.createElement("li")
        const taskText = document.createElement("span")
        taskText.textContent = taskValue
    

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "X"
        deleteBtn.addEventListener("click", () => {
            taskItem.remove();
        })

        taskItem.appendChild(taskText)
        taskItem.appendChild(deleteBtn)
        taskList.appendChild(taskItem)

        taskInput.value = "";
    }
    else {
        alert("Enter a valid task")
    }
};

function createTaskElement(taskValue) {

}