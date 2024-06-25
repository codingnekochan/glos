import { displayBookmarksPage } from "../pages/bookmark";
import { displayHomePage} from "../pages/home";
import { displayRecentPage } from "../pages/recent";


export function initialState(container,button){
    const initialPath = history.state;
    updateContent(null,container)
    button.focus()
    console.log('path initialzed:'+ initialPath)

}

export function handlePopstate(container,buttons) {
  console.log("popstate");
  const path = history.state.path;
  console.log(path)
  updateContent(path, container);
  buttons.forEach(button => {
    console.log(button)
    if(button.getAttribute('data-page') === path ||path==='home'){
     button.focus()
    }
  });
  console.log(history.state);
}

export function handleNavigation(e, container) {
  e.preventDefault();
  const path = e.currentTarget.getAttribute("data-page");
  history.pushState({ path }, path, path);
  console.log(history.state);
  console.log(history.state.path)
  updateContent(path, container);
}
export function updateContent(path, container) {
  if (path === "/" || path === "home") {
    displayHomePage(container);    
    console.log("Navigating to home page");
  } else {
    switch (path) {
      case "recents":
        displayRecentPage(container);
        console.log(path);
        break;
      case "bookmarks":
        displayBookmarksPage(container);
        console.log(path);
        break;
      default:
        displayHomePage(container);
        break;
    }
  }
}