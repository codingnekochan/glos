/*
 This is the home page of Glos web app. The home page contains:
 landing page
 search page
 voice search page
 result page#
 error pages#
 */

import { landingPageUI } from "../components/landingPageUI";
import { displayRequiredResult } from "../components/searchResultsUI";
import {
  displaySearchFormUI,
  removeSuggestions,
  searchInput,
  searchForm,
  validationMessage,
} from "../components/searchFormUI";
import { onVoiceSearchCancel } from "../components/voiceSearchUI";
import { displayLoader } from "../components/loaderUI";
import { handleVoiceSearch, wordRecognition } from "../features/voiceSearch";
import { saveRecents } from "../features/storage";
// HOME PAGE
export const homePage = document.createElement("section");
homePage.className = "home w-full h-[90%] md:h-full flex flex-col";
homePage.id = "home";
export const homeContainer = document.createElement("section");
homeContainer.className = "home_container h-full";
homePage.append(homeContainer);
displaySearchFormUI(homePage, homeContainer);
// Landing Page
export function diplayHomePage(container) {
  container.innerHTML = ''
  container.append(homePage);
  // landingPageUI(homePage);
}

// Search Page Component
const voiceSearchButton = homePage.querySelector(".button_voice-search");
// Home Page EventListener
searchForm.addEventListener("submit", handleUserSearch);
voiceSearchButton.addEventListener("click", () => {
  homeContainer.innerHTML = "";
  handleVoiceSearch(homePage);
  const cancelButton = document.querySelector(".button_listening-cancel");
  cancelButton.addEventListener("click", () => {
    wordRecognition.abort();
    onVoiceSearchCancel(homePage);
  });
});

export function handleUserSearch(e, transcript) {
  e.preventDefault();
  removeSuggestions();
  const searchRequest = searchInput.value || transcript || "";
  console.log(searchRequest);
  if (searchRequest === "") {
    console.log("empty string");
    validationMessage.classList.remove("hidden");
    return;
  } else {
    saveRecents({word : searchRequest})
    document.querySelector(".validation-message").classList.add("hidden");
    homeContainer.innerHTML = "";
    displayLoader(homeContainer);
    setTimeout(() => {
      displayRequiredResult(homeContainer, searchRequest);
    }, 3000);
    console.log(searchRequest);
    searchInput.value = "";
  }
}
