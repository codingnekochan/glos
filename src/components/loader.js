import { pageBody } from "..";
const loader = document.createElement('div');
loader.className='loader animate-spin m-auto w-[40px] h-[40px]';
export function displayLoader(){
    pageBody.append(loader);
}
export function hideLoader(){
    loader.remove();
}