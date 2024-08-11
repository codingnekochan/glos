// This module handles the Voice Search feature of the webapp
import {
  onListenUI,
  onVoiceSearchErrorUI,
  onVoiceSearchStartUI,
  onVoiceSearchFinishUI,
  onVoiceSearchCancel
} from "../components/voiceSearchUI";
import { handleUserSearch } from "../components/searchFormUI";

const SpeechRecognition =
// provide support for chrome and safari, firefox not yet supported
  window.SpeechRecognition || window.webkitSpeechRecognition;
export const wordRecognition = new SpeechRecognition();
wordRecognition.continuous = false;
wordRecognition.lang = "en";
wordRecognition.interimResults = false;

export function handleVoiceSearch(page) { // Indicate the start of voice recognition in the UI
  onVoiceSearchStartUI();
  const cancelButton = page.querySelector(".button_listening-cancel");
  cancelButton.addEventListener("click", () => {
    wordRecognition.abort();
    onVoiceSearchCancel();
  });
  wordRecognition.start();
}
wordRecognition.addEventListener("audiostart", handleSpeechStart);
wordRecognition.addEventListener('speechstart', handleSpeechStart);
wordRecognition.addEventListener("result", handleSpeechResult);
wordRecognition.addEventListener("speechend", handleSpeechEnd);
wordRecognition.addEventListener('audioend',handleSpeechEnd)
wordRecognition.addEventListener("error", handleSpeechError);
wordRecognition.addEventListener("nomatch", handleNoMatch);

function handleSpeechStart(e) {
  onListenUI();
}
function handleSpeechResult(e) {
  // Ensure that we have a valid result
   onVoiceSearchFinishUI();
  try {
    if (e?.results && e?.results[0] && e?.results[0][0]) {
      const transcript = e.results[0][0].transcript.trim();
      handleUserSearch(e, transcript);
      return transcript;
    }
  } catch (error) {
    console.error(error);
    onVoiceSearchErrorUI();
  }
}

function handleSpeechEnd(e) {
  wordRecognition.stop();
  onVoiceSearchFinishUI()
}

function handleSpeechError(e) {
  wordRecognition.abort();
  console.log(e.error)
  onVoiceSearchErrorUI();
  console.error("Error occurred during speech recognition");

}
function handleNoMatch(e) {
  onVoiceSearchErrorUI();
  wordRecognition.abort();
};
