let gameName = "Guess The Word";
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By Elzero Web School`;

let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;


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
        })
    })

}

window.onload = function () {
    generateInput();
}
