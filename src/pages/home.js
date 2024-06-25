/*
 This is the home page of Glos web app. The home page contains:
 landing page
 search page
 voice search page
 result page#
 error pages#
 */

import { landingPageUI,homeLanding } from "../components/landingPageUI";
import {
  displaySearchFormUI,removeSearchFormUI
} from "../components/searchFormUI";

// HOME PAGE
export const homePage = document.createElement("section");
homePage.className = "home w-full h-[90%] md:h-full flex flex-col";
homePage.id = "home";
export const homeContainer = document.createElement("section");
homeContainer.className = "home_container h-full";
const homeButton = document.getElementById("button_home");
// Landing Page
export function displayHomePage(container) {
  homePage.innerHTML = ''
  container.innerHTML = ''
  homePage.append(homeContainer);
  landingPageUI(homeContainer);
  container.append(homePage);
}

// Search Page Component
const searchBar = homeLanding.querySelector(".search-bar");
searchBar.addEventListener("click", ()=>{displaySearchFormUI(homePage,homeContainer)
  homeButton.classList.add('active');
});