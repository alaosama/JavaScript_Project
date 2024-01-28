let gameName = "Guess The Word";
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By Elzero Web School`;

let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;

let wordToGuess = "";
const words = ["Create", "Update", "Delete", "Master", "Branch", "Mainly", "Zakaria", "Osama"];
wordToGuess = words[Math.floor(Math.random() * words.len)].toLowerCase();

// console.log(wordToGuess);

function generateInput() {
    const inputsContainer = document.querySelector(".inputs");

    // Create Main Try Div
    for (let i = 1; i <= numberOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try ${i}</span>`;

        if (i !== 1) tryDiv.classList.add("disabled-inputs");

        // Create Inputes
        for (let j = 1; j <= numberOfLetters; j++) {
            const input = document.createElement("input");
            inputsContainer.type = "text";
            inputsContainer.id = `guess-${i}-letter-${j}`;
            inputsContainer.setAttribute("maxlength", "1");
            tryDiv.appendChild(input);
        }
        // tryDiv.innerHTML = `<span>Try ${i}</span>`;
        // inputsContainer.setAttribute("maxlength", "1");
        // inputsContainer.setAttribute("data-try", i);
        // inputsContainer.setAttribute("data-letter", j);
        // inputsContainer.setAttribute("autocomplete", "off");
        inputsContainer.appendChild(tryDiv);
    }

    // Focus On First Input In First Try Element 
    inputsContainer.children[0].children[1].focus();

    // Disable All Inputs Except First One
    const inputsInDisableDiv = document.querySelectorAll(".disabled-input input");
    inputsInDisableDiv.forEach((input) => (input.disabled = true));

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {

        // Convert Input To Uppercase
        input.addEventListener("input", function () {
            this.value = this.value.toUpperCase();

            // Console.log(index);
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        });

            input.addEventListener("keydown", function (event) {
            // console.log(event);
            const currentIndex = Array.from(inputs).indexOf(event.target); // Or this
            // console.log(currentIndex);

            if (event.key === "ArrowRight") {
                const nextInput = currentIndex + 1;
                if (nextInput < input.length) inputs [nextInput].focus();
            }
            if (event.key === "ArrowLeft") {
                const prevInput = currentIndex + 1;
                if (prevInput >= 0) inputs[prevInput].focus();
            }
        });
    });
}

  if (successGuess) {
    messageArea.innerHTML = `You Win The Word Is <span>${wordToGuess}</span>`;
    if (numberOfHints === 2) {
      messageArea.innerHTML = `<p>Congratz You Didn't Use Hints</p>`;
    }



guessButton.disabled = true;
getHintButton.disabled = true;
messageArea.innerHTML = `You Lose The Word Is <span>${wordToGuess}</span>`;


function getHint() {
  if (numberOfHints > 0) {
    numberOfHints--;
    document.querySelector(".hint span").innerHTML = numberOfHints;
  }
  if (numberOfHints === 0) {
    getHintButton.disabled = true;
  }

  const enabledInputs = document.querySelectorAll("input:not([disabled])");
  // console.log(enabledInputs);
  const emptyEnabledInputs = Array.from(enabledInputs).filter((input) => input.value === "");
  // console.log(emptyEnabledInputs);

  if (emptyEnabledInputs.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyEnabledInputs.length);
    const randomInput = emptyEnabledInputs[randomIndex];
    const indexToFill = Array.from(enabledInputs).indexOf(randomInput);
    // console.log(randomIndex);
    // console.log(randomInput);
    // console.log(indexToFill);
    if (indexToFill !== -1) {
      randomInput.value = wordToGuess[indexToFill].toUpperCase();
    }
  }
}

function handleBackspace(event) {
  if (event.key === "Backspace") {
    const inputs = document.querySelectorAll("input:not([disabled])");
    const currentIndex = Array.from(inputs).indexOf(document.activeElement);
    // console.log(currentIndex);
    if (currentIndex > 0) {
      const currentInput = inputs[currentIndex];
      const prevInput = inputs[currentIndex - 1];
      currentInput.value = "";
      prevInput.value = "";
      prevInput.focus();
    }
  }
}



document.addEventListener("keydown", handleBackspace);

window.onload = function () {
  generateInput();
};
