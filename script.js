const generateRPS = () => {
    const theDecision = Math.floor(Math.random() * 3)
    switch (theDecision){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

const decideOutcome = (playerInput, computerInput) => {
    let playerChoice = playerInput.toLowerCase();
    let computerChoice = computerInput;
    if(playerChoice === computerInput){
        computerChoice = generateRPS()
        decideOutcome(playerChoice, computerChoice)
    }
    if(playerChoice === 'rock'){
        if(computerInput === 'scissors'){
            return "Rock beats scissors. You win!"
        }
        return "Paper beats rock. You lose!"
    }
    if(playerChoice === 'scissors'){
        if(computerInput === 'papers'){
            return "Scissors beats paper. You win!"
        }
        return "Rock beats scissors. You lose!"
    }
    if(playerChoice === 'paper'){
        if(computerInput === 'rock'){
            return "Paper beats rock. You win!"
        }
        return "Scissors beats paper. You lose!"
    }
}

const playRound = (playNumber) => {
    for(let i = 0; i < playNumber; i++){
        console.log(decideOutcome(prompt("Rock, Paper, Scissors?"), generateRPS()))
    }
}

playRound(5)