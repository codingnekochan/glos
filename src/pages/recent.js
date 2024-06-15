import { pageTemplateComponent } from "../components/templateUI";

const recentPage = document.createElement('section');
recentPage.className = "recent mt-24 md:mt-36 xl:mt-28";
recentPage.id = "recent";
recentPage.innerHTML = pageTemplateComponent;
const recentPageInfo = recentPage.querySelector('.page_info');
const recentPageCta = recentPage.querySelector('.page_cta');
const recentClearAlert = recentPage.querySelector(".clear_alert");
recentPageInfo.textContent = `Your recently searched words will appear here!`;
recentPageCta.textContent = `You have not search for any word yet! Click on the search option or voice recording to look up a word!`
recentClearAlert.textContent = `Are you sure you want to clear your recent searches?
`;
export function displayRecentPage(container){
    container.innerHTML = ''
    container.append(recentPage);
}