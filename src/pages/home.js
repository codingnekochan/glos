/*
 This is the home page of Glos web app. The home page contains:
 landing page
 search page
 voice search page
 result page#
 error pages#
 */
import { mainContainer } from "..";
import { landingPageUI} from "../components/landingPageUI";
import { displayRequiredResult} from "../components/searchResultsUI";
import { displaySearchFormUI, removeSuggestions } from "../components/searchFormUI";
import {onVoiceSearchCancel} from "../components/voiceSearchUI";
import { displayLoader } from "../components/loaderUI";
import { handleVoiceSearch, wordRecognition} from "../features/voiceSearch";
import { fetchWordSuggestions } from "../features/autocomplete";
// HOME PAGE
export const homePage = document.createElement("section");
homePage.className = "home w-full h-[90%] md:h-full flex flex-col";
homePage.id = 'home'
export const homeContainer = document.createElement('section');
homeContainer.className = 'home_container h-full'
homePage.append(homeContainer);
displaySearchFormUI(homePage,homeContainer);
// Landing Page
export function createHomeSection(){
  mainContainer.append(homePage);
  // landingPageUI(homePage);
}
// Search Page Component
export const searchFormInput = homePage.querySelector('#search_input');
export const searchForm = homePage.querySelector('#search_form');
const voiceSearchButton = homePage.querySelector("#button_voice-search");
// Home Page EventListener
searchForm.addEventListener('submit',handleUserSearch)
voiceSearchButton.addEventListener("click", () => {
  homeContainer.innerHTML = ''
  handleVoiceSearch(homePage);
  const cancelButton = document.querySelector(".button_listening-cancel");
  cancelButton.addEventListener("click", () => {
    wordRecognition.abort();
    onVoiceSearchCancel(homePage);
  });
});
export function handleUserSearch(e, transcript){
 e.preventDefault();
 removeSuggestions()
 const searchRequest = searchFormInput.value || transcript;
   if (searchRequest === ''){
  console.log('empty string')
   document.querySelector('.validation-message').classList.remove('hidden');
   return
   }
   else{
    document.querySelector(".validation-message").classList.add("hidden");
   homeContainer.innerHTML = "";
   displayLoader();
   setTimeout(() => {
     displayRequiredResult(homeContainer,searchRequest)
   }, 3000);
   console.log(searchRequest);
   searchFormInput.value = "";
 }
}

