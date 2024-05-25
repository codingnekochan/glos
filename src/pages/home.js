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
const searchBar = document.createElement("div");
searchBar.innerHTML = searchComponent;
searchBar.className = "home_search w-full";

export function displaySearchBar(){
  homePage.innerHTML = '';
  homePage.append(searchBar);
}
// Search Error Page
const searchErrorPage = document.createElement('div')
searchErrorPage.innerHTML = searchErrorMessage;
searchErrorPage.className =
  "home_error-page--result mx-auto mt-48 md:mt-[284px] lg:mt-[252px] xl:mt-[200px] 2xl:mt-[216px] text-center";

export function displaySearchErrorPage(){
  homePage.append(searchErrorPage)
}
// Timeout Error Page
const timeoutErrorPage = document.createElement('div');
timeoutErrorPage.innerHTML = timeoutErrorMessage;
timeoutErrorPage.className =
  "home_error-page--timeout mx-auto mt-48 md:mt-[284px] lg:mt-[252px] xl:mt-[200px] 2xl:mt-[216px] text-center text-[#545454] text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
  export function displayTimeoutErrorPage(){
  homePage.append(timeoutErrorPage)
  }