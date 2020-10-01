'use strict';

//Q1
var username = prompt('What is your name?');
console. log( 'Hello' + username);

//Q2
var homeLocation = prompt('Am I from Atlanta?');
var normalizedHomeLocation = homeLocation.toLowerCase();

if(homeLocation === 'yes' || homeLocation === 'y')
//console.log('You are correct' + homeLocation 'is my hometown');
    alert('Yes! I am from Atlanta')
else if (homeLocation === 'no' || homeLocation ==='No' )

//Q3
var favColor = prompt('Is my favorite color yellow?');
var normalizedFavoriteColor = favColor.toUpperCase();

if(favColor === 'no' || favColor === 'No')
//console.log('Nope' + favColor + 'is not my favorite color')
    alert('Nope not even close')
else if (favColor === 'yes' || favColor === 'YES')

//Q4
var compType = prompt ('Do I use a Mac?');
var normalizedCompType = compType.toLowerCase();

if(compType === 'no')


