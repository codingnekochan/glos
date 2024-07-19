const systemTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const userTheme = localStorage.getItem("theme");
let theme = "dark";
export function defaultTheme(page,buttons) {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    page.classList.remove("light");
    page.classList.add("dark");
    buttons.forEach(button => {
          button.classList.add("dark-theme");
    });
  } else {
    page.classList.remove("dark");
    page.classList.add("light");
  buttons.forEach((button) => {
    button.classList.remove("dark-theme");
  });  }
}
export function toggleDarkMode(page,buttons) {
  page.classList.toggle("dark");
  buttons.forEach((button) => {
    button.classList.toggle("dark-theme");
  });
    if (page.classList.contains("dark")) {
    theme = "dark";
  } else {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
}
