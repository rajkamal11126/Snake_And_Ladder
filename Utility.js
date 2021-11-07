
//constant
const NO_PLAY = 0;
const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;
let playerPosition = 0

//method to dice roll
const diceRoll = () => {
    let rollDie = Math.floor(Math.random() * 10) % 6 + 1;
    return rollDie;
}

// Method to check option 
const startPlaying = () => {
    let count = 0;
    while (playerPosition < 100) {
        let option = Math.floor(Math.random() * 10) % 3;
        switch (option) {
            case NO_PLAY:
                playerPosition = playerPosition;
                count++;
            case LADDER:
                if ((playerPosition + diceRoll()) <= 100) {
                    playerPosition = playerPosition + diceRoll()
                };
                count++;
            case SNAKE:
                playerPosition = playerPosition - diceRoll();
                count++;
        }
       // console.log(count + " " + playerPosition);
    }
}
 
//To get multiplayer win
const multiplePlayer = () => {
    let player1DieCount = startPlaying();
    let player2DieCount = startPlaying();

    if (player1DieCount < player2DieCount)
        console.log("Player 1 win");
    else
        console.log("Player 1 win");
}
module.exports = { multiplePlayer };
