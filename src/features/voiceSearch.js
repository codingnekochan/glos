import {
  onListenUI,
  onVoiceSearchErrorUI,
  onVoiceSearchStartUI,
  onVoiceSearchFinishUI,
} from "../components/voiceSearchUI";
import { handleUserSearch, homeContainer } from "../pages/home";
import { homePage } from "../pages/home";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
export const wordRecognition = new SpeechRecognition();
wordRecognition.continuous = false;
wordRecognition.lang = "en";
wordRecognition.interimResults = false;

export function handleVoiceSearch(page) {
    // Indicate the start of voice recognition in the UI
  onVoiceSearchStartUI(page);
  console.log("Starting voice recognition");
  wordRecognition.start();

}

wordRecognition.addEventListener("speechstart", handleSpeechStart);
wordRecognition.addEventListener("result", handleSpeechResult);
wordRecognition.addEventListener("speechend", handleSpeechEnd);
wordRecognition.addEventListener("error", handleSpeechError);
// wordRecognition.addEventListener("nomatch", handleNoMatch);

function handleSpeechStart(e) {
  onListenUI(homePage);
  console.log("Listening...");
}
function handleSpeechResult(e) {
  // Ensure that we have a valid result
  if (e.results && e.results[0] && e.results[0][0]) {
    const transcript = e.results[0][0].transcript.trim();
    console.log("Result: " + transcript);
    handleUserSearch(e, transcript);
    return transcript;
  } else {
    console.error("No valid speech result found");
    onVoiceSearchErrorUI(homePage);
  }
}

function handleSpeechEnd(e) {
  onVoiceSearchFinishUI(homePage);
  wordRecognition.stop();
  console.log("Speech recognition ended");
}

function handleSpeechError(e) {
  onVoiceSearchErrorUI(homePage);
  wordRecognition.abort();
  console.error("Error occurred during speech recognition");
}

wordRecognition.onnomatch = function(e) {
  onVoiceSearchErrorUI(homePage);
  wordRecognition.abort();
  console.log("No match found");
}