function addItem(name) {
  let data;
  if (addTaskInput.value) {
    data = {
      id: toDoList.length + 1,
      name: name,
      completed: false,
    };
  } else {
    return;
  }
  toDoList.push(data);
}

function ActiveTasks() {
  return toDoList.filter((task) => !task.completed);
}

function CompletedTasks() {
  return toDoList.filter((task) => task.completed);
}

function setActiveTask(taskId) {
  let task = toDoList.find((task) => task.id === taskId);
  task.completed = false;
}

function setCompletedTask(taskId) {
  let task = toDoList.find((task) => task.id === taskId);
  task.completed = true;
}

function deleteTask(taskId) {
  return (toDoList = toDoList.filter((task) => task.id !== taskId));
}

function clearCompletedTasks() {
  return toDoList.filter((task) => !task.completed);
}

function getButtonText() {
  let buttonText;
  statusButton.forEach((button) => {
    if (button.classList.contains("clicked")) {
      buttonText = button.textContent;
    }
  });
  return buttonText;
}

function taskLeftText(buttonText) {
  const itemCount = document.createElement("p");
  const itemsCompleted = toDoList.filter((task) => task.completed).length;
  const listSize = toDoList.length;

  if (buttonText === "All") {
    itemCount.textContent = `${listSize} left`;
  } else if (buttonText === "Active") {
    itemCount.textContent = `${listSize - itemsCompleted} active`;
  } else if (buttonText === "Completed") {
    itemCount.textContent = `${itemsCompleted} completed`;
  } else itemCount.textContent = `${listSize} left`;

  taskLeftContainer.innerHTML = "";
  taskLeftContainer.appendChild(itemCount);
}
