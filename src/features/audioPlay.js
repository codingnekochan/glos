// THIS MODULE HANDLES AUDIO PLAY OF SEARCHED WORD

export default function playAudio(page) {
  const audioPlayButton = page.querySelector(".play-audio");
  const audioFile = document.getElementById("audio-file");
  audioFile.load();
  console.log("Removing event listener");
  audioPlayButton.addEventListener("click", handleAudioPlayback);
}
//audio playback function
function handleAudioPlayback() {
  const audioFile = document.getElementById("audio-file");
  const audioSource = document.getElementById("pronunciation-audio");
  const toolTip = document.querySelector(".tool-tip");

  if (audioSource.src && audioSource.src !== window.location.href) {
    console.log(audioSource);
    console.log(window.location.href);
    audioFile.play();
    console.log("Audio is playing");
  } else {
    console.log(toolTip);
    toolTip.classList.add("animated");
    setTimeout(() => {
      toolTip.classList.remove("animated");
    }, 2000);
    console.log("Error: Audio player element not found");
  }
}