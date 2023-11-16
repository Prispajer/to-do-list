const statusButton = document.querySelectorAll(".status-button");

statusButton.forEach((button) => {
  button.addEventListener("click", () => {
    statusButton.forEach((active) => active.classList.remove("clicked"));
    button.classList.add("clicked");
  });
});
