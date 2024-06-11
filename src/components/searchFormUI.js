//  xl:ml-32 2xl:ml-64
const searchFormComponent = `    
         <div
            class="search_form-container relative left-4 md:static md:left-0 max-sm:h-[47px] md:mt-[100px] 2xl:mt-[120px] mx-auto w-[80%] md:w-[549px] xl:w-[65%] max-w-[1106px] flex justify-between items-center px-6 py-[18px] md:px-0 md:py-0 bg-[#FFEDF4] dark:bg-[#333333] text-[#8A8A8A] dark:text-[#B0B0B0] text-xs md:text-sm 2xl:text-xl rounded-[90px] search-container md:bg-inherit md:dark:bg-inherit"
          >
            <button class="button_back md:hidden relative right-14">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H19V7H1V9Z"
                  fill="#CF688C"
                ></path>
              </svg>
            </button>

            <form
            id="search_form"
            action = "#"
              class="search_form flex md:w-[455px] md:h-[70px] xl:w-[83%] max-w-[946px] 2xl:h-[120px] md:rounded-[90px] md:pl-10 md:bg-[#FFEDF4] md:dark:bg-[#333333]"
            > 
              <label for= "search" class="sr-only">search form</label>
              <input
              name= "search"
              id = "search_input"
                type="search"
                class="search_input my-auto w-[85%] md:w-[60%] bg-inherit outline-none self-center placeholder:text-xs md:placeholder:text-sm xl:placeholder:text-lg 2xl:placeholder:text-xl"
                placeholder="Type in a word to look up..."
              />
            </form>
            <button id="button_voice-search" class="mic-icon">
              <svg
                class="w-[30px] h-[31px] md:w-[70px] md:h-[70px] 2xl:w-[120px] 2xl:h-[120px]"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="fill-white stroke-[#E9B9CA] dark:fill-[#333333] dark:stroke-[#8A8A8A] md:dark:fill-black md:dark:stroke-[#333333]"
                  cx="15"
                  cy="15.5"
                  r="14.5"
                ></circle>
                <path
                  class="fill-[#E9B9CA] dark:fill-[#CF688C]"
                  d="M19.556 14.7705C19.8329 14.7705 20.0617 14.9763 20.0979 15.2432L20.1029 15.3174V15.682C20.1029 18.2774 18.094 20.4036 15.5463 20.5905L15.5456 22.2445C15.5456 22.5465 15.3007 22.7913 14.9987 22.7913C14.7218 22.7913 14.493 22.5856 14.4568 22.3187L14.4518 22.2445V20.5906C11.9604 20.4081 9.98409 18.3711 9.89749 15.8543L9.89453 15.682V15.3174C9.89453 15.0154 10.1394 14.7705 10.4414 14.7705C10.7183 14.7705 10.9471 14.9763 10.9833 15.2432L10.9883 15.3174V15.682C10.9883 17.7433 12.6176 19.4241 14.6586 19.5069L14.8164 19.5101H15.181C17.2423 19.5101 18.9231 17.8808 19.0059 15.8398L19.0091 15.682V15.3174C19.0091 15.0154 19.254 14.7705 19.556 14.7705ZM14.9987 8.20801C16.6095 8.20801 17.9154 9.51384 17.9154 11.1247V15.4997C17.9154 17.1105 16.6095 18.4163 14.9987 18.4163C13.3879 18.4163 12.082 17.1105 12.082 15.4997V11.1247C12.082 9.51384 13.3879 8.20801 14.9987 8.20801Z"
                ></path>
              </svg>
            </button>
            <button class="cancel-to-home hidden text-xl text-[#CF688C] italic">
              <p>Cancel</p>
            </button>
          </div>
          <p class="absolute left-[30%] mt-2 validation-message hidden text-[#981010] text-xs lg:text-base">Please enter a word!</p>
          <div
            class="hidden fl/ex search_suggestions relative -z-10 top-[-75px] md:top-[-80px] lg:top-[-81px] xl:top-[-83px] 2xl:top-[-130px] mx-auto w-[80%] md:w-[549px] xl:w-[50%] max-w-[1106px] justify-between items-center py-[18px] px-6 md:px-0 md:py-0 text-sm md:text-lg xl:text-xl 2xl:text-2xl rounded-t-[49px] rounded-b-[50px] search-container"
          >
            <ul
              class="search_suggestions--list pt-16 md:pt-20 xl:pt-24 2xl:pt-[116px] pb-6 w-full md:w-[455px] xl:w-[80%] max-w-[946px] md:rounded-[50px] md:pl-14 text-black dark:text-white leading-loose px-6 md:bg-[#FFEDF4] md:dark:bg-[#333333]"
            >
              <li class="search_suggestions--item">Word one</li>
              <li class="search_suggestions--item">Suggested two</li>
              <li class="search_suggestions--item">Hello three</li>
              <li class="search_suggestions--item">Yes yes</li>
              <li class="search_suggestions--item">Hahaha</li>
            </ul>
          </div>  
`;
const searchFormUI = document.createElement("section");
searchFormUI.innerHTML = searchFormComponent;
searchFormUI.className = "home_search-form w-full mt-6 md:mt-0";

export function displaySearchFormUI(page, container) {
 return page.insertBefore(searchFormUI, container);
}
export function removeSearchFormUI(page) {
  page.remove(searchFormUI);
}
