// console.log('hello world');             //string
// console.log("hello world!");           //string
// console.log(12);                      //number
// console.log(true);                    //boolean
// console.log(false);                   //boolean
// console.log(null);                    //null
// console.log(undefined);                 //undefined

//variables
// let name; // variable declaration   // when variable is declared thay have undefined value
// let age; // variable declaration    // when variable is declared thay have undefined value

// name = 'kevin'; // value assignment
// age = 30;      //value assignmnet
// console.log(name);
// console.log(age);

let name = "kevin"; //declaring and assigning values
let age = 30; //declaring and assigning values
console.log(name, age);

let isMaried = false; //camel case-- frist letter small the second will start with upper case
console.log(isMaried);

//second varialbe-- second person
let name2 = "Steve";
let age2 = 35;
let isMaried2 = true;

let agesSum = age + age2;
console.log(agesSum);

// difference
let ageDif = age2 - age;
console.log(ageDif);

console.log(typeof ageDif); // opperator to check the variable's type
console.log(typeof name);
console.log(typeof isMaried);

// numbers operations
console.log("14+37 = ", 14 + 37);
console.log("82-20 =", 82 - 20);
console.log("100*70 = ", 100 * 70);
console.log("169/13 = ", 169 / 13);
console.log("11**2 = ", 11 ** 2);

let iphonePrice = 1000;
let samsungPrice = 900;
console.log("iphone costs more than samsung ", iphonePrice > samsungPrice);
console.log("samsung costs more than iphone", iphonePrice < samsungPrice);
console.log(
  "iphone price is the same as samsung",
  iphonePrice === samsungPrice
);

if (iphonePrice > samsungPrice) {
  console.log("iphone cost more than samsung");
} else {
  console.log(" samsung costs more than iphone");
}

let name3 = "knan";
let age3 = 14;
if (age3 >= 18) {
  console.log("wellcome", name);
} else {
  console.log(" sorry we cannot let you in so plz come back in ", 18 - age3);
}

//private party program
let option1 = "kevin";
let option2 = "Steve";
let option3 = "Rob";
let option4 = "Jack";
let option5 = "Kate";
let optName = "kevin";

if (optName === option1 || optName === option2) {
  console.log("comt to the club");
} else {
  console.log("sorry, this party is private");
}
// else if (optName === option2 ){
//     console.log('comt to the club');
// }
// else if (optName == option3) {
//     console.log('comt to the club');
// }
// else if (optName === option4){
//     console.log('comt to the club');
// }
// else if (optName === option5) {
//     console.log('comt to the club');
// }

let bossName = "David";
let visitorName = "kevin";
if (visitorName !== bossName) {
  console.log(visitorName, "sorry you are not the Boss!");
}

// if one of them is true
let x = 50;
let y = 70;
if (x === 50 || x === 70) {
  console.log("it works");
}

// if both of them are true
let z = 50;
let n = 70;
if (z === 50 && n === 70) {
  console.log("it works");
}

console.log("2" == 2); //compares only the value. returns true
console.log("2" === 2); // compares the value and the type. returns false-SHOULD BE USED!

//let p_name = prompt("what's your name");// prompty allways returns string
//console.log("hello",p_name);
console.log(typeof p_name);

// Asking for the age of two friends . Determine who is older
//Don't use capital letters and under scores -- faulates the rules
let Age1 = prompt("enter the age of the frist person?");
Age1 = parseInt(Age1);

let Age2 = prompt("enter the age of the second person");
Age2 = parseInt(Age2);

if (Age1 > Age2) {
  console.log(" the first person is older!");
} else if (Age1 < Age2) {
  console.log("the second person is older!");
} else {
  console.log("Both persons are the same age!");
}

