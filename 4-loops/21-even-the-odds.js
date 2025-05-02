// Even The Odds 2️⃣
// Codédex

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i)
  if (i === 42) {
    break
  }
}
