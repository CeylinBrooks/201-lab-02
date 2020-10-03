'use strict';

//Username Question 
var username = prompt('What is your name?');
console. log( 'Hello ' + username);

//Q1
var myName = prompt('Is my name Ceylin?').toLowerCase();
console.log (myName)


if (myName === 'yes'){
    alert('Yes it is, all day EVERYDAY :)')
} else if (myName === 'no'){
    alert('It is Indeed, but nice try!');
}



//Q2
var homeLocation = prompt('Am I from Atlanta?').toLowerCase();

if(homeLocation === 'yes' || homeLocation === 'y'){
    alert('Yes! I am from Atlanta')
}else if (homeLocation === 'no' || homeLocation ==='No' )
    {alert('Actually I am!')}

//console.log('You are correct' + homeLocation 'is my hometown');

//Q3
var favColor = prompt('Is my favorite color yellow?').toLowerCase();

if(favColor === 'no'){
    alert('Nope not even close')
}else if (favColor === 'yes')
    {alert( 'You are correct, it is purple though!')}

//console.log('Nope' + favColor + 'is not my favorite color')

//Q4
var compType = prompt ('Do I use a Mac?').toLowerCase();

if(compType === 'no' ){
    alert('Right because I use Windows')
} else if ( compType === 'yes' || compType === 'y' )
    {alert('Try Again :(')}

// console.log (compType + 'I have a Windows machine')

//Q5

var favAnimal = prompt ('Is my most favorite animal in the world, an Elephant?').toLowerCase();

if ( favAnimal === 'yes') {
    alert('Absolutely, they are the best!');
} else if (favAnimal === 'no' || favAnimal === 'NO') {
    alert('Are you kidding, Elephants are fantastic!');
}


//Q6




alert (`Good day ${username}, I am happy you stopped by!`)