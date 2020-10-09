'use strict';
//Username Question 
var username = prompt('What is your name?');
console.log('Hello ' + username);
var pointTotal = 0;

// //Q1
function questionOne() {
    var myName = prompt('Is my name Ceylin?').toLowerCase();
    console.log(myName);
    if (myName === 'yes' || myName === 'y') {
        alert('Yes it is, all day EVERYDAY :)')
        pointTotal++;
    } else if (myName === 'no' || myName === 'n') {
        alert('It is Indeed, but nice try!');
    }
}
questionOne();

//Q2
function questionTwo() {
    var homeLocation = prompt('Am I from Atlanta?').toLowerCase();
    if (homeLocation === 'yes' || homeLocation === 'y') {
        alert('Yes! I am from Atlanta')
        pointTotal++;
    } else if (homeLocation === 'no' || homeLocation === 'n') {
        alert('Actually I am!')
    }
}
questionTwo();

//console.log('You are correct' + homeLocation 'is my hometown');
//Q3
function questionThree() {
    var favColor = prompt('Is my favorite color yellow?').toLowerCase();
    if (favColor === 'no' || favColor === 'n') {
        alert('Nope not even close')
    } else if (favColor === 'yes' || favColor === 'y') {
        alert('You are correct, it is purple though!')
        pointTotal++;
    }
}
questionThree();

//console.log('Nope' + favColor + 'is not my favorite color')
//Q4
function questionFour() {
    var compType = prompt('Do I use a Mac?').toLowerCase();
    if (compType === 'no' || compType === 'n') {
        alert('Right because I use Windows')
        pointTotal++;
    } else if (compType === 'yes' || compType === 'y') {
        alert('Try Again :(');
    }
}
questionFour();

// console.log (compType + 'I have a Windows machine')
//Q5

function questionFive() {
    var favAnimal = prompt('Is my most favorite animal in the world, an Elephant?').toLowerCase();
    if (favAnimal === 'yes' || favAnimal === 'y') {
        alert('Absolutely, they are the best!');
        pointTotal++;
    } else if (favAnimal === 'no' || favAnimal === 'n') {
        alert('Are you kidding, Elephants are fantastic!');
    }
}

questionFive();

//Q6

function questionSix() {
    var tries = 0; //is this necessary?  how will we use it?
    var guessNumber = 4;  // correct answer
    var correctGuess = false;
    while (tries < 4 && !correctGuess) {
        tries++;
        var guessGame = parseInt(prompt('I\'m thinking of a number between 0 and 15. Can you take a guess?'));
        console.log(typeof guessGame, guessGame);
        if (guessGame < guessNumber) {
            alert(`Sorry ${username} that guess is too low`);
        } else if (guessGame > guessNumber) {
            alert(`Aw fiddlesticks ${username} that guess is too high!`);
        } else if (guessGame === 4) {
            alert(`Correct ${username} !`);
            correctGuess = true;
            pointTotal++;
        }
    }
    if (!correctGuess) {
        alert(`you're out of guesses, the correct answer was ${guessNumber}`);
    }
}
questionSix();

//Q7

function questionSeven(){
var whatCountry = ['tulum', 'panama', 'canada', 'hawaii', 'maldives', 'bora bora'];
var guessAnswer = prompt(' Can you guess what places  I want to vist?').toLowerCase();
var attemptsRemaining = 6;
var answeredCorrect = false;
var myArray = [1, 2, 3, 4, 5, 6, 7, 8];
while (attemptsRemaining > 0 && !answeredCorrect) {
    attemptsRemaining--;
    for (var i = 0; i < whatCountry.length; i++) {
        if (guessAnswer === whatCountry[i]) {
            answeredCorrect = true;
            alert(`I would like to travel to ${guessAnswer}`);
            pointTotal++;
        }
    }
    if (attemptsRemaining > 0 && !answeredCorrect) {
        guessAnswer = prompt('Sorry that wasn\'t a correct answer please try again!').toLowerCase();
    }
    if (attemptsRemaining === 0 && !answeredCorrect) {
        alert(`Sorry you lose! Thanks for trying ${username}, the correct places are 'Tulum', 'Panama', 'Canada', 'Hawaii', 'Maldives', 'Bora Bora'`);
    }
}
}
questionSeven();

alert(`How did you do? You got ${pointTotal} points!`);
alert(`Good day ${username}, I am happy you stopped by!`);