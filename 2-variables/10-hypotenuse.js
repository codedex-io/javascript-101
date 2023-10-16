// Pythagorean Theroem 📐
// Codédex
'use strict'
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a: ", function (a) {
    rl.question("Enter b: ", function (b) {
        const c = Math.sqrt(a * a + b * b);
        console.log(`The hypotenuse (c) is: ${c}`);
        rl.close();
    });
});

