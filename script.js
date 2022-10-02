'use strict'; // Är global och hindrar dig från att använda odeklarerade variabler
let secretNumber = 5;//* Math.trunc(Math.random() * 100) + 1; // Skapar ett tal mellan 1 till 100

let tries = 0;
let triesLeft = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess= Number(document.querySelector('.guess').value); //! Konstigt nog går det att skriva in 'E, e'.
    console.log(guess, typeof guess);
    if(!guess) { //! Kollar bara EN gång om man har skrivit in någon siffra och efter att man trycker på Again så funkar den inte.
        displayMessage('No Number');

    } else if(guess === secretNumber) { // Om du gissar rätt Secret Number

        displayMessage('Correct Number!');
        //tries = 1; //! Tries: Om man gissar rätt på första försöket står det Tries: 1. Men om jag vunnit efter ett antal försök står det Tries: 1.
        tries++; //! Tries: fortstätter räkna upp efter varje klick även om du har vunnit.
        document.querySelector('.tries').textContent = tries;
        //! Om man gissar rätt på första försöket så står det Tries: 0.
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#64b347';
        document.querySelector('.number').style.width = '15rem';
        
    } //  [20]        [0]    <--- Innan spelet startar är detta deras värden.
    if(triesLeft > highscore) { //! Funkar inte, men om jag tar bort denna så funkar inte spelet alls.
        highscore = triesLeft; //todo Tanken är att highscore ska spara hur många försök det tog att vinna och ändras när vinsten tar mindre försök.
        document.querySelector('.highscore').textContent = highscore;
        
    }
    else if(guess !== secretNumber) { // Om det gissade numret inte är rätt

        if(triesLeft > 1) {
            displayMessage(guess > secretNumber ? 'Too High! ' : 'Too Low! ');
            triesLeft--; // Loop räknar ner
            tries++; // Loop räknar upp
            document.querySelector('.triesLeft').textContent = triesLeft;
            document.querySelector('.tries').textContent = tries;
        }else {
            displayMessage('You Lost The Game !'); // Om du använder upp alla försök så blir det förlust
            document.querySelector('.tries').textContent = 20;
            document.querySelector('.triesLeft').textContent = 0;

            document.querySelector('body').style.backgroundColor = '#b31b1b';
        }
    }
});
// Again knappen för att starta om spelet
document.querySelector('.again').addEventListener('click', () => {
    tries = 0;
    triesLeft = 20;
    secretNumber = 5; //* Math.trunc(Math.random() * 100) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.triesLeft').textContent = triesLeft;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});