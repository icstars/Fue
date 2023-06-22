// let name = prompt(`what is your name?`);

// let age = prompt(`how old are you`);

// let hobby = prompt(`what is your hobby?`);

// console.log(`How old are you`);
// alert(`Hi my name is ${Name}, I am ${Age} Years old and I like ${Hobby}`);

// CONDITIONAL/////////////////// THIS IS WHERE CONDITIONAL STARTS******************

//TRUTHY VALUE

//let x = 1;

//console.log(Boolean(x));

//cobditional operators
// ===; 1 === 1 is true
//==; loose equals; 1 == '1'
// loose equals, checks if value is the same, regardless of data types
// 1 !== 2; true
// <, >, !==(NOT EQUALS), <=, >=; (MORE THAN OR LESS THAN EQUALTO)
// 1>= 0 TRUE
// 1<= 0 NOT TRUE
// "A" < "Z"
// CAN USE === FOR STRINGS TOO
// EX: 'FUE' === 'FUE'; TRUE STATEMENT

// IF STATEMENT IS TRUE THEN RUN THE SQUIQLY BRACKETS

// = ; to assign operator
// == ; loose equals
// ===; strict equals

// LOGICAL OPERATOR
// || && ??
// || OR
// && AND
// ?? NULLISH

// EXAMPLES OF &&

// let fue = 0;
// let y = 0;

// if ("FUE === FUE && y===o") {
//   console.log("hello world");
// }

// OR OPERATOR

// if (slimesDeafeated === 10) {
// questComplete = true
//  }

//    let i = 0

//    let k =1

//    if( i === 1 || k===1) {
//        console.log('hello world');
//    }

// if this happens or this

// ELSE STATEMENTS

//    let v = 10
//    let u = 8

//    if (v === 9 ) {
//        console.log('hello world')
//    } else {
// console.log("goodbye world");
// }

// else if; will run if conditions before it are false
// and specifies a new condition

// if(login === true) {

//  } else if ()

// let username = prompt("What part of Mke are you from: ");
// if (username === "North") {
//   alert("Welcome Webmaster");
// } else if (username === "Southside") {
//   alert("loggied in!");
// } else {
//  alert("No town claim you, please leave");
// }

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = ["liv", "kamar", "derrick", "jimmy"];

// console.log(arr[randomNumber]);

// if (arr[randomNumber] === arr[0]) {
//   console.log("NEXT!");
// } else if (arr[randomNumber] === arr[1]) {
//   console.log("NextPlease");
// } else if (arr[randomNumber] === arr[2]) {
//   console.log("NextPlease");
// } else if (arr[randomNumber] === arr[3]) {
//  console.log("NextPlease");
// }

// Challenge: Guess the Number
// The program generates a random number between 1 and 10.
// The user is prompted to guess the number.
// If the user's guess matches the generated number, an alert is shown with a success message.
// If the user's guess is incorrect, an alert is shown with a failure message.

let randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);
let prompt1 = prompt("pick a number between 1-10");
if (prompt1 == randomNumber) {
  alert("You got it right");
} else {
  alert("Please leave you are wrong");
}
