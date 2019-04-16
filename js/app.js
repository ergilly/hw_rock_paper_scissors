document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');

  const RockButton = document.querySelector('#rock');
  RockButton.addEventListener('click', () => {
    const resultText = document.querySelector('#players-choice');
    resultText.textContent = 'Player Picks: Rock'

    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "Rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "Paper";
    } else {
      computerChoice = "Scissors";
    }

    const compResult = document.querySelector('#computers-choice')
    compResult.textContent = `Computer Picks: ${computerChoice}`

    let winner;
    if (computerChoice === "Rock") {
      const result = document.querySelector('#result');
      result.textContent = 'It\'s a draw! Better luck next time'
    } else if (computerChoice === "Paper") {
      const result = document.querySelector('#result');
      result.textContent = 'The Computer Wins, BOO!!!'
    }else {
      const result = document.querySelector('#result');
      result.textContent = 'The Player Wins!!! YAY!!!'
    }
  });
  const PaperButton = document.querySelector('#paper');
  PaperButton.addEventListener('click', () => {
    const resultText = document.querySelector('#players-choice');
    resultText.textContent = 'Player Picks: Paper'

    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "Rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "Paper";
    } else {
      computerChoice = "Scissors";
    }

    const compResult = document.querySelector('#computers-choice')
    compResult.textContent = `Computer Picks: ${computerChoice}`

    let winner;
    if (computerChoice === "Rock") {
      const result = document.querySelector('#result');
      result.textContent = 'The Player Wins!!! YAY!!!'
    } else if (computerChoice === "Paper") {
      const result = document.querySelector('#result');
      result.textContent = 'It\'s a draw! Better luck next time'
    }else {
      const result = document.querySelector('#result');
      result.textContent = 'The Computer Wins, BOO!!!'
    }
  });
  const ScissorsButton = document.querySelector('#scissors');
  ScissorsButton.addEventListener('click', () => {
    const resultText = document.querySelector('#players-choice');
    resultText.textContent = 'Player Picks: Scissors'

    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "Rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "Paper";
    } else {
      computerChoice = "Scissors";
    }

    const compResult = document.querySelector('#computers-choice')
    compResult.textContent = `Computer Picks: ${computerChoice}`

    let winner;
    if (computerChoice === "Rock") {
      const result = document.querySelector('#result');
      result.textContent = 'The Computer Wins, BOO!!!'
    } else if (computerChoice === "Paper") {
      const result = document.querySelector('#result');
      result.textContent = 'The Player Wins!!! YAY!!!'
    }else {
      const result = document.querySelector('#result');
      result.textContent = 'It\'s a draw! Better luck next time'
    };
  });
});



// const button = document.querySelector('#button');
// button.addEventListener('click', handleButtonClick);
//
// const handleButtonClick = function () {
// const resultParagraph = document.querySelector('#button-result');
// resultParagraph.textContent = 'That button has definitely been clicked.';
