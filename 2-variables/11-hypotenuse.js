// Pythagorean Theroem 📐
// Codédex
'use strict'
//added the readkine package to make a good interface to user input and the input function is not supported
// and renamed the file name according to its correct numbering
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a: ", (a) => {
    rl.question("Enter b: ", (b) => {
        a = parseFloat(a);
        b = parseFloat(b);

        if (!isNaN(a) && !isNaN(b)) {
            const c = Math.sqrt(a * a + b * b);
            console.log(`c = ${c}`);
        } else {
            console.log("Please enter valid numbers for a and b.");
        }

        rl.close();
    });
});
