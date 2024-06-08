// const seachResult = document.querySelector('')
export function displayWordSearchErrorUI(page,searchRequest) {
const wordErrorMessage = ` 
          <p class="error-message text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            No result for
            <span class="error-word text-[#981010]">${searchRequest}</span>
          </p>
          <p class="error-cta text-[#545454] text-xs md:text-base lg:text-lg xl:text-xl 2sl:text-2xl">Try searching for something else?</p>
`;
const wordErrorUI = document.createElement("div");
wordErrorUI.innerHTML = wordErrorMessage;
wordErrorUI.className ="home_error-page--result mx-auto relative top-[30%] md:top-[25%]  text-center";
page.innerHTML = ''
page.append(wordErrorUI);
}