// Music Playlist 🎵
// Codédex

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

// Remove first element
musicPlaylist.shift();
console.log(musicPlaylist);

// Remove last element
musicPlaylist.pop();
console.log(musicPlaylist);

// Add to end of array
musicPlaylist.push("Blue (Da Ba Dee)");
console.log(musicPlaylist);

// Add to start of array
musicPlaylist.unshift("Gangnam Style", "Harlem Shake");
console.log(musicPlaylist);
