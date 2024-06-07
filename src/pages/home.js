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
import { displayRequiredResult, displaySearchResults, searchResultComponent } from "../components/searchResultsUI";
import { displaySearchFormUI, searchFormUI } from "../components/searchFormUI";
import { onListenUI, onVoiceSearchErrorUI, onVoiceSearchFinishUI, onVoiceSearchStartUI } from "../components/voiceSearchUI";
import { displayWordSearchErrorUI} from "../components/wordErrorUI";
import { displayTimeoutErrorUI } from "../components/timeoutErrorUI";
import { displayLoader } from "../components/loaderUI";
import { getSearchRequest } from "../features/search";
// HOME PAGE
export const homePage = document.createElement("section");
homePage.className = "home w-full h-[90%] md:h-full flex flex-col";
export function createHomeSection(){
  mainContainer.append(homePage);
}
// Landing Page
// landingPageUI(homePage)
// Voice Search Page
// onVoiceSearchStartUI(homePage)
// onListenUI(homePage);
// onVoiceSearchErrorUI(homePage);
// onVoiceSearchFinishUI();
// Search Page Component
displaySearchFormUI(homePage);
// Search Error Page
// displayWordSearchErrorUI(homePage)
// Timeout Error Page
// displayTimeoutErrorUI(homePage)
// Search Results Page
// displaySearchResults(homePage);
// Loading Page
// displayLoader()
displayRequiredResult(homePage)