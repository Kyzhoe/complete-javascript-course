'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const updateScore = function (message) {
  document.querySelector('.score').textContent = message;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Reset values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  updateScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#1e6e05';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      updateScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      updateScore(0);
    }
  }
});
