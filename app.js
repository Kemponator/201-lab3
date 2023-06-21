"use strict";

console.log("Test console log");

let points = 0;

alert("Welcome to my guessing game");

// question 6
// create a number that the user has to guess (if you can make it random)
// Ask the user to guess a number and that they have 3 attempts
// allow the user to have 3 attempts, it may be best to countdown rather than up.
// if the user has 0 attempts left alert them to tell them.
// if they guess to low let them know the number was to low
// if the number was to high let them know the number is to high
// if the guess is not to low and not to high give the user a point, alert them to congratulate them and the stop the code running using break

// const number = "7";
const number = Math.floor(Math.random() * 10 + 1);
console.log(number);

for (let i = 2; i >= 0; i--) {
  const guesses = i + 1;

  const guess = prompt(
    "Guess a number between 1 and 10! You have " + guesses + " attempts"
  );

  const guessNum = parseInt(guess);

  if (guessNum === number) {
    // console.log("You win");
    alert("Well done the correct number was " + number);
    break;
  } else if (guessNum > number) {
    // console.log("to high");
    alert("Your guess was to high");
  } else if (guessNum < number) {
    // console.log("to low");
    alert("Your guess was to low");
  }

  if (i === 0) {
    alert("The correct number was " + number);
    break;
  }
}
