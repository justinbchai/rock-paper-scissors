function getComputerChoice() {
    let random = Math.random() * 3;
    console.log(random);
    if (random <= 1) {
        return 'rock';
    } else if (random <= 2) {
        return 'paper';
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt('Type \'rock\', \'paper\', or \'scissors\'.');
    input = input.toLowerCase();
    return input;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if(humanChoice === computerChoice) {
        // tie
        console.log(`Tie! You both picked ${humanChoice}.`)
    } else if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock'){
        // human lost
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
    } else if (computerChoice === 'Rock' && humanChoice === 'Paper' || computerChoice === 'Paper' && humanChoice === 'Scissors' || computerChoice === 'Scissors' && humanChoice === 'Rock'){
        // human won
        humanScore++;
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    } else {
        console.log('Oops, something went wrong!!')
    }
}

let humanScore = 0;
let computerScore = 0;

