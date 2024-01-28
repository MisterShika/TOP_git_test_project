class RockPaperScissorsGame {
    constructor(){
        this.playerChoice = '';
        this.computerChoice = '';
        this.playerScore = 0;
        this.computerScore = 0;
        this.winningScore = 5;

        this.gameMessageArea = document.querySelector('#gameMessageArea');
        this.turnMessageArea = document.querySelector('#turnMessageArea');
        this.pScoreArea = document.querySelector('#playerMath');
        this.cScoreArea = document.querySelector('#computerMath');

        this.gameMessageArea.innerHTML = "Make a choice!";
        this.pScoreArea.innerHTML = this.playerScore;
        this.cScoreArea.innerHTML = this.computerScore;
    }

    gameFinish(whoWon){
        this.gameMessageArea.innerHTML = `Game over! ${whoWon} won!`;
        const theButtons = document.querySelectorAll('.choiceBox button');
        theButtons.forEach((element) =>{
            element.disabled = true;
        });
     
    }

    scoreUpdate(isPlayer){
        if(isPlayer === 'player'){
            this.playerScore++;
            this.pScoreArea.innerHTML = this.playerScore;
        }else{
            this.computerScore++;
            this.cScoreArea.innerHTML = this.computerScore;
        }

        if(this.playerScore >= this.winningScore){
            this.gameFinish('You');
        }
        if(this.computerScore >= this.winningScore){
            this.gameFinish('The computer');
        }
    }

    generateComputerChoice(){
        const decision = Math.floor(Math.random() * 3);
        switch (decision) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
    }

    decideOutcome() {
        const playerChoice = this.playerChoice.toLowerCase();
        this.computerChoice = this.generateComputerChoice();

        while(playerChoice === this.computerChoice){
            this.computerChoice = this.generateComputerChoice();
        }

        if(
            (playerChoice === 'rock' && this.computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && this.computerChoice === 'paper') ||
            (playerChoice === 'paper' && this.computerChoice === 'rock')
        ){
            this.scoreUpdate('player');
            return `${playerChoice} beats ${this.computerChoice}. You win!`;
        }
            this.scoreUpdate('computer');
            return `${this.computerChoice} beats ${playerChoice}. You lose!`;
    }

    playRound(playerChoice){
        this.playerChoice = playerChoice;
        this.turnMessageArea.innerHTML = this.decideOutcome();
    }
}
  
const game = new RockPaperScissorsGame();
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

rockButton.onclick = () => {
    game.playRound('rock');
}
paperButton.onclick = () => {
    game.playRound('paper');
}
scissorsButton.onclick = () => {
    game.playRound('scissors');
}