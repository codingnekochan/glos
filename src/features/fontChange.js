import { searchResultsUI } from "../components/searchResultsUI";
const fontFamilyList = document.querySelector(".font-list");
const fontApplied = document.querySelector(".font_applied");
const fontFamilyButtons = document.querySelectorAll(".font-family");
const userFontFamily = localStorage.getItem("fontFamily");
const fontUsed = localStorage.getItem("font");
let fontFamily = "Inter";
let font = "Sans Serif";
// font-changing buttons event listener
fontFamilyButtons.forEach((button) => {
  button.addEventListener("click", () => handleFontChange(button));
});

// default app font
export function defaultFonts() {
  if (!userFontFamily && !fontUsed) {
    fontApplied.textContent = "Sans Serif";
    searchResultsUI.style.fontFamily = "Inter";
  } else {
    fontApplied.textContent = fontUsed;
    searchResultsUI.style.fontFamily = userFontFamily;
  }
}
// open and close font-changing menu
export function toggleFontChangeMenu() {
  fontFamilyList.classList.toggle("hidden");
  fontFamilyList.classList.toggle("block");
}



function handleFontChange(button) {
  switch (button.dataset.font) {
    case "sans-serif":
      fontFamily = "Inter";
      font = "Sans Serif";
      searchResultsUI.style.fontFamily = fontFamily;
      fontApplied.textContent = font;
      fontFamilyList.classList.toggle("hidden");
      console.log("font changed");
      break;
    case "serif":
      fontFamily = "Libre Calson Text";
      font = "Serif";
      searchResultsUI.style.fontFamily = fontFamily;
      fontApplied.textContent = font;
      fontFamilyList.classList.toggle("hidden");
      console.log("font changed");

      break;
    case "mono-space":
      fontFamily = "Courier Prime";
      font = "Monospace";
      searchResultsUI.style.fontFamily = fontFamily;
      fontApplied.textContent = font;
      fontFamilyList.classList.toggle("hidden");
      console.log("font changed");

      break;
    default:
      searchResultsUI.style.fontFamily = userFontFamily;
      fontApplied.textContent = fontUsed;
  }
  localStorage.setItem("font", font);
  localStorage.setItem("fontFamily", fontFamily);
}
