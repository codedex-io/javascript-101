// DNA 🧬
// Codédex

const dnaPieces = ["A", "C", "G", "T"];

const myDNA = []

for (let i = 0; i < 24; i++) {
    const pieceOne = Math.floor(Math.random() * dnaPieces.length);
    const pieceTwo = Math.floor(Math.random() * dnaPieces.length);
    const pieceThree = Math.floor(Math.random() * dnaPieces.length);
    
    myDNA.push(dnaPieces[pieceOne] + dnaPieces[pieceTwo] + dnaPieces[pieceThree]);
}

console.log(myDNA);