const addTask = document.querySelector("#add-task-input");
const todoContainer = document.querySelector(".todo-container");
const todoInput = document.querySelector(".todo-input");
const statusButtons = document.querySelectorAll(".status-button");
const clearCompleted = document.querySelector(".clear-task");
let completedTasks = [];

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

function createToDoList() {
  const htmlTemplate = `
    <ul class="todo-tasks">
        ${toDoList
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
  addTask.value = "";
}

function updateView(filteredTasks) {
  const htmlTemplate = `
      <ul class="todo-tasks">
        ${filteredTasks
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
  updateView(toDoList);
}

function filterTasks(array, isCompleted, isActive, allTasks) {
  if (isCompleted) {
    return array.filter((task) => task.completed);
  }
  if (isActive) {
    return array.filter((task) => !task.completed);
  }
  if (allTasks) {
    return array;
  }
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
  const targetCheckbox = event.target.closest(".checkbox");
  const deleteButton = event.target.closest(".delete-button");

  if (deleteButton) {
    const taskId = parseInt(
      deleteButton.closest(".task").querySelector(".checkbox").dataset.taskId
    );
    deleteItem(taskId);
  }
});

statusButtons.forEach((statusButton) => {
  statusButton.addEventListener("click", () => {
    const isCompleted = statusButton.classList.contains("Completed");
    const isActive = statusButton.classList.contains("Active");
    const allTasks = statusButton.classList.contains("All");
    const filteredTasks = filterTasks(
      toDoList,
      isCompleted,
      isActive,
      allTasks
    );
    if (allTasks) {
      updateView(toDoList);
    } else {
      updateView(filteredTasks);
    }
  });
});

clearCompleted.addEventListener("click", () => {
  if (toDoList) {
    toDoList = toDoList.filter((task) => !task.completed);
    updateView(completedTasks);
  } else {
    updateView(toDoList);
  }
});
