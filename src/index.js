console.log("Hi");
import { diplayHomePage } from "./pages/home";
import "./styles/main.css";
import "./styles/animation.css";
import { defaultTheme, toggleDarkMode } from "./features/themeSwitch";
import { defaultFonts, toggleFontChangeMenu } from "./features/fontChange";
import { displayRecentPage } from "./pages/recent";
import { displayBookmarksPage } from "./pages/bookmark";

const htmlBody = document.querySelector("html");
const mainContainer = document.querySelector("main");
const themeSwitchButton = document.querySelector('.button_theme-switch');
const fontChangeButton = document.querySelector('.button_font-change');
// default appearance of the app
defaultTheme(htmlBody);
defaultFonts()
// Home Page
 diplayHomePage(mainContainer);
// Recent Page
displayRecentPage(mainContainer)
//Bookmarks Page
displayBookmarksPage(mainContainer)
//  handles the buttons that allow users customise the app
themeSwitchButton.addEventListener("click",()=> toggleDarkMode(htmlBody));
fontChangeButton.addEventListener('click', toggleFontChangeMenu);
