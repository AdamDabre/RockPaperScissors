
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
    let usersScore = document.querySelector("#userScore");
    usersScore.innerHTML = scores[0];

    let CompScore = document.querySelector("#CompScore");
    CompScore.innerHTML = scores[1];
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        let congrats = document.querySelector("#congrats");
        congrats.innerHTML = "Draw!";
        return scores;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        scores[0]++;
        console.log(scores[0], scores[1]);
        return scores;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        scores[0]++;
        console.log(scores[0], scores[1]);
        return scores;
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        scores[0]++;
        console.log(scores[0], scores[1]);
        return scores;
    }
    else {
        scores[1]++;
        console.log(scores[0], scores[1]);
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
});
let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, "paper", scores);
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, "scissors", scores);
});
