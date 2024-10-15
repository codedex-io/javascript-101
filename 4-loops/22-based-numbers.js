// Based Numbers ⫴
// Codédex

const myNumber = 30;
let binary = "";

// With for loop
for (let i = myNumber; i >= 1 ; i = Math.floor(i/2)) {
  if (i % 2 == 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }
}
console.log('With for loop: ' + binary);

// With while loop
let i = myNumber;
binary = "";
while (i >= 1) {
  if (i % 2 == 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }

  i = Math.floor(i/2);
}

console.log('With while loop: ' + binary);
