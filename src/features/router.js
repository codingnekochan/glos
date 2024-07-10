import { displayBookmarksPage } from "../pages/bookmark";
import { displayHomePage} from "../pages/home";
import { displayRecentPage } from "../pages/recent";


export function initialState(container){
    const initialPath = history.state;
    updateContent(null,container)
    console.log('path initialzed:'+ initialPath)

}

export function handlePopstate(container,buttons) {
  console.log("popstate");
  const path = history.state.path;
  console.log(path)
  updateContent(path, container);
  buttons.forEach(button => {
    console.log(button)
    if(button.getAttribute('data-page') === path){
     console.log('focused on'+ path);
    }
    else{
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
  if (path === "home") {
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
export function handleActivePage(pageID) {
 const buttons = document.querySelectorAll(".button_nav");
 buttons.forEach((button) => button.classList.remove("active"));
  // Cache the buttons
  const bookmarksButton = document.querySelector(".button_bookmarks");
  const recentsButton = document.querySelector(".button_recents");
  const homeButton = document.querySelector(".button_home");
  // Add 'active' class to the clicked button
  switch (pageID) {
    case "home":
      homeButton.classList.add("active");
      console.log('home active')
      break;
    case "recent":
      recentsButton.classList.add("active");
      console.log('recent active')
      break;
    case "bookmark":
      bookmarksButton.classList.add("active");
      console.log('bookmark active')
      break;
    default:
      homeButton.classList.add("active");
      console.log('default')
      break;
  }
}
