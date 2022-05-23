// Module 04 advance js 
// callback , promise, fetch, async and await

// callback 
// js is synchronous
// we can make it to behave asynchronous
// setTimeout it is a async function
// it will take function as a parameter
// as well as the amount of time need to block code 

console.log("first....");
console.log("third.....");
console.log("second.....");

// Set time out 

console.log("first....");
setTimeout(() => {
    console.log("second....");
}, 3000);
console.log("third....");


// call Stack 
// call stack it is a place in the browser 
// it help us to keep track of functions 
// 

function f1() {
    f2();
    console.log("hello f1");
}
function f2() {
    console.log("hello f2");
}
f1();


const sayHi=()=>{
    sayBye();
    console.log("say hai ....");
}
const sayBye=()=>{
    console.log("say bye ....");
}
sayBye();


// event queue 
// it is place where the functions need to be executed 
// are kept in the order they arrived

console.log("App is started....");
    setTimeout(function timer() {
        console.log('app is under progress!!!');    
    }, 4000);


console.log("app is under construction...");

setTimeout(function timeout() {
    console.log("app is under loading !!!");
}, 5000);

console.log("app execution completed!!!");


// event loop 
//event loop:it coordinates between callback queue  and stack
//it checks whether call stack is empty or not if it is empty it will h
//push the functions to the call stack


// call back 
// a function which takes one more function as a parameter ,
// the calling function is nothing but call back function 
// the function which is used as a parameter

// ele is a call back function 

var arr =[1,2,3,4];
var res = arr.map((ele)=>ele*2);
console.log(res);

setTimeout(() => {
    console.log("this is a call back function ....");
}, 2000);



