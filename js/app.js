'use strict';

//Username Question 
var username = prompt('What is your name?');
console. log( 'Hello ' + username);

var pointTotal = 0


//Q1
var myName = prompt('Is my name Ceylin?').toLowerCase();
console.log (myName)


if (myName === 'yes'){
    alert('Yes it is, all day EVERYDAY :)')
} else if (myName === 'no'){
    alert('It is Indeed, but nice try!');
    pointTotal++;
}



//Q2
var homeLocation = prompt('Am I from Atlanta?').toLowerCase();

if(homeLocation === 'yes' || homeLocation === 'y'){
    alert('Yes! I am from Atlanta')
}else if (homeLocation === 'no' || homeLocation ==='No' )
    {alert('Actually I am!')
    pointTotal++;
}

//console.log('You are correct' + homeLocation 'is my hometown');

//Q3
var favColor = prompt('Is my favorite color yellow?').toLowerCase();

if(favColor === 'no'){
    alert('Nope not even close')
}else if (favColor === 'yes')
    {alert( 'You are correct, it is purple though!')
    pointTotal++;
}

//console.log('Nope' + favColor + 'is not my favorite color')

//Q4
var compType = prompt ('Do I use a Mac?').toLowerCase();

if(compType === 'no' ){
    alert('Right because I use Windows')
} else if ( compType === 'yes' || compType === 'y' )
    {alert('Try Again :(')
    pointTotal++;
}

// console.log (compType + 'I have a Windows machine')

//Q5

var favAnimal = prompt ('Is my most favorite animal in the world, an Elephant?').toLowerCase();

if ( favAnimal === 'yes') {
    alert('Absolutely, they are the best!');
} else if (favAnimal === 'no' || favAnimal === 'NO') {
    alert('Are you kidding, Elephants are fantastic!');
    pointTotal++;
}


//Q6


var tries = 0
var guessNumber = 4
var correctGuess= false;

while (tries < 3 && !correctGuess){
    var guessGame = prompt('I\'m thinking of a number between 0 and 15. Can you take a guess?')

if (guessGame < 3){
    alert(`Sorry ${username} that guess is too low`)
} else if (guessGame > 5) {
alert(`Aw fiddlesticks ${username} that guess is too high!`)
} else if ( guessGame === '4') {
    alert(`Correct ${username} !`) 
    correctGuess = true;
}
}


//Q7

var whatCountry = ['Tulum','Panama', 'Canada', 'Hawaii','Maldives','Bora Bora'];
var guessAnswer = prompt(' Can you guess what country I want to vist?');
var attemptsRemaining = 6;
var answeredCorrect = false;

while (attemptsRemaining > 0 && !answeredCorrect) {
    attemptsRemaining--;
    for (var i = 0; i < whatCountry.length; i++) { 
        if (guessAnswer === whatCountry[i]) {
            answeredCorrect = true;
            alert(`I would like to travel to ${guessAnswer}`);  
        }
    }
    if (attemptsRemaining > 0 && !answeredCorrectly) {
            guessAnswer = prompt('Sorry that wasn\'t a correct answer please try again!');
          }
          if (attemptsRemaining === 0 && !answeredCorrectly) {
            alert ('Sorry you lose!')
          }
        }


alert (`How did you do? You got ${pointTotal}!`)

alert ( `Good day ${username}, I am happy you stopped by!`)