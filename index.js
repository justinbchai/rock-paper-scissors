function getComputerChoice() {
    let random = Math.random() * 3;
    if (random <= 1) {
        return 'Rock';
    } else if (random <= 2) {
        return 'Paper';
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let input = prompt('Type \'rock\', \'paper\', or \'scissors\'.');
    input = input.toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);
    return input;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {

            // tie
            feed.append(`Tie! You both picked ${humanChoice}.`, document.createElement('br'));
        
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper' ||
            humanChoice === 'Paper' && computerChoice === 'Scissors' ||
            humanChoice === 'Scissors' && computerChoice === 'Rock') {

            // human lost
            computerScore++;
            feed.append(`You lost! ${computerChoice} beats ${humanChoice}.`, document.createElement('br'));

        } else if (computerChoice === 'Rock' && humanChoice === 'Paper' ||
            computerChoice === 'Paper' && humanChoice === 'Scissors' ||
            computerChoice === 'Scissors' && humanChoice === 'Rock') {

            // human won
            humanScore++;
            feed.append(`You won! ${humanChoice} beats ${computerChoice}.`, document.createElement('br'));

        } else {
            feed.append('Oops, something went wrong!!', document.createElement('br'));
        }
    }

    const scorecard = document.querySelector('.scorecard');
    const feed = document.querySelector('.feed')

    let humanScore = 0;
    let computerScore = 0;

    scorecard.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            playRound(button.textContent, getComputerChoice());
            scorecard.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`
        });
    });

    
}

addEventListener('load', playGame);
