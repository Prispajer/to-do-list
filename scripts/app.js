const addTaskInput = document.querySelector("#add-task-input");
const todoContainer = document.querySelector(".todo-container");
const clearCompletedButton = document.querySelector(".status-clear");
const taskLeftContainer = document.querySelector(".items-left");
const statusButton = document.querySelectorAll(".status-button");

createToDoList(toDoList);

addTaskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem(addTaskInput.value);
    updateView("All");
    event.preventDefault();
  }
});

todoContainer.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");
  const checkbox = event.target.closest(".checkbox");
  const buttonText = getButtonText();

  if (deleteButton) {
    const taskId = parseInt(
      deleteButton.closest(".task").querySelector(".checkbox").dataset.taskId
    );
    if (!buttonText) {
      deleteTask(taskId);
      updateView();
    } else {
      statusButton.forEach((button) => {
        if (button.classList.contains("clicked")) {
          deleteTask(taskId);
          updateView();
        }
      });
    }
  }

  if (checkbox) {
    const toggleCheckbox = checkbox.closest(".task");
    const taskId = parseInt(
      checkbox.closest(".task").querySelector(".checkbox").dataset.taskId
    );
    if (toggleCheckbox) {
      if (!toggleCheckbox.classList.contains("checked")) {
        toggleCheckbox.classList.add("checked");
        setCompletedTask(taskId);
      } else {
        toggleCheckbox.classList.remove("checked");
        setActiveTask(taskId);
      }
      updateView();
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
