/*
 This is the home page of Glos web app. The home page contains:
 landing page
 search page
 voice search page
 result page#
 error pages#
 */

import { landingPageUI,homeLanding} from "../components/landingPageUI";
import { displaySearchFormUI } from "../components/searchFormUI";
import { voiceSearchEvent } from "../components/searchFormUI";
// HOME PAGE
export const homePage = document.createElement("section");
homePage.className = "home w-full h-[90%] md:h-full flex flex-col";
homePage.id = "home";
export const homeContainer = document.createElement("section");
homeContainer.className = "home_container h-full";

// Landing Page
export function displayHomePage(container) {
  document.querySelector(".font-options").classList.add("hidden");
  homePage.innerHTML = ''
  container.innerHTML = ''
  homePage.append(homeContainer);
  landingPageUI(homeContainer);
  container.append(homePage);
  document.querySelector(".button_home").classList.add("active");

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