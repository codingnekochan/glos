import { pageTemplateComponent } from "../components/templateUI";
import { clearRecents, displayRecentsList } from "../features/storage";

const recentsPage = document.createElement("section");
recentsPage.className = "recent mt-20 md:mt-36 xl:mt-16 2xl:mt-28";
recentsPage.id = "recent";
recentsPage.innerHTML = pageTemplateComponent;
const recentPageInfo = recentsPage.querySelector(".page_info");
export const recentPageCta = recentsPage.querySelector(".page_cta");
const recentClearAlert = recentsPage.querySelector(".clear_alert");
export const recentsList = recentsPage.querySelector(".page_list");
export const recentsContainer = recentsPage.querySelector(".words_container");
const recentsClearButton = recentsPage.querySelector(".clear_button");
const recentsModal = recentsPage.querySelector(".modal-box");
const cancelRecentClearButton = recentsPage.querySelector(".clear_cancel");
const clearRecentButton = recentsPage.querySelector(".button_clear");
recentPageInfo.textContent = `Your recently searched words will appear here!`;
recentPageCta.textContent = `You have have not search for any word yet! Click on the search option or voice recording to look up a word!`;
recentClearAlert.textContent = `Are you sure you want to clear your recent searches?`;
recentsClearButton.textContent = "Clear history?";
recentsClearButton.addEventListener("click", showRecentsModal);
cancelRecentClearButton.addEventListener("click", hideRecentsModal);
clearRecentButton.addEventListener("click", handleRecentsEvents);

export function displayRecentPage(container) {
  document.querySelector(".font-options").classList.add("hidden");
  // document.querySelector(".button_bookmark").classList.remove("active");
  // document.querySelector(".button_home").classList.remove("active");
  document.querySelector(".page-logo").classList.add("md:block");
  document.querySelector(".page-logo").classList.remove("md:hidden");
  document
    .querySelector(".nav-tab")
    .classList.remove("md:mt-[116px]", "xl:mt-[96px]");
  container.innerHTML = "";
  container.append(recentsPage);
  // document.querySelector(".button_recent").classList.add("active");
}
function showRecentsModal() {
  recentsModal.classList.remove("hidden");
  recentsModal.classList.add("flex");
}
function hideRecentsModal() {
  recentsModal.classList.add("hidden");
  recentsModal.classList.remove("flex");
}
function handleRecentsEvents() {
  clearRecents();
  hideRecentsModal();
  recentsContainer.classList.add("hidden");
  recentPageCta.textContent =
    "You have not search for any word yet! Click on the search option or voice recording to look up a word!";
}
displayRecentsList(recentsList, recentPageCta, recentsContainer);
