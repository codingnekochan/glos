import { pageTemplateComponent } from "../components/templateUI";

const bookmarksPage = document.createElement("section");
bookmarksPage.className = "bookmark md:h-full mt-24 md:mt-36 xl:mt-28";
bookmarksPage.id = "bookmark";
bookmarksPage.innerHTML = pageTemplateComponent;
const bookmarksPageInfo = bookmarksPage.querySelector(".page_info");
const bookmarksPageCta = bookmarksPage.querySelector(".page_cta");
const bookmarksClearAlert = bookmarksPage.querySelector('.clear_alert');
const bookmarkList = bookmarksPage.querySelector('.page_list')
bookmarksPageInfo.textContent = `Your bookmarked words will appear here!`;
bookmarksPageCta.textContent = `You have not bookmarked any word yet! Click on the bookmark icon beside a word to bookmark and save for later!`;
bookmarksClearAlert.textContent = `Are you sure you want to clear all your bookmarked words?`;

export function displayBookmarksPage(container) {
  container.innerHTML = "";
  container.append(bookmarksPage);
}