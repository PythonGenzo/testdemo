// Task 1: 
// Simple Programs todo for variables

// 1) Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;
console.log(a); //=> undefined
console.log(b); //=> undefined
console.log(c); //=> undefined
console.log(d); //=> undefined
console.log("-------------------------------------");


// 2) How to get value of the variable myvar as output

// var myvar= 1;
// console.log("myvar");

var myVar= 1;
console.log(myVar);
console.log("-------------------------------------");


// 3) Declare variables to store your first name, last name, marital status, country and age in multiple lines

var myFirstName = "Prasanth";
var myLastName = "M";
var myMaritalStatus = "single";
var myCountry = "india";
var myAge = 26;

console.log(myFirstName);
console.log(myLastName);
console.log(myMaritalStatus);
console.log(myCountry);
console.log(myAge);
console.log("-------------------------------------");


// 4) Declare variables to store your first name, last name, marital status, country and age in a single line

var myData = {
myFirstName: "Prasanth",
myLastName: "M",
myMaritalStatus: "single",
myCountry: "india",
myAge: 26
}
console.log(myData);
console.log("-------------------------------------");


// 6) Convert the string to integer

// parseInt()
var a = 10;
var b = "10";
console.log(a+b);
console.log(a+parseInt(b));
console.log("-------------------------------------");

// Number()
var c = 10;
var d = Number("10");
console.log(c+d);
// console.log(c+number(d));
console.log("-------------------------------------");

// Plus sign(+)
var e = 10;
var f = "10";
console.log(e+f);
console.log(e+ +(f));
console.log("-------------------------------------");



// Task 2: 
// Simple Programs todo for Operators

// 1) Square of a number

const result = Math.sqrt(2);
console.log(`The square root ${result}`);d
console.log("-------------------------------------");

// 2) Swapping 2 numbers

let a1 = 1;
let b1 = 2;
console.log(`The Value before swapping ${a1}`);
console.log(`The Value before swapping ${b1}`);

[a1,b1] = [b1,a1];

console.log(`The Value after swapping: ${a1}`);
console.log(`The Value after swapping: ${b1}`);
console.log("-------------------------------------");

// 3) Addition of 3 numbers

var add1 = 10;
var add2 = 20;
var add3 = 30;

console.log(add1+add2+add3);
console.log("-------------------------------------");

// 4) Celsius to Fahrenheit conversion

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+' \xB0C is converted to ' + cToFahr + ' \xB0F.';
    console.log(message);
}

cToF(35);
console.log("-------------------------------------");

// 5) Meter to miles

var kms = 10;
var miles = kms / 1.609;

console.log(` ${kms} KM is ${miles} miles`);
console.log("-------------------------------------");

// Task 3: 
// Simple Programs todo for Condition , Looping and Array

// 1) Write a loop that makes seven calls to console.log to output the following triangle

let star = 7;
let string = "";
for(let i=1;i<=star;i++){
    for(let j=0;j<i;j++){
        string += "#";
    }
    string += "\n";
}
console.log(string);
console.log("-------------------------------------");

// 2. Iterate through the string array and print it contents

var arrayCount = [11,22,33,44,55];

function countArr(){
  var data = 0;
  arrayCount.forEach( function(s){
    data++;
  });

  console.log(data);
}
countArr();
console.log("-------------------------------------");

// Foods variable holds the names of your top 20 favorite foods, starting with the best food. 
//3) How can you find your fifth favorite food?

let foods = ["Fruits", "Biriyani", "Chappathi", "idly", "dhosai", "Rice", "L.Rice", 
"T.Rice", "C.Rice", "P.Rice", "G.Rice", "poori", "Uppuma", "Fish", "Chicken", 
"Mutton", "Burger", "Pizza", "Roll", "puff"];

console.log(foods);
// How can you find your fifth favorite food?
console.log(foods[4]);
console.log("-------------------------------------");



