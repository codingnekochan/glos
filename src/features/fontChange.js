import { searchResultsUI } from "../components/searchResultsUI";
const body = document.querySelector('body')
const fontFamilyList = document.querySelector(".font-list");
const fontApplied = document.querySelector(".font_applied");
const fontFamilyButtons = document.querySelectorAll(".font-family");
const userFontFamily = localStorage.getItem("fontFamily");
const fontUsed = localStorage.getItem("font");
const blurBackground = document.createElement('div')
blurBackground.className =
  "background-blur w-full h-full absolute top-0 left-0 bg-[#00000099] hidden z-10";
body.append(blurBackground)
let fontFamily;
let font;
// font-changing buttons event listener
fontFamilyButtons.forEach((button) => {
  button.addEventListener("click", () => handleFontChange(button));
});

// default app font && user preference'
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
  blurBackground.classList.toggle('hidden');
  
  closeFontDropDown()
}

function handleFontChange(button) {
  switch (button.dataset.font) {
    case "sans-serif":
      fontFamily = "Inter";
      font = "Sans Serif";
      searchResultsUI.style.fontFamily = fontFamily;
      fontApplied.textContent = font;
      fontFamilyList.classList.toggle("hidden");
      break;
    case "serif":
      fontFamily = "Libre Calson Text";
      font = "Serif";
      searchResultsUI.style.fontFamily = fontFamily;
      fontApplied.textContent = font;
      fontFamilyList.classList.toggle("hidden");
      break;
    case "mono-space":
      fontFamily = "Courier Prime";
      font = "Monospace";
      searchResultsUI.style.fontFamily = fontFamily;
      fontApplied.textContent = font;
      fontFamilyList.classList.toggle("hidden");
      break;
    default:
      searchResultsUI.style.fontFamily = userFontFamily;
      fontApplied.textContent = fontUsed;
  }
  localStorage.setItem("font", font);
  localStorage.setItem("fontFamily", fontFamily);
}

function closeFontDropDown(){
  const fontChangeButton = document.querySelector(".button_font-change");
  document.addEventListener("click", (e) => {
    if(e.target !== fontApplied && e.target !== fontChangeButton){
    fontFamilyList.classList.remove("block");
    fontFamilyList.classList.add("hidden");
    blurBackground.classList.add('hidden')
    }
  });
}
