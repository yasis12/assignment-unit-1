// this code was done in lecture

console.log("hello");

// these are numbers

let x = 1;

let tempRightNow = 81; 

tempRightNow = tempRightNow + 1;

console.log("temp before too many video games", tempRightNow);

tempRightNow =+ 5;

tempRightNow ++; //this can be confusing alex reccomends =+

console.log(tempRightNow);

// these are strings

let game = "zelda";
let year = "2023";
year = year + 4;
console.log('year', year);
let title = "apex";
// single quotes can be 
// concatenation
game = game + title;

let tempLater = '<p class = "container">cool</p>' 
// above is an example of why you would use double and single quotes

// Boolean

let isCloudy = false;

//dom manipulation

let toReplace = document.querySelector('#fun2')
//document is to reference anything in HTML + it does other stuff 
//line 40 also takes the reference from html to toReplace
toReplace.innerHTML = tempLater;
//innerHTML is setting the fun2

//conditionals
// the triple equal was used here because it is matching equal and type
if (isCloudy === false) {
    console.log('Clear skies.');
} else {
    console.log('rainy day.');
}