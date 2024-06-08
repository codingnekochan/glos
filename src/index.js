console.log("Hi");
import { createHomeSection } from "./pages/home";
import "./styles/main.css";
import "./styles/animation.css";
import { defaultTheme, toggleDarkMode } from "./features/themeSwitch";
import { consoleResult, getSearchRequest} from "./features/search";
// import liststyle from './assets/book.svg'
const htmlBody = document.querySelector("html");
export const pageBody = document.querySelector("body");
export const mainContainer = document.querySelector("main");
const themeSwitchButton = document.querySelector('.button_theme-switch');

defaultTheme(htmlBody);
createHomeSection();
themeSwitchButton.addEventListener("click",()=> toggleDarkMode(htmlBody));