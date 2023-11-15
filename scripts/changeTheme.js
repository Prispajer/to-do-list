const changeTheme = document.querySelector("#theme");

changeTheme.addEventListener("click", () => {
  document.body.classList.remove("theme-light", "theme-dark");
  document.body.classList.add(
    changeTheme.checked ? "theme-light" : "theme-dark"
  );
});
