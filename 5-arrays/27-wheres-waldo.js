// Where's Waldo 🔍
// Codédex

const characters = ["The Wally Watchers", "Wilma", "Fritz", "Wizard Whitebeard", "Odlaw", "Waldo", "Woof"];

if (characters.includes("Waldo")) {
  const waldoIndex = characters.indexOf("Waldo");
  console.log("Found Waldo at index " + waldoIndex);
} else {
  console.log("Not Found");
}