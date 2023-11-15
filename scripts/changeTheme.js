const changeThemeButton = document.querySelector(".changeThemeButton");

changeThemeButton.addEventListener("click", () => {
  const body = document.body;
  const isDarkTheme = body.classList.contains("dark-theme");

  if (isDarkTheme) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
});
