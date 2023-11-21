const statusButton = document.querySelectorAll(".status-button");

statusButton.forEach((button) => {
  button.addEventListener("click", () => {
    statusButton.forEach((active) => active.classList.remove("clicked"));
    button.classList.add("clicked");
    buttonText = button.textContent;

    if (buttonText == "All") {
      updateView(toDoList, buttonText);
    } else if (buttonText == "Active") {
      updateView(ActiveTasks(toDoList), buttonText);
    } else if (buttonText == "Completed") {
      updateView(CompletedTasks(toDoList), buttonText);
    }
  });
});
