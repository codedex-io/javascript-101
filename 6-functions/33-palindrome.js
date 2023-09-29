// Palindrome ↔️
// Codédex

function isPalindrome(word) {
  let reversedWord = "";
  
  let lowerCaseWord = word.toLowerCase();
  
  for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
    reversedWord += lowerCaseWord[i];
  }
  
  return reversedWord == lowerCaseWord;
}

console.log(isPalindrome("Racecar"));