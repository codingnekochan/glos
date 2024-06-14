
export function debounceFetch(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export async function fetchWordSuggestions(userInput) {
  const wordSuggestionsResponse = await fetch(
    `https://api.datamuse.com/words?sp=${encodeURIComponent(userInput)}*&max=6`
  );
  const wordSuggestionsResult = await wordSuggestionsResponse.json();
  //ensures only 6 results are returned
  const splicedResult = wordSuggestionsResult.slice(0,6)
  return retrieveWordSuggestions(splicedResult)
}

function retrieveWordSuggestions(results){
    const wordsList = results?.map((result)=>{
        console.log(result.word)
        return result.word
    })
    return wordsList
}
