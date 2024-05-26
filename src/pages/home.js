/*
 This is the home page of Glos web app. The home page contains:
 landing page
 search page
 voice search page
 result page
 error pages
 */
import { mainContainer } from "..";
import { landingPage } from "../components/landing";
import { pulseMic } from "../components/pulse";
import { searchResultComponent } from "../components/results";
import { searchComponent } from "../components/search";
import { timeoutErrorMessage } from "../components/timeout";
import { searchErrorMessage } from "../components/wordError";
// HOME PAGE
export const homePage = document.createElement("section");
homePage.className = "home w-full h-[90%] md:h-full flex flex-col";
export function createHomeSection(){
  mainContainer.append(homePage);
}
// Landing Page
const homeLanding = document.createElement("div");
homeLanding.innerHTML = landingPage;
homeLanding.className =
  "home_landing h-full w-full flex justify-center items-center";

export function appendLandingPage() {
  homePage.innerHTML = "";
  homePage.append(homeLanding);
}
export function removeLandingPage() {
  homeLanding.remove();
}
// Voice Search Page
const userMic = document.createElement("div");
userMic.className =
  "home_listening w-full h-full flex flex-col justify-center items-center";
userMic.innerHTML = pulseMic;
export function showMic() {
  document.querySelector(".button_theme-switch").classList.add("hidden");
  homePage.innerHTML = "";
  homePage.append(userMic);
}
export function animateMic() {
  userMic.querySelectorAll("circle").forEach((circle) => {
    circle.classList.add("animate-pulse");
  });
  document.querySelector(".listening_page--text").textContent = "Listening...";
}
export function removeMic() {
  document.querySelector(".button_theme-switch").classList.remove("hidden");
  userMic.remove();
}
export function listeningError() {
  userMic.querySelectorAll('circle').forEach((circle)=>{
    circle.classList.remove('animate-pulse');
  })
  document.querySelector(".listening_page--text").textContent =
    "Sorry, didn’t get that.";
}
// Search Page Component
const searchBar = document.createElement("section");
searchBar.innerHTML = searchComponent;
searchBar.className = "home_search-form w-full mt-6 md:mt-0";

export function displaySearchBar(){
  homePage.innerHTML = '';
  homePage.append(searchBar);
}
// Search Error Page
const searchErrorPage = document.createElement('div')
searchErrorPage.innerHTML = searchErrorMessage;
searchErrorPage.className =
  "home_error-page--result mx-auto relative top-[30%] md:top-[25%]  text-center";

export function displaySearchErrorPage(){
  homePage.append(searchErrorPage)
}
// Timeout Error Page
const timeoutErrorPage = document.createElement('div');
timeoutErrorPage.innerHTML = timeoutErrorMessage;
timeoutErrorPage.className =
  "home_error-page--timeout mx-auto relative top-[30%] md:top-[25%] text-center text-[#545454] text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
  export function displayTimeoutErrorPage(){
  homePage.append(timeoutErrorPage)
  }

// Search Results Page
const searchResultsPage = document.createElement('section');
searchResultsPage.className =
  "word_results-container md:h-full lg:h-[55%] xl:h-full home_results px-6 pb-10 lg:pb-0 xl:pb-14 2xl:pb-24 md:pl-12 lg:pl-24 md:pr-14 mt-4 md:mt-8 xl:mt-9 grid grid-cols-4 grid-rows-5 gap-4 lg:grid-cols-5 lg:grid-rows-4 lg:gap-6";
searchResultsPage.innerHTML = searchResultComponent;
export function displaySearchResults(){
  homePage.append(searchResultsPage)
}