let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options =["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
} 
const drawGame = () => {
    console.log("game was draw")
    msg.innerText = ("Game was draw! Play Again");
    msg.style.backgroundColor = "#081b31";
} 
const showWinner = (userWin) => {
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = 'You win!' ;
    msg.style.backgroundColor = "green";
}else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
    msg.innerText = 'You loss!' ;
    msg.style.backgroundColor = "red";
}
}



const playGame = (userChoice) => {
    console.log("user choice = " , userChoice)
    const compChoice = genCompChoice();
    console.log( "computer  Choice = " ,compChoice);

    if(userChoice === compChoice){
        drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper"){
      userWin = compChoice === "scissor"? false : true;
    }else{
        userWin = compChoice === "paper" ?false : true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("played" , userChoice)
        playGame(userChoice);


    
    });
});

