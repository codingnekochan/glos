const systemTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const userTheme = localStorage.getItem("theme");
let theme = "dark";
export function defaultTheme(page) {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    page.classList.remove("light");
    page.classList.add("dark");
    return;
  } else {
    page.classList.remove("dark");
    page.classList.add("light");
  }
}
export function toggleDarkMode(page) {
  page.classList.toggle("dark");
  if (page.classList.contains("dark")) {
    theme = "dark";
  } else {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
}
