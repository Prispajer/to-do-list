let toDoList = [
  {
    id: 1,
    name: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    name: "Jog around the park 3x",
    completed: true,
  },
  {
    id: 3,
    name: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    name: "Read for 1 hour",
    completed: false,
  },
  {
    id: 5,
    name: "Pick up groceries",
    completed: false,
  },
  {
    id: 6,
    name: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

function createToDoList(array) {
  buttonText = getButtonText();
  taskLeftText(buttonText);
  const htmlTemplate = `
    <ul class="todo-tasks">
        ${array
          .map(
            (task) => `
            <li class="task ${task.completed ? "checked" : ""}">
              <input class="checkbox" type="checkbox" data-task-id="${
                task.id
              }" ${task.completed ? "checked" : ""}/>
              <span>${task.name}</span>
              <button class="delete-button"></button>
            </li>
        `
          )
          .join("")}
    </ul>
  `;
  todoContainer.innerHTML = htmlTemplate;
  addTaskInput.value = "";
}

function updateView() {
  const buttonText = getButtonText();
  if (buttonText === "Active") {
    createToDoList(ActiveTasks());
  } else if (buttonText === "Completed") {
    createToDoList(CompletedTasks());
  } else createToDoList(toDoList);
}
