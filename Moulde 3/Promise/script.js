// // promise 
// state diagram
// promise chaining 
// promise.all

// Need of promise to overcome call back hell senario 
// as well as the making ops successfully
// a promise is an object that holds the result of an async ops 

// promise had a three states 
// 1) pending state 
// 2) full filled state
// 3) rejected state

// a promise takes a function as a parameter
// within the function we have 2 more parameter
//1) resolve = when async ops is successfully completed
// 2) reject = when async ops fails

// var p = new Promise();
// console.log(p);


var p1 = new Promise((resolve,reject)=>{
    resolve("This is resolved");
    reject("This is rejected")
});
console.log(p1);

// if we swap reject is printed 
// eligible age for vote 
// asynchronous operations sample 

var age = 18;

var p2 = new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("you are eligible to vote");
    }else {
        reject("not eligible to vote")
    }
});
console.log(p2);

// user input in browser

var age1 = parseInt(prompt("Enter the age:"));

var p3 = new Promise((resolve,reject)=>{
    if(age1>=18){
        resolve("you are eligible to vote");
    }else {
        reject("not eligible to vote")
    }
});
console.log(p3);
// to access the value 
// we need 
// .then = for resolved state 
// .catch = for reject state99
p3.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
// to handle promise we need .then and .catch


// how to handle if a function return a promise

function foo() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> resolve("this is resolved after 2 sec"), 2000);
    });
}
foo().then((data)=>console.log(data));


// behavior of promise 

