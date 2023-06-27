// let name = prompt(`what is your name?`);

// console.log is for you as a developer to see

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

// let randomNumber = Math.ceil(Math.random() * 10);
// console.log(randomNumber);
// let prompt1 = prompt("pick a number between 1-10");
// if (prompt1 == randomNumber) {
//  alert("You got it right");
// } else {
//  alert("Please leave you are wrong");
// }

// for

// for(let i = 0; i<10; i==) {
// console.log(i);
// }

// As long i is 10 its gonna keep looping

// arrays and methods

// let team= ["lucycan", "collin","Mark", "Cortez"]
// console.log(team);
// console.log(team.length);

/// push

// console.log(team.push("derrck", "john"))

/// Pop

//console.log(team.pop());

//console.log();

//Split
// let abc = "a,b,c"; //string
// let splitArr = abc.split(","); //created an array splitArr and assigned it the values from abc string
// console.log("splitArr:", splitArr);

// declare a variable use: let , const , or var
// let team;
// assign an array to a variable.
// team = ["Lucycan", "Collin", "Mark", "Cortez", "Fue"];
// create a new array roles
// let roles = [
//  "Tech Manager",
//  "Techfello",
//  "Placement Manager",
//  "Program Manager",
//  "Intern",
// ];

//syntax for a: for loop  for(let i = 0; i < X; i++) {code block}

// write a loop that will display the names in the team array and their job role
// ` ${}` temperate literal syntax
//for (let i = 0; i < team.length; i++) {
//  console.log("i:", i);
//  console.log(`Hello, ${team[i]}, job: ${roles[i]}`);
// }

// Take in a string value from a user that will be a list of their team names;
//list = array. user = prompt or form,
//take in a value from a user:
//let team2 = prompt("What are your team member names?");
//convert the user string to an array
//let teamarr = team2.split(",");
//console.log(teamarr);
// take in the user roles on their team
//let teamroles = prompt("what are your team members roles?");
//let teamposition = teamroles.split(",");
//console.log(teamposition);
//display the team member name and role for all of their members
// for (let i = 0; i < team.length; i++) {
//  console.log("i:", i);
//  console.log(`Hello, ${team[i]}, job: ${roles[i]}`);
// }

//REVIEW -
// initializer
// condition
// iterator

// let array = [1,2,3,4,5]

// for(let initializer = 0; initializer < array.length; initializer++) {
// console.log(array[initializer])
// }

//SECTION - FUNCTIONS

// SYNTAX FOR FUNCTION

// function thisIsTheFunctionName(name) {
//  console.log(name)
// }

// TYPE OF FUNCTION NAME FOLLOWED BY PARENTHESIS
// thisIsTheFunctionName('Fue') // In the parentehsis is the argument

// iterateThroughArray(array3)

// RETURN STATEMENT

// const name = thisIsTheFunctionName('vince')

// function iterateThroughArray(arr){
//  for(let initializer = 0; initializer < arr.length; initializer++) {
//    console.log(arr[initializer])
//  }
// }

//iteratrThoughArray(array3)

//function sum(num1, num2) {
//  console.log(num1 + num2)
// }

// sum(1,3)

// const function1 = function() {

// }

// Arrow Function
// const funtion 2 = () => {

// }

// let array10 = [1,2,3,4,5]

// const function21 = function(arr) {
//  for(let initializer = 0; initializer < arr.length; initializer++) {
//    console.log(arr[initializer])
//  }
// }

// function21(array10)

// loop()

function blockScope(Name) {
  let team = ["Lucycan", "Collin", "Mark", "Cortez"];
  team.push(Name);
  console.log(team); // You can't access in GLOBAL SCOPE
}
let blanca = "Blanca";
blockScope(blanca);

///CHALLENGE
let team = ["Lucycan", "Collin", "Mark", "Cortez"]; ///this array needs to be in block scope not global scope
///create a function that passes another name as an argument to the function parameter
/// the function adds the name that you passed to the array
/// return the array
/// expected output: ["Lucycan", "Collin", "Mark", "Cortez", "Blanca"]
