import { pageTemplateComponent } from "../components/templateUI";
import { clearBookmarks, displayBookmarksList } from "../features/storage";

const bookmarksPage = document.createElement("section");
bookmarksPage.className = "bookmark md:h-full mt-20 md:mt-36 xl:mt-16 2xl:mt-28";
bookmarksPage.id = "bookmark";
bookmarksPage.innerHTML = pageTemplateComponent;
const bookmarksPageInfo = bookmarksPage.querySelector(".page_info");
export const bookmarksPageCta = bookmarksPage.querySelector(".page_cta");
const bookmarksClearAlert = bookmarksPage.querySelector(".clear_alert");
export const bookmarkList = bookmarksPage.querySelector(".page_list");
export const bookmarkContainer = bookmarksPage.querySelector('.words_container');
const bookmarkClearButton = bookmarksPage.querySelector('.clear_button');
const bookmarkModal = bookmarksPage.querySelector('.modal-box')
const cancelClearButton = bookmarksPage.querySelector('.clear_cancel');
const clearButton =  bookmarksPage.querySelector('.button_clear')
bookmarksPageInfo.textContent = `Your bookmarked words will appear here!`;
bookmarksPageCta.textContent = `You have not bookmarked any word yet! Click on the bookmark icon beside a word to bookmark and save for later!`;
bookmarksClearAlert.textContent = `Are you sure you want to clear all your bookmarked words?`;
bookmarkClearButton.textContent = 'Clear bookmarks?'
bookmarkClearButton.addEventListener('click',showBookmarkModal);
cancelClearButton.addEventListener('click', hideBookmarkModal);
clearButton.addEventListener('click', handleBookmarkEvents)
export function displayBookmarksPage(container) {
        document.querySelector(".font-options").classList.add("hidden");
  // document.querySelector(".button_recent").classList.remove("active");
  // document.querySelector(".button_home").classList.remove("active");
   document.querySelector(".page-logo").classList.add("md:block");
   document.querySelector(".page-logo").classList.remove("md:hidden");
   document
     .querySelector(".nav-tab")
     .classList.remove("md:mt-[116px]", "xl:mt-[96px]");
  container.innerHTML = "";
  container.append(bookmarksPage);
  // document.querySelector(".button_bookmark").classList.add("active");

}
function showBookmarkModal(){
bookmarkModal.classList.remove('hidden');
bookmarkModal.classList.add('flex');
}
function hideBookmarkModal(){
  bookmarkModal.classList.add("hidden");
  bookmarkModal.classList.remove("flex");
}
function handleBookmarkEvents(){
  clearBookmarks();
  hideBookmarkModal();
  bookmarkContainer.classList.add("hidden");
  bookmarksPageCta.textContent =
  "You have not bookmarked any word yet! Click on the bookmark icon beside a word to bookmark and save for later!";
}

displayBookmarksList(bookmarkList,bookmarksPageCta,bookmarkContainer);