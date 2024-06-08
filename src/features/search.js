
export async function getSearchRequest(searchRequest) {
  const controller = new AbortController();
  const userAbortSignal = controller.signal;
  const timeoutAbortSignal = AbortSignal.timeout(10000);
  const abortSignalArray = AbortSignal.any([
    userAbortSignal,
    timeoutAbortSignal,
  ]);

  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchRequest}`,
    { signal: abortSignalArray }
  );
  if (!response.ok) {
    throw response.status;
  }
  const results = await response.json();
  return consoleResult(results);
}

function consoleResult(results) {
   console.log(results);
  if (results.length === 1) {
    return retrieveResults(results[0]);
  } else if (results.length > 1) {
    let firstResult =
      results.find(findFirstSearchResult) || results[0];
    if (firstResult) {
      console.log(firstResult)
      return retrieveResults(firstResult);
    }
  }
}

function findFirstSearchResult(results) {
  if (results.meanings.length > 1) {
    return true;
  }
}
function retrieveResults(result) {
  return {
    entryWord: result.word,
    pronunciationKey: result.phonetic || findPhonetic(result),
    pronunciationAudio: findAudio(result),
    entryWordMeanings: printEntryWordMeanings(result),
    entryWordSource: result.sourceUrls?.[0] || '',
  };
}

function findAudio(result) {
  let validAudio = result.phonetics?.find(findObjectWithValidAudio)?.audio;
  return validAudio || '';
}
function findPhonetic(result){
  let validPhonetic = result.phonetics?.find(findObjectWithValidAudio)?.text;
  return validPhonetic;
}
function findObjectWithValidAudio(phoneticsItem) {
  if (phoneticsItem.audio && phoneticsItem.text) {
    return true;
  }
}

function printEntryWordMeanings(result) {
  let entryWordDefinitionsObject = result.meanings?.map((meanings) => {
    return {
      partOfSpeech: meanings.partOfSpeech,
      entryWordDefinitions: printEntryWordDefinitions(meanings),
      entryWordSynonyms: meanings.synonyms?.slice(0, 2),
      entryWordAntonyms: meanings.antonyms?.slice(0, 2),
    };
  });
  return entryWordDefinitionsObject;
}
function printEntryWordDefinitions(meanings) {
  let entryWordDefinitionsArray = meanings.definitions
    ?.map((meaning) => {
      return {
        definition: meaning.definition,
        example: meaning.example,
      };
    })
    .splice(0, 2);
  return entryWordDefinitionsArray;
}
