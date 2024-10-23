// Rock Paper Scissors 🫲
// Codédex

// 0 = Rock
// 1 = Paper
// 2 = Scissors

const player = 2;
const computer = Math.floor(Math.random() * 3);

if(player < 0 || player > 2 || computer < 0 || computer > 2){
  console.log("An error occurred");
} else if (player === 0) {
  if (computer == 0) {
    console.log("Draw");
  } else if (computer === 1) {
    console.log("The computer won!");
  } else if (computer === 2) {
    console.log("The player won!");
  } 
} else if (player === 1) {
  if (computer === 0) {
    console.log("The player won!");
  } else if (computer === 1) {
    console.log("Draw");
  } else if (computer === 2) {
    console.log("The computer won!");
  } 
} else if (player === 2) {
  if (computer === 0) {
    console.log("The computer won!");
  } else if (computer === 1) {
    console.log("The player won!");
  } else if (computer === 2) {
    console.log("Draw");
  } 
}