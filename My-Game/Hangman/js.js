const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {

  let span = document.createElement("span");
  
  let theLetter = document.createTextNode(letter);
  
  span.appendChild(theLetter);
  
  span.className = 'letter-box';
  
  lettersContainer.appendChild(span);
  
});

const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};


let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];


lettersAndSpace.forEach(letter => {

  let emptySpan = document.createElement("span");
  
  if (letter === ' ') {
  
    emptySpan.className = 'with-space';
  
  }
  
  lettersGuessContainer.appendChild(emptySpan);

});




function endGame() {

  let div = document.createElement("div");

  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

  div.appendChild(divText);

  div.className = 'popup';

  document.body.appendChild(div);

}
