/*
 This is the home page of Glos web app. The home page contains:
 landing page
 search page
 voice search page
 result page#
 error pages#
 */

import { landingPageUI, homeLanding } from "../components/landingPageUI";
import { displaySearchFormUI,voiceSearchEvent } from "../components/searchFormUI";
import { displaySearchResults } from "../components/searchResultsUI";
import { handleActivePage } from "../features/router";
// HOME PAGE
export const homePage = document.createElement("section");
homePage.className = "home w-full h-[90%] md:h-full flex flex-col";
homePage.id = "home";
export const homeContainer = document.createElement("section");
homeContainer.className = "home_container h-full";

export function clearHomePage(container) {
  container.innerHTML = "";
  homePage.innerHTML = "";
  container.append(homePage);
  homePage.append(homeContainer);
}
// Landing Page
export function displayHomePage(container) {
  handleActivePage(homePage.id);
  clearHomePage(container);
  if (!localStorage.getItem("searchResults")) {
    document.querySelector(".font-options").classList.add("hidden");
    landingPageUI(homeContainer);
  } else {
    document.querySelector(".font-options").classList.remove("hidden")
    const searchResults = JSON.parse(localStorage.getItem("searchResults"));
    displaySearchFormUI(homePage, homeContainer);
    displaySearchResults(homeContainer, searchResults);
    console.log(localStorage.length);
  }
}
const textsearchButton = homeLanding.querySelector("#text-search-button");
const voiceSearchButton = homeLanding.querySelector("#voice-search-button");

textsearchButton.addEventListener("click", () => {
  displaySearchFormUI(homePage, homeContainer);
});
voiceSearchButton.addEventListener("click", () => {
  displaySearchFormUI(homePage, homeContainer);
  voiceSearchEvent();
});
