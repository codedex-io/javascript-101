// Magic 8 Ball 🎱
// Codédex
'use strict';
//imporved the code look
const question = "Put question string here";

const answers = [
  'Yes - definitely',
  'It is decidedly so',
  'Without a doubt',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

const randomNumber = Math.floor(Math.random() * answers.length);
const answer = answers[randomNumber];

console.log("Question: ", question);
console.log("Answer:   ", answer);
