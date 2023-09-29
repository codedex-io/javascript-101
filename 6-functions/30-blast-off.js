// Blast Off 🚀
// Codédex

function countdown() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
  
  return "Blast Off! 🚀";
}

console.log(countdown());