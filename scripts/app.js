const addTask = document.querySelector("#add-task-input");
const toDoContainer = document.querySelector(".todo-container");
const deleteButtons = document.querySelectorAll(".delete-button");

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
  toDoContainer.innerHTML = htmlTemplate;
}

createToDoList(toDoList);

function deleteItem(itemId) {
  toDoList = toDoList.filter((item) => item.id !== itemId);
  createToDoList();
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

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", () => {
    console.log("siema");
  });
});
