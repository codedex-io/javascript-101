// Rock Paper Scissors 🫲
// Codédex

// 0 = Rock
// 1 = Paper
// 2 = Scissors

const player = 0;
const computer = Math.floor(Math.random() * 3);

const choices = ["Rock", "Paper", "Scissors"];

console.log(`Player picked:      ${choices[player]}`);
console.log(`Computer picked:    ${choices[computer]}`);
console.log(""); 

if (player === 0) {
  if (computer === 0) {
    console.log("Draw");
  } else if (computer === 1) {
    console.log("The computer won!");
  } else if (computer === 2) {
    console.log("The player won!");
  } else {
    console.log("An error occurred");
  }
} else if (player === 1) {
  if (computer === 0) {
    console.log("The player won!");
  } else if (computer === 1) {
    console.log("Draw");
  } else if (computer === 2) {
    console.log("The computer won!");
  } else {
    console.log("An error occurred");
  }
} else if (player === 2) {
  if (computer === 0) {
    console.log("The computer won!");
  } else if (computer === 1) {
    console.log("The player won!");
  } else if (computer === 2) {
    console.log("Draw");
  } else {
    console.log("An error occurred");
  }
} else {
  console.log("An error occurred");
}
