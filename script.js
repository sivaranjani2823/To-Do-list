let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  let taskValue = taskInput.value;

  if (taskValue === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskValue;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
