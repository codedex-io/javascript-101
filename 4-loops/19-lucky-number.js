// Lucky Number 🍀
// Codédex

const luckyNumber = Math.floor(Math.random() * 10) + 1;
let guess = Math.floor(Math.random() * 10) + 1;

while (guess != luckyNumber) {
  console.log(`${guess} is not it.`)
  let guess = Math.floor(Math.random() * 10) + 1;
}

console.log(`You got it! The lucky number was ${luckyNumber}`);