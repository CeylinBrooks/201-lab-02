'use strict';

//Q1
var username = prompt('What is your name?');
console. log( 'Hello' + username);

//Q2
var homeLocation = prompt('Am I from Atlanta?');
var normalizedHomeLocation = homeLocation.toLowerCase();

if(homeLocation === 'yes' || homeLocation === 'y')
//console.log('You are correct' + homeLocation 'is my hometown');
    {alert('Yes! I am from Atlanta')}
else if (homeLocation === 'no' || homeLocation ==='No' )
    {alert ('Actually I am!')}
//Q3
var favColor = prompt('Is my favorite color yellow?');
var normalizedFavoriteColor = favColor.toUpperCase();

if(favColor === 'no' || favColor === 'No')
//console.log('Nope' + favColor + 'is not my favorite color')
    {alert('Nope not even close')}
else if (favColor === 'yes' || favColor === 'YES')
    {alert( 'You are correct, it is purple though!')}

//Q4
var compType = prompt ('Do I use a Mac?').toLowerCase();
if(compType === 'no' )
// console.log (compType + 'I have a Windows machine')
    {alert('Right because I use a Windows machine')}
else if ( compType === 'yes' || compType === 'y' )
    {alert('Try Again :(')}

//Q5

var favAnimal = prompt ('Is my most animal in the world, an Elephant?');
var normalizedFavAnimal = favAnimal.toUpperCase();

if (favAnimal === 'Yes' || favAnimal === 'yes' || favAnimal === 'YES') {
    alert('Absolutely, they are the best!');
} else if (favAnimal === 'no' || favAnimal === 'NO') {
    alert('Are you kidding, Elephants are fantastic!');
}