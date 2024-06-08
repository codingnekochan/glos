/*
 This is the home page of Glos web app. The home page contains:
 landing page
 search page
 voice search page
 result page
 error pages
 */
import { mainContainer } from "..";
import { landingPageUI} from "../components/landingPageUI";
import { displayRequiredResult} from "../components/searchResultsUI";
import { displaySearchFormUI } from "../components/searchFormUI";
import { onListenUI, onVoiceSearchErrorUI, onVoiceSearchFinishUI, onVoiceSearchStartUI } from "../components/voiceSearchUI";
import { displayWordSearchErrorUI} from "../components/wordErrorUI";
import { displayTimeoutErrorUI } from "../components/timeoutErrorUI";
import { displayLoader } from "../components/loaderUI";
// import { getSearchRequest } from "../features/search";
// HOME PAGE
export const homePage = document.createElement("section");
homePage.className = "home w-full h-[90%] md:h-full flex flex-col";
export const homeContainer = document.createElement('section');
homeContainer.className = 'home_container h-full border-4'
homePage.append(homeContainer);
displaySearchFormUI(homePage,homeContainer);
// Landing Page
export function createHomeSection(){
  mainContainer.append(homePage);
}
// landingPageUI(homePage);

// Voice Search Page
// onVoiceSearchStartUI(homePage)
// onListenUI(homePage);
// onVoiceSearchErrorUI(homePage);
// onVoiceSearchFinishUI();
// Search Page Component
const searchFormInput = homePage.querySelector('#search_input');
const searchForm = homePage.querySelector('#search_form');

searchForm.addEventListener('submit',handleUserSubmit)

function handleUserSubmit(e){
 e.preventDefault();
 const searchRequest = searchFormInput.value;
 if (searchRequest) {
   homeContainer.innerHTML = "";
   displayLoader();
   setTimeout(() => {
     displayRequiredResult(homeContainer,searchRequest);
   }, 3000);
   console.log(searchRequest);
   searchFormInput.value = "";
 }
}
// Search Results Page
// Loading Page
// displayLoader()
// displayRequiredResult(homePage)