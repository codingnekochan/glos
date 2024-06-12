import { getSearchRequest } from "../features/search";
import { displayWordSearchErrorUI } from "./wordErrorUI";
import { displayTimeoutErrorUI } from "./timeoutErrorUI";
import { displaySearchedWord, displayDefinitionsList } from "../features/resultsDisplayHandler";

const searchResultComponent = `<div
            class="word_results h-full overflow-auto p-6 lg:p-10 lg:mx-4 col-span-full row-span-3 xl:col-span-3 xl:row-span-full rounded-[20px] shadow-[5px_5px_4px_0_rgba(255,209,225,0.5)] dark:shadow-[2px_2px_4px_0_rgba(255,209,225,0.5)] border-[#FFD1E140] border"
          >
            <div
              class="searched-word flex max-[375px]:justify-between max-[37px]:gap-0 max-[375px]:flex-wrap justify-start gap-3 items-center px-2 mb-6 border-b-2 border-black dark:border-white dark:text-[#F8E9EE] pb-2 xl:pb-3"
            >
              <span
                class="entry-word font-['Oswald'] text-xl mr-3 md:text-2xl xl:text-3xl 2xl:text-[40px]"
                ></span
              >
              <span
                class="pronunciation-key text-sm md:text-base lg:text-lg xl:text-xl 2xl:2xl"
                ></span
              >
              <button class="play-audio relative">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-[#B81E53] dark:fill-[#CF688C]"
                    d="M13 1.24951C13 0.170889 11.7255 -0.40134 10.9195 0.31534L6.42794 4.30861C6.29065 4.43067 6.11333 4.4981 5.92961 4.4981H2.25C1.00736 4.4981 0 5.50546 0 6.7481V11.246C0 12.4886 1.00736 13.496 2.25 13.496H5.92956C6.11329 13.496 6.29063 13.5634 6.42793 13.6855L10.9194 17.6792C11.7255 18.396 13 17.8238 13 16.7451V1.24951ZM7.4246 5.42962L11.5 1.8063V16.1883L7.42465 12.5646C7.01275 12.1983 6.48074 11.996 5.92956 11.996H2.25C1.83579 11.996 1.5 11.6602 1.5 11.246V6.7481C1.5 6.33388 1.83579 5.9981 2.25 5.9981H5.92961C6.48075 5.9981 7.01272 5.79581 7.4246 5.42962ZM16.9916 2.89684C17.3244 2.6503 17.7941 2.72028 18.0407 3.05313C19.2717 4.71521 20 6.77341 20 8.9995C20 11.2256 19.2717 13.2838 18.0407 14.9459C17.7941 15.2788 17.3244 15.3488 16.9916 15.1022C16.6587 14.8557 16.5888 14.386 16.8353 14.0531C17.8815 12.6406 18.5 10.8934 18.5 8.9995C18.5 7.1057 17.8815 5.35848 16.8353 3.94592C16.5888 3.61307 16.6587 3.14338 16.9916 2.89684ZM15.143 5.36884C15.5072 5.17165 15.9624 5.30709 16.1596 5.67135C16.6958 6.66196 17 7.7963 17 8.9995C17 10.2027 16.6958 11.3371 16.1596 12.3277C15.9624 12.6919 15.5072 12.8274 15.143 12.6302C14.7787 12.433 14.6432 11.9778 14.8404 11.6136C15.2609 10.8368 15.5 9.9472 15.5 8.9995C15.5 8.0518 15.2609 7.1622 14.8404 6.38544C14.6432 6.02118 14.7787 5.56603 15.143 5.36884Z"
                  />
                </svg>
                <div class ="tool-tip"><span class="tool-tip_text">No audio found</span></div>
              </button>
              <button class="button add-to-bookmark">
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 27 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="stroke-[#B81E53] stroke-2 fill-none dark:stroke-[#CF688C]"
                    d="M3.09214 31.4245C2.20322 32.0195 0.963623 31.4285 0.963623 30.4098V5.41667C0.963623 2.42512 3.57062 0 6.78654 0H20.2211C23.437 0 26.044 2.42512 26.044 5.41667V30.4098C26.044 31.4285 24.8044 32.0195 23.9155 31.4245L13.5038 24.4563L3.09214 31.4245Z"
                  />
                </svg>
              </button>
            </div>
            <div class="search-word_meaning--list grid gap-1">
            </div>
            <div
              class="more-info text-right mt-2 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              <a
                href="#linktowikiarticle"
                class="word-link italic text-[#CF688C] dark:text-[#E9B9CA] underline"
                >See more</a
              >
            </div>
          </div>
          <div
            class="entry-word_synonym overflow-auto col-span-2 row-span-2 xl:col-span-2 xl:row-span-2 p-4 lg:p-6 lg:mx-4 lg:mb-2 xl:mx-12 2xl:ml-24 2xl:mr-32 border border-[#FFD1E140] rounded-[20px] shadow-[4px_4px_4px_0_rgba(255,209,225,0.5)] dark:shadow-[1px_1px_4px_0_rgba(255,209,225,0.25)]"
          >
            <h3
              class="antonyms font-bold border-b-2 border-black dark:border-white mx-auto text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[33px] dark:text-[##F8E9EE] pb-1"
            >
              Synonyms
            </h3>
            <ul
              class="entry-word_synonyms--list px-5 py-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            >
            </ul>
          </div>
          <div
            class="entry-word_antonym overflow-auto col-span-2 row-span-2 xl:col-span-2 xl:row-span-2 p-4 lg:p-6 lg:mx-4 lg:mb-2 xl:mx-12 2xl:ml-24 2xl:mr-32 border border-[#FFD1E140] rounded-[20px] shadow-[4px_4px_4px_0_rgba(255,209,225,0.5)] dark:shadow-[1px_1px_4px_0_rgba(255,209,225,0.25)]"
          >
            <h3
              class="antonyms font-bold border-b-2 border-black dark:border-white mx-auto text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[33px] dark:text-[##F8E9EE] pb-1"
            >
              Antonyms
            </h3>
            <ul
              class="entry-word_antonyms--list px-5 py-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            >
            </ul>
          </div>`;

const searchResultsUI = document.createElement("section");
searchResultsUI.className =
  "word_results-container h-[90%] md:h-[810px] lg:min-h-[75%] lg:max-h-full xl:h-[830px] home_results px-6 pb-10 lg:pb-0 lg:px-16 xl:px-0 xl:pb-14 2xl:pb-24 md:pl-12 xl:pl-24 md:pr-14 mt-4 md:mt-8 xl:mt-9 grid grid-cols-4 grid-rows-5 gap-4 xl:grid-cols-5 xl:grid-rows-4 xl:gap-6";
searchResultsUI.innerHTML = searchResultComponent;
// handles the display of either results or errors
export function displayRequiredResult(page,searchRequest) {
  getSearchRequest(searchRequest).then((myResult)=>{
  displaySearchResults(page, myResult);
  }).catch ((error)=> {
    console.log(error)
    if (error.name === "TypeError" || error === 404) {
      console.error("Word not found");
      displayWordSearchErrorUI(page,searchRequest);
    } else if (error.name === "TimeoutError" || error.name === "ERR_NETWORK") {
      console.error("Request timed out");
      displayTimeoutErrorUI(page);
    } else if (error.name === "AbortError") {
      console.error("User aborted fetch");
    } else {
      console.error(error);
    
  }
})
}

function displaySearchResults(page, data) {
  page.innerHTML = ''; 
  page.append(searchResultsUI);
  displaySearchedWord(page,data);
  displayDefinitionsList(page,data);
}

export function removeSearchResults(page) {
  page.remove(searchResultsUI);
}
