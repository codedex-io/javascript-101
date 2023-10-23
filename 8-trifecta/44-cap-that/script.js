// Cap That 🤪
// Codédex

const memeArray = [
  "./images/evil-kermit.png",
  "./images/eddie-murphy-thinking.png",
  "./images/futurama-fry.png",
  "./images/confused-person.png"
];

const captionArray = [
  "I am a level 60 on inferno mode!",
  "Voted most likely to change the world.",
  "Get this hair off my head!",
  "Oooh that must have hurt."
];

const generatorButton = document.getElementById("generator-button");
const randomMeme = document.getElementById("random-meme");
const randomCaption = document.getElementById("random-caption");

generatorButton.addEventListener("click", function() {
  const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
  const randomCaptionIndex = Math.floor(Math.random() * captionArray.length);

  randomMeme.src = memeArray[randomMemeIndex];
  randomCaption.innerText = captionArray[randomCaptionIndex];
})