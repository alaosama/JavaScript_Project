setTimeout(() => {
    document.body.classList.remove('preload');
}, 500);

const COICES = [
    {
        name: "pzper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "rock",
        beats: "scissors"
    },
]

// DOM
const btnRules = document.querySelector('.rules-btn');
const btnClose = document.querySelector('.close-btn');
const modalRules = document.querySelector('.modal');

btnClose.addEventListener('click', () => {
    modalRules.classList.toggle('show-modal')
})
btnClose.addEventListener('click', () => {
    modalRules.classList.toggle('show-modal')
})


// const gameContainer = document.querySelector(".container"),
//     userResult = document.querySelector(".user-result img"),
//     cpuResult = document.querySelector(".user-result img"),
//     result = document.querySelector(".result"),
//     optionImages = document.querySelectorAll(".option-img");

// // Loop through each option image element

// optionImages.forEach((image, index) => {
//     image.addEventListener("click", (e) => {
//         image.classList.add("active");

//         userResult.src = cpuResult.src = 
//             ".png";
//         result.textContent = 
//             ""
    
//         // Loop through each option image again

//         optionImages.forEach((image2, index2) => {
//             index != index2 && image2.classList.remove("active");
//         });

//         gameContainer.classList.add("start");

//         // Set a timeout to delay the result calculation

//         let time = setTimeout(() => {
//             gameContainer.classList.remove("start");

//             // Get the source of the clicked option image 
//             let imageSrc = e.target.querySelector("img").src;
            
//             // Set the user image to the clicked option image

//             userResult.src = imageSrc;
        
//             // Generate a random number berween 0 and 2

//             let randomNumber = Math.floor(Math.random() * 3);

//             // Creat an array of CPU image option

//             let cpuImages = [
//                 "",
//                 "",
//                 ""
//             ];

//             // Set the CPU image to a random option from the array

//             cpuResult.src = cpuImages[randomNumber];

//             // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
//             let cpuValue = ["R", "P", "S"][index];
            
//             // Create an object with all possible outcomes

//             let outcomes = {
//                 RR: "Draw", RP: "Cpu", RS: "User", PP: "Draw", PR: "User", PS: "Cpu", SS: "Draw", SR: "Cpu", SP: "User"
//             };

//             // Look up the outcome value based on user and CPU options

//             let outcomeValue = outcomes[userValue + cpuValue];

//             // Display the result
//             result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!`;
//         }, 2500);
//     });
// });




// const computerChoiceDisplay=document.getElementById("computer-choice");
// const userChoiceDisplay=document.getElementById("user-choice")
// const resultDisplay=document.getElementById("result")
// const possibleChoices=document.querySelectorAll("button")
// let userChoice
// let computerChoice
// let result

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e)=>{
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML=userChoice
//     generateComputerChoice()
//     getResult()
// }))

// function generateComputerChoice(){
//     const randomNumber = Math.floor(Math.random()*3) +1
    
//     if(randomNumber===1){
//         computerChoice='rock'
//     }
//     if(randomNumber===2){
//         computerChoice="scissors"
//     }
//     if(randomNumber===3){
//         computerChoice="paper"
//     }
//     computerChoiceDisplay.innerHTML=computerChoice
// }

// function getResult(){
//     if(computerChoice === userChoice){
//         result="its a draw!"
//     }
//     if(computerChoice === 'rock' && userChoice === "paper"){
//         result="you win!"
//     }
//     if(computerChoice === 'rock' && userChoice === "scissors"){
//         result="you lost!"
//     }
//     if(computerChoice === 'paper' && userChoice === "rock"){
//         result="you lost!"
//     }
//     if(computerChoice === 'paper' && userChoice === "scissors"){
//         result="you win!"
//     }
//     if(computerChoice === 'scissors' && userChoice === "rock"){
//         result="you win!"
//     }
//     if(computerChoice === 'scissors' && userChoice === "paper"){
//         result="you lost!"
//     }
//     resultDisplay.innerHTML=result
// }
