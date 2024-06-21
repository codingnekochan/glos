export const pageTemplateComponent = ` <div class="h-full page">
        <div class = 'page_intro'>
        <h2
          class="page_info font-bold text-sm text-center px-6 md:text-xl xl:text-[28px] dark:text-[#F8E9EE]"
        >
        </h2>
        <p
          class="page_cta text-xs text-center text-[#8A8A8A] leading-4 px-20 mt-2 md:mt-4 md:w-[260px] md:px-0 mx-auto md:text-sm xl:w-full xl:text-xl xl:mt-6"
        >
        </p>
        <div>     
        <div
          class="hidden words_container md:ml-[163px] lg:mx-[31%] xl:mx-[31%]"
        >
          <ul
            class="page_list list-disc text-sm pl-[71px] md:pl-0 mt-6 md:mt-11 md:text-xl xl:mt-7"
          >
          </ul>
          <button
            class="button clear_button underline font-[Courgette] text-sm text-[#CF688C] pl-6 mt-6 md:pl-0 md:ml-[-5.05%] md:mt-11 md:text-2xl xl:mt-10 dark:text-[#DE98B0]"
          >
          </button>
        </div>
        <!-- modal box -->
        <div
          class="hidden z-10 absolute w-full h-full top-0 left-0 modal-box bg-[#00000099] justify-center items-center"
        >
          <div
            class="flex flex-col clear page_clear bg-white dark:bg-black w-[273px] border-2 border-[#8A8A8A] dark:border-[#FFE5EE] rounded-2xl justify-center items-center text-xs font-bold sm:w-[48%] md:w-[64%] lg:w-[600px]"
          >
            <button class="clear_cancel pt-2 self-end pr-2 md:pt-4 md:pr-4">
              <svg
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="fill-white dark:fill-black stroke-[#CF688C] dark:stroke-white"
                  cx="7.5"
                  cy="7.5"
                  r="7"
                />
                <line
                  class="stroke-[#CF688C] dark:stroke-white"
                  x1="11.2714"
                  y1="11.0411"
                  x2="3.77145"
                  y2="3.54105"
                />
                <line
                  class="stroke-[#CF688C] dark:stroke-white"
                  x1="3.20895"
                  y1="11.0839"
                  x2="10.7089"
                  y2="3.58395"
                />
              </svg>
            </button>
            <p
              class="clear_alert px-8 mt-3 mb-6 font-bold text-center md:mt-2 md:mb-12 md:text-lg md:px-24 lg:text-2xl lg:px-20"
            >
            </p>
            <button
              class="button_clear px-4 py-3 mb-6 bg-white dark:bg-[#CF688C] text-[#B81E53] dark:text-white rounded-[50px] shadow-[2px_2px_4px_0_rgba(204,104,140,1)] dark:shadow-[2px_2px_4px_0_rgba(255,255,255,1)] md:px-8 md:py-4 md:text-sm md:mb-12"
            >
              Yes,clear it all.
            </button>
          </div>
        </div>
      </div>`;