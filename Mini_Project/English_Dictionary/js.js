const searchInput = document.getElementById("input");
const infoTextElement = document.getElementById("info-text");
const meaningContainerElement = document.getElementById("meaning-container");
const titleElement = document.getElementById("title");
const meaningElement = document.getElementById("meaning");
const audioElement = document.getElementById("audio");

async function fetchDictionaryAPI(word) {
    try {
        infoTextElement.style.display = "block";
        meaningContainerElement.style.display = "none";
        infoTextElement.innerText = `Searching the meaning of "${word}"`;
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const apiResult = await fetch(apiUrl).then((response) => response.json());

        if (apiResult.title) {
            meaningContainerElement.style.display = "block";
            infoTextElement.style.display = "none";
            titleElement.innerText = word;
            meaningElement.innerText = "N/A";
            audioElement.style.display = "none";
        } else {
            infoTextElement.style.display = "none";
            meaningContainerElement.style.display = "block";
            audioElement.style.display = "inline-flex";
            titleElement.innerText = apiResult[0].word;
            meaningElement.innerText = apiResult[0].meanings[0].definitions[0].definition;
            audioElement.src = apiResult[0].phonetics[0].audio;
        }
        
    } catch (error) {
        console.log(error);
        infoTextElement.innerText = `An error occurred, please try again later`;
    }
}

searchInput.addEventListener("keyup", (event) => {
    if (event.target.value && event.key === "Enter") {
        fetchDictionaryAPI(event.target.value);
    }
});

