// Quadratic Formula 🧮
// Codédex
'use strict'
//added the readkine package to make a good interface to user input and the input function is not supported
// and renamed the file name according to its correct numbering

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a: ", (aInput) => {
    rl.question("Enter b: ", (bInput) => {
        rl.question("Enter c: ", (cInput) => {
            const a = parseFloat(aInput);
            const b = parseFloat(bInput);
            const c = parseFloat(cInput);

            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
                const discriminant = b * b - 4 * a * c;

                if (discriminant > 0) {
                    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

                    console.log("Root 1:", root1);
                    console.log("Root 2:", root2);
                } else if (discriminant === 0) {
                    const root1 = -b / (2 * a);
                    console.log("Root 1 (Double Root):", root1);
                } else {
                    console.log("No real roots (Complex Roots)");
                }
            } else {
                console.log("Please enter valid numbers for a, b, and c.");
            }

            rl.close();
        });
    });
});
