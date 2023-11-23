const addTaskInput = document.querySelector("#add-task-input");
const todoContainer = document.querySelector(".todo-container");
const clearCompletedButton = document.querySelector(".status-clear");
const taskLeftContainer = document.querySelector(".items-left");
const statusButton = document.querySelectorAll(".status-button");
let completedTasks = [];

createToDoList();

addTaskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addItem(addTaskInput.value);
    updateView("All");
  }
});

todoContainer.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");
  const checkbox = event.target.closest(".checkbox");

  if (deleteButton) {
    const taskId = parseInt(
      deleteButton.closest(".task").querySelector(".checkbox").dataset.taskId
    );
    const buttonText = getButtonText();
    if (!buttonText) {
      deleteTask(toDoList, taskId);
      updateView();
    } else {
      statusButton.forEach((button) => {
        if (button.classList.contains("clicked")) {
          deleteTask(toDoList, taskId);
          updateView();
        }
      });
    }
  }

  if (checkbox) {
    const toggleCheckbox = checkbox.closest(".task");

    if (toggleCheckbox) {
      if (!toggleCheckbox.classList.contains("checked")) {
        toggleCheckbox.classList.add("checked");
      } else {
        toggleCheckbox.classList.remove("checked");
      }
    }
  }
});

statusButton.forEach((button) => {
  button.addEventListener("click", () => {
    statusButton.forEach((active) => active.classList.remove("clicked"));
    button.classList.add("clicked");
    updateView();
  });
});

clearCompletedButton.addEventListener("click", () => {
  toDoList = clearCompletedTasks(toDoList);
  updateView();
});
