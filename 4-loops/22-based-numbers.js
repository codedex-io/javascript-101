// Based Numbers ⫴
// Codédex
'use strict'

const myNumber = 30;
let binary = "";

// With for loop
for (let i = myNumber; i >= 1 ; i = Math.floor(i/2)) {
  if (i % 2 == 0) {
    binary = "0" + binary
  } else {
    binary = "1" + binary;
  }
}

// With while loop
while (myNumber >= 1) {
  if (i % 2 == 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }
  
  i = Math.floor(i/2);
}