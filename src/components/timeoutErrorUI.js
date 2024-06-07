const timeoutErrorMessage = `

          <p class="timeout-message">
            The page is taking too long to load.
            <br />
            Refresh and try again
          </p>
`;
const timeoutErrorUI = document.createElement("div");
timeoutErrorUI.innerHTML = timeoutErrorMessage;
timeoutErrorUI.className =
  "home_error-page--timeout mx-auto relative top-[30%] md:top-[25%] text-center text-[#545454] text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
export function displayTimeoutErrorUI(page) {
  page.append(timeoutErrorUI);
}
export function removeTimeoutErrorUI(page) {
  page.remove(timeoutErrorUI);
}
