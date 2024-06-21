// THIS FILE MODULE HANDLES THE DISPLAY OF RESULTS RETRIEVED FROM API RESPONSE

import {
  bookmarkButtonComponent,
  parent,
  playAudioButton,
} from "../components/searchResultsUI";
import playAudio from "./audioPlay";
/*this function diplays the searched word,phonetic sound, 
it also adds the see-more link and audio file*/
export function displaySearchedWord(page, data) {
  page.querySelector(".entry-word").textContent = data.entryWord;
  page.querySelector(
    ".pronunciation-key"
  ).textContent = `{ ${data.pronunciationKey} }`;
  document.getElementById("pronunciation-audio").src = data.pronunciationAudio;
  page.querySelector(".word-link").href = data.entryWordSource;
  page.querySelector(".word-link").setAttribute("target", "_blank");
  playAudio(page);
}
/*
this function handles display of the list of meanings for a searched word including
the parts of speech; and the defintions and examples availabe for each part of 
speech.
*/
export function displayDefinitionsList(page, data) {
  // clears
  const entryWordMeaningsList = page.querySelector(
    ".search-word_meaning--list"
  );
  entryWordMeaningsList.innerHTML = "";
  // clears syno
  const synonymsList = page.querySelector(".entry-word_synonyms--list");
  synonymsList.innerHTML = "";
  console.log("synonym list cleared");

  const antonymsList = page.querySelector(".entry-word_antonyms--list");
  antonymsList.innerHTML = "";
  console.log("antonym list cleared");

  data.entryWordMeanings.forEach((meaningsItem, index) => {
    const entryWordDefinitionsList = document.createElement("ol");
    entryWordDefinitionsList.className =
      "search-word_definition--list list list-decimal pl-6";
    const entryWordMeaning = document.createElement("div");
    entryWordMeaning.id = `meaning-${index}`;
    entryWordMeaning.className = "meaning";
    const partOfSpeech = document.createElement("h2");
    partOfSpeech.id = meaningsItem.partOfSpeech;
    partOfSpeech.classList.add(
      "part-of-speech",
      "font-['Oswald']",
      "text-base",
      "md:text-lg",
      "xl:text-2xl",
      "2xl:text-[28px]"
    );
    partOfSpeech.textContent = meaningsItem.partOfSpeech;
    meaningsItem.entryWordDefinitions.forEach((definition, index) => {
      const definitionItem = document.createElement("li");
      definitionItem.id = `definition-${index}`;
      definitionItem.classList.add(
        "word_meaning--item",
        "text-sm",
        "md:text-base",
        "lg:text-lg",
        "xl:text-xl",
        "2xl:text-2xl",
        "pl-2",
        "pb-2"
      );
      const wordDefinition = document.createElement("p");
      wordDefinition.className = "word_definition";
      wordDefinition.textContent = definition.definition;
      const definitionExample = document.createElement("p");
      definitionExample.className = "word_example italic";
      definitionExample.textContent = definition.example
        ? `'${definition.example}'`
        : "";
      // DOM Arrangement
      definitionItem.append(wordDefinition, definitionExample);
      entryWordDefinitionsList.append(definitionItem);
    });
    entryWordMeaning.append(partOfSpeech, entryWordDefinitionsList);
    entryWordMeaningsList.append(entryWordMeaning);
    // display synonyms
    displaySynonyms(meaningsItem, synonymsList);
    // display antonyms
    displayAntonyms(meaningsItem, antonymsList);
  });
}
// handles display of synonyms
function displaySynonyms(meanings, list) {
  meanings.entryWordSynonyms.forEach((synonym) => {
    const item = document.createElement("li");
    const synonymButton = document.createElement("button");
    synonymButton.className = "word-button synonym-button capitalize";
    synonymButton.textContent = synonym;
    item.append(synonymButton);
    list.append(item);
  });
}
// handles display of anotonyms
function displayAntonyms(meanings, list) {
  meanings.entryWordAntonyms.forEach((antonym) => {
    const item = document.createElement("li");
    const antonymButton = document.createElement("button");
    antonymButton.className = "word-button antonym-button capitalize";
    antonymButton.textContent = antonym;
    item.append(antonymButton);
    list.append(item);
  });
}

// <button class="button button_add-bookmark relative">
// <input type ="checkbox" id="checkbox" class="absolute right-1 top-1 left-1 bottom-1 checked:bg-[#CF688C]"/>
// <svg
// class="w-5 h-5"
// viewBox="0 0 27 32"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
// class="bookmark-state stroke-[#B81E53] stroke-2 fill-none dark:stroke-[#CF688C]"
// d="M3.09214 31.4245C2.20322 32.0195 0.963623 31.4285 0.963623 30.4098V5.41667C0.963623 2.42512 3.57062 0 6.78654 0H20.2211C23.437 0 26.044 2.42512 26.044 5.41667V30.4098C26.044 31.4285 24.8044 32.0195 23.9155 31.4245L13.5038 24.4563L3.09214 31.4245Z"
// />
// </svg>
// </button>
