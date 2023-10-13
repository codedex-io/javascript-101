// Lucky Number 🍀
// Codédex
'use strict'
//added the readkine package to make a good interface to user input and the input function is not supported
// and renamed the file name according to its correct numbering
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const luckyNumber = 7;

function playGame() {
  rl.question("Guess the lucky number (between 1 and 10): ", (input) => {
    const guess = parseInt(input);

    if (isNaN(guess) || guess < 1 || guess > 10) {
      console.log("Please enter a valid number between 1 and 10.");
    } else if (guess === luckyNumber) {
      console.log(`You got it! The lucky number was ${luckyNumber}`);
      rl.close();
    } else {
      console.log(`${guess} is not it.`);
      playGame(); // Recursive call to continue the game
    }
  });
}

playGame(); // Start the game
