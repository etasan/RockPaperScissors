const playerButton = document.querySelectorAll(".buttons button");
const roundOutput = document.querySelector(".outcome p");
const scoreDisplayP = document.querySelector(".pScore");
const scoreDisplayC = document.querySelector(".cScore");
const imagePlayer = document.querySelector(':root');
const gameOver = document.querySelector('.gameover');
const gameOutput = document.querySelector('.outcome_text');
const background = document.querySelector('.background');
const resetButton = document.querySelector(".reset"); 


(Array.from(playerButton)).forEach(a => a.addEventListener('click', play));

function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random()*rps.length)];
    return random;
}

let playerSelection = '';
let computerScore = 0;
let playerScore = 0;
let playerWinRound = "Bu turu sen kazandın!";
let computerWinRound = "Bu turu bilgisayar kazandı!";
let draw = "Berabere! Tekrar deneyin!";
let playerWin = "Oyunu sen kazandın!";
let computerWin = "Oyunu bilgisayar kazandı!"

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return roundOutput.innerHTML = `${draw}`;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return roundOutput.innerHTML = `${playerWinRound}`;
            
        } else if (computerSelection === "paper") {
            return roundOutput.innerHTML = `${computerWinRound}`;            
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return roundOutput.innerHTML = `${playerWinRound}`;
            
        } else if (computerSelection === "scissors") {
            return roundOutput.innerHTML = `${computerWinRound}`; 
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return roundOutput.innerHTML = `${computerWinRound}`;

        } else if (computerSelection === "paper") {
            return roundOutput.innerHTML = `${playerWinRound}`; 
            
        }
    }
}

function setImageP(playerSelection) {
    
    if (playerSelection === "rock") {
        imagePlayer.style.setProperty('--imageP', 'url(images/Rock.png)');
    } else if (playerSelection === 'paper') {
        imagePlayer.style.setProperty('--imageP', 'url(images/Paper.png)');
    } else {
        imagePlayer.style.setProperty('--imageP', 'url(images/Scissors.png)');
    }
}

function setImageC(computerSelection) {

    if (computerSelection === "rock") {
        imagePlayer.style.setProperty('--imageC', 'url(images/Rock.png)');
    } else if (computerSelection === 'paper') {
        imagePlayer.style.setProperty('--imageC', 'url(images/Paper.png)');
    } else {
        imagePlayer.style.setProperty('--imageC', 'url(images/Scissors.png)');
    }
}

function play() {
    let playerSelection = this.value;
    setImageP(playerSelection);
    let computerSelection = computerPlay();
    setImageC(computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    gameScore(roundResult);
    scoreDisplayP.innerHTML = `<span>Senin Skorun:</span> ${playerScore}`;
    scoreDisplayC.innerHTML = `<span>Bilgisayar Skoru:</span> ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        gameOver.classList.add('active');
        background.classList.add('active');
    }
};

function gameScore(roundResult) {
    if (roundResult === playerWinRound) {
        playerScore++;
    }   else if (roundResult === computerWinRound) {
        computerScore++;
    }

    if (playerScore === 5) {
        return gameOutput.innerHTML = `Oyunu sen kazandın!`;
    
    } else if (computerScore === 5) {
        return gameOutput.innerHTML = `Oyunu bilgisayar kazandı!`;
    }
}

function resetGame() {
    gameOver.classList.remove('active');
    background.classList.remove('active');
    playerSelection = '';
    computerScore = 0;
    playerScore = 0;
    scoreDisplayP.innerHTML = `<span>Senin Skorun:</span> ${playerScore}`;
    scoreDisplayC.innerHTML = `<span>Bilgisayar Skoru:</span> ${computerScore}`;
    imagePlayer.style.setProperty('--imageC', '');
    imagePlayer.style.setProperty('--imageP', '');
    roundOutput.innerHTML = ``;
}

resetButton.addEventListener('click', resetGame);
