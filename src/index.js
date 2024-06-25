import "./styles/main.css";
import "./styles/animation.css";
import { defaultTheme, toggleDarkMode } from "./features/themeSwitch";
import { defaultFonts, toggleFontChangeMenu } from "./features/fontChange";
import {
  handleNavigation,
  handlePopstate,
  initialState,
  updateContent,
} from "./features/router";
import { removeSearchFormUI } from "./components/searchFormUI";
document.addEventListener("DOMContentLoaded", () => {
  const htmlBody = document.querySelector("html");
  const mainContainer = document.querySelector("main");
  const themeSwitchButton = document.querySelector(".button_theme-switch");
  const fontChangeButton = document.querySelector(".button_font-change");
  const navigationButtons = document.querySelectorAll(".button_nav");
  const homeButton = document.getElementById('button_home');

  // default appearance of the app
  defaultTheme(htmlBody,navigationButtons);
  defaultFonts();
  initialState(mainContainer,homeButton);
  //  handles the buttons that allow users customise the app
  window.addEventListener("popstate", () => handlePopstate(mainContainer,navigationButtons));
  themeSwitchButton.addEventListener("click", () => toggleDarkMode(htmlBody,navigationButtons));
  fontChangeButton.addEventListener("click", toggleFontChangeMenu);
  navigationButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      homeButton.classList.remove('active')
      handleNavigation(e, mainContainer);
    });
  });

});
