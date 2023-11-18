const addTask = document.querySelector("#add-task-input");
const todoContainer = document.querySelector(".todo-container");
const todoInput = document.querySelector(".todo-input");
const statusButtons = document.querySelectorAll(".status-button");

let toDoList = [
  {
    id: 1,
    name: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    name: "Jog around the park 3x",
    completed: false,
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

function createToDoList() {
  const htmlTemplate = `
  <ul class="todo-tasks">
      ${toDoList
        .map(
          (task) => `
          <li class="task ${task.completed ? "checked" : ""}">
            <input class="checkbox" type="checkbox" data-task-id="${task.id}" />
            <span>${task.name}</span>
            <button class="delete-button"></button>
          </li>
      `
        )
        .join("")}
  </ul>
    `;
  todoContainer.innerHTML = htmlTemplate;
  addTask.value = "";
}

function updateView(copyOfToDo) {
  const htmlTemplate = `
    <ul class="todo-tasks">
      ${copyOfToDo
        .map(
          (task) => `
            <li class="task ${task.completed ? "checked" : ""}">
              <input class="checkbox" type="checkbox" data-task-id="${
                task.id
              }" />
              <span>${task.name}</span>
              <button class="delete-button"></button>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
  todoContainer.innerHTML = htmlTemplate;
}

createToDoList(toDoList);

function deleteItem(itemId) {
  toDoList = toDoList.filter((item) => item.id !== itemId);
  createToDoList(toDoList);
}

function filterItems(itemId) {
  let copyOfToDo = [...toDoList];
  if (itemId) {
    copyOfToDo = copyOfToDo.filter((item) => item.id === itemId);
  }
  updateView(copyOfToDo);
}

function addItem(name) {
  let data;
  if (addTask.value) {
    data = {
      id: toDoList.length + 1,
      name: name,
      completed: false,
    };
  } else {
    return;
  }
  toDoList.push(data);
  createToDoList();
}

addTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem(addTask.value);
  }
});

todoContainer.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");
  const checkbox = event.target.closest("checkbox");

  if (deleteButton) {
    const itemId = deleteButton.parentElement
      .querySelector(".checkbox")
      .getAttribute("data-task-id");
    deleteItem(itemId);
  }
});

statusButtons.forEach((statusButton) => {
  statusButton.addEventListener("click", (event) => {
    const completeButton = event.target.getAttribute("data-completed");
    if (completeButton) {
      filterItems(completeButton);
    }
  });
});
