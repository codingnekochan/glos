import { pageBody } from "..";
const userMic= document.createElement('div')
userMic.className ='microphone m-auto';
userMic.innerHTML = `
    <svg
      width="270"
      height="270"
      viewBox="0 0 270 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="pulse-1"
        cx="135"
        cy="135"
        r="135"
        fill="#A71B4C"
      />
      <circle
        class="pulse-2"
        cx="135"
        cy="135"
        r="125"
        fill="#B81E53"
      />
      <circle
        class="pulse-3"
        cx="135"
        cy="135"
        r="115"
        fill="#C64B75"
      />
      <circle
        class="pulse-4"
        cx="135"
        cy="135"
        r="105"
        fill="#CF688C"
      />
      <circle
        class="pulse-5"
        cx="135"
        cy="135"
        r="95"
        fill="#DE98B0"
      />
      <circle
        class="pulse-6"
        cx="135"
        cy="135"
        r="85"
        fill="#F8E9EE"
      />
      <path
        class=""
        d="M168.854 129.583C170.911 129.583 172.611 131.112 172.88 133.094L172.917 133.646V136.354C172.917 155.634 157.994 171.429 139.068 172.818L139.063 185.104C139.063 187.348 137.244 189.167 135 189.167C132.943 189.167 131.244 187.638 130.974 185.656L130.938 185.104V172.818C112.43 171.463 97.7488 156.331 97.1055 137.634L97.0835 136.354V133.646C97.0835 131.402 98.9024 129.583 101.146 129.583C103.203 129.583 104.902 131.112 105.171 133.094L105.208 133.646V136.354C105.208 151.667 117.312 164.153 132.474 164.768L133.646 164.792H136.354C151.667 164.792 164.153 152.689 164.768 137.526L164.792 136.354V133.646C164.792 131.402 166.611 129.583 168.854 129.583ZM135 80.8333C146.966 80.8333 156.667 90.5338 156.667 102.5V135C156.667 146.966 146.966 156.667 135 156.667C123.034 156.667 113.333 146.966 113.333 135V102.5C113.333 90.5338 123.034 80.8333 135 80.8333Z"
        fill="#B81E53"
      />
    </svg>
`;
export function showMic(){
    pageBody.append(userMic);
}
export function animateMic(){
  userMic.querySelectorAll('circle').forEach((circle)=>{
    circle.classList.add('animate-pulse')
  })

}
export function removeMic(){
  userMic.remove();
}
