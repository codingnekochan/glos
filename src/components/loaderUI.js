export function displayLoader(page) {
const loaderPage = document.createElement("div");
loaderPage.className = "loader_page m-auto h-full flex items-center";
const loader = document.createElement("div");
  loader.className =
"loader animate-spin m-auto w-[40px] h-[40px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] p-[5px] md:p-[7px] lg:p-[9px]";
  loaderPage.append(loader);
  page.append(loaderPage);
}

