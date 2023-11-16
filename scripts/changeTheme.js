const darkButton = document.querySelector(".darkButton");
const darkTheme = document.querySelector(".dark-theme");

darkButton.addEventListener("click", () => {
  const isDarkTheme = darkTheme.classList.contains("dark-theme");

  if (isDarkTheme) {
    darkTheme.classList.remove("dark-theme");
    darkTheme.classList.add("light-theme");
    darkButton.classList.remove("darkButton");
    darkButton.classList.add("lightButton");
  } else {
    darkTheme.classList.remove("light-theme");
    darkTheme.classList.add("dark-theme");
    darkButton.classList.remove("lightButton");
    darkButton.classList.add("darkButton");
  }
});
