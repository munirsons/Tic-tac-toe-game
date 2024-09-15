let totalScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#comp-score");


let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id");
        playGame(userChoise);
    });
});


let playGame = (userChoice) => {
    console.log("user choised =", userChoice);
    
    // Generate the computer choice.
    let compChoice = genCompChoice();
    console.log("compChoice is =", compChoice);
    
    if (userChoice === compChoice) {
        // Draw condition (function)
        drawGame();
    } 
        else {
        let userWin = true;
        
        if (userChoice === "rock") {
            // Now compChoice must be paper or scissor
            userWin = compChoice === "paper" ? false : true;
        }
         else if (userChoice === "paper") {
            // Now compChoice must be scissor or rock
            userWin = compChoice === "scissor" ? false : true;
        }
         else {
            // Now the user choice must be scissor
            // And the computer choice must be rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userWin);
    }
};


const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game is Draw.";
};


const showWinner = (userWin) =>{
    if( userWin){
        console.log("You Win");
        msg.innerText ="You Win!";
        userScore++;
    }
    else{
        console.log("You lose");
msg.innerText= "You Lose.";
compScore++;
}
totalScore.innerHTML = userScore;
computerScore.innerHTML = compScore;
};


const genCompChoice = () =>{
     // total choises sre 3 which is Rock, Paper, Sicssor.
     const options= ["rock", "paper", "sicssor"];
     let randomIdx = Math.floor(Math.random()*3);
     return options[randomIdx];
};
let msg = document.querySelector(".msg-box");

