'use strict'; // Är global och hindrar dig från att använda odeklarerade variabler
let secretNumber = Math.trunc(Math.random() * 100) + 1; // Skapar ett tal mellan 1 till 100
 let score = 100;
 let highscore = 0;

 const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
 }

 document.querySelector('.check').addEventListener('click', () => {
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess) {
        displayMessage('No Number');
    } else if(guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#64b347'
        document.querySelector('.number').style.width = '15rem';
    }
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Too High! ' : 'Too Low! ');
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            displayMessage('You Lost The Game !');
            document.querySelector('.score').textContent = 0;
        }
    }
 });
 
 document.querySelector('.again').addEventListener('click', () => {
    score = 100;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
 });