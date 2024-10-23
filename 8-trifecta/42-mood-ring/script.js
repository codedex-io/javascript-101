// Mood Ring 💍
// Codédex

const stone = document.getElementById('stone');

const randomNumber = Math.floor(Math.random() * 10) + 1;

const colors = ["red", "orange", "yellow", "green", "blue", "#4169e1", "#00008b", "purple", "black"];

if(randomNumber > 8 || randomNumber < 0){
  stone.style.backgroundColor = colors[8];
} else{
  stone.style.backgroundColor = colors[randomNumber-1];
}
