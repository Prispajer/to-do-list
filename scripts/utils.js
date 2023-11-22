function CompletedTasks(array) {
  return array.filter((task) => task.completed);
}
function ActiveTasks(array) {
  return array.filter((task) => !task.completed);
}

function clearCompletedTasks(array) {
  return array.filter((task) => !task.completed);
}

function deleteTask(array, taskId) {
  return (toDoList = array.filter((task) => task.id !== taskId));
}

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
