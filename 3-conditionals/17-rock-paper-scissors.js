// Rock Paper Scissors 🫲
// Codédex
'use strict';

// 0 = Rock, 1 = Paper, 2 = Scissors

const player = 2;
const choices = ["Rock", "Paper", "Scissors"];
const computer = Math.floor(Math.random() * 3);

if (player >= 0 && player <= 2) {
  if (player === computer) {
    console.log("Draw");
  } else if ((player + 1) % 3 === computer) {
    console.log("The computer won!");
  } else {
    console.log("The player won!");
  }
} else {
  console.log("An error occurred");
}
