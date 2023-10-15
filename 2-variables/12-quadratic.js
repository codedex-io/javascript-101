/**
 *  Quadratic Formula 🧮
# Codédex */
'use strict'
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a: ", function (a) {
    rl.question("Enter b: ", function (b) {
        rl.question("Enter c: ", function (c) {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            const discriminant = b * b - 4 * a * c;
            if (discriminant < 0) {
                console.log("No real roots");
            } else {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                console.log(`Root 1: ${root1}`);
                console.log(`Root 2: ${root2}`);
            }

            rl.close();
        });
    });
});
