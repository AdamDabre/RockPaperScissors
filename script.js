
function getComputerChoice() {
    let computersNumber = Math.floor(Math.random() * 3);
    let computersChoice = "";
    switch (computersNumber) {
        case 0:
            computersChoice = "Rock";
            break;
        case 1:
            computersChoice = "Paper";
            break;
        case 2:
            computersChoice = "Scissors";
            break;
    }
    return computersChoice;
}

function playRound(computerSelection, playerSelection, scores) {
    let outcomeMessage = document.querySelector("#outcome");
    let usersScore = document.querySelector("#userScore");
    usersScore.innerHTML = scores[0];

    let CompScore = document.querySelector("#CompScore");
    CompScore.innerHTML = scores[1];

    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        outcomeMessage.innerHTML = "It's a draw!";
        return scores;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        scores[0] = (scores[0]) + 1;
        outcomeMessage.innerHTML = "You win! Rock beats Scissors.";
        return scores;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        scores[0] = scores[0] + 1;
        outcomeMessage.innerHTML = "You win! Scissors beats Paper.";
        return scores;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        scores[0] = scores[0] + 1;
        outcomeMessage.innerHTML = "You win! Paper beats Rock.";
        return scores;
    } else {
        scores[1] = scores[1] + 1;
        outcomeMessage.innerHTML = "You lose. " + computerSelection + " beats " + playerSelection + ".";
        return scores;
    }
}

let scores = [0, 0];

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    scores = playRound(computerSelection, "rock", scores);
    if (scores[0] > 6 || scores[1] > 6) {
        scores[0] = 0;
        scores[1] = 0;

    }
    if (scores[0] == 6) {
        let congrats = document.querySelector("#congrats");
        congrats.innerHTML = "Congratulations, you WON!";
        return;
    } else if (scores[1] == 6) {
        let congrats = document.querySelector("#congrats");
        congrats.innerHTML = "You lose ";
        return;
    }
    let outcomeMessage = document.querySelector("#outcome");
    let usersScore = document.querySelector("#userScore");
    usersScore.innerHTML = scores[0];

    let CompScore = document.querySelector("#CompScore");
    CompScore.innerHTML = scores[1];
});
let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    scores = playRound(computerSelection, "paper", scores);
    if (scores[0] > 6 || scores[1] > 6) {
        scores[0] = 0;
        scores[1] = 0;
    }
    if (scores[0] == 6) {
        let congrats = document.querySelector("#congrats");
        congrats.innerHTML = "Congratulations, you WON!";
        return;
    } else if (scores[1] == 6) {
        let congrats = document.querySelector("#congrats");
        congrats.innerHTML = "You lose ";
        return;
    }
    let outcomeMessage = document.querySelector("#outcome");
    let usersScore = document.querySelector("#userScore");
    usersScore.innerHTML = scores[0];

    let CompScore = document.querySelector("#CompScore");
    CompScore.innerHTML = scores[1];
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    scores = playRound(computerSelection, "scissors", scores);
    if (scores[0] > 6 || scores[1] > 6) {
        scores[0] = 0;
        scores[1] = 0;
    }
    if (scores[0] == 6) {
        let congrats = document.querySelector("#congrats");
        congrats.innerHTML = "Congratulations, you WON!";
        return;
    } else if (scores[1] == 6) {
        let congrats = document.querySelector("#congrats");
        congrats.innerHTML = "You lose , Thanks for playing ";
        return;
    }
    let outcomeMessage = document.querySelector("#outcome");

});
