const addTaskInput = document.querySelector("#add-task-input");
const todoContainer = document.querySelector(".todo-container");
const clearCompletedButton = document.querySelector(".status-clear");
const taskLeftContainer = document.querySelector(".items-left");
const statusButton = document.querySelectorAll(".status-button");
let completedTasks = [];

createToDoList();

addTaskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem(addTaskInput.value);
    updateView("All");
  }
});

todoContainer.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");

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
