// Async and Await 
// how to work with Async and Await 
// covid19 api details fetching 
// and displaying the results 


// async and await is a syntatick sugar way of writing the promise easier
// to convert normal functions into async function 
// add async keyword before the functions 

// normal functions 
function foo() {
    return "hi";
}
console.log(foo());

// the return type of async function is always promise

// await it used within async function
// it will make the function to wait until the promise is resolved

// async 
async function foo1() {
    return "hi";
}
console.log(foo1());

// async and await  
async function foo2() {
    let res = await "hi";
    console.log(res);
}
foo2();


// using rest countries API 

async function foo3() {
    let res1 = await fetch("https://restcountries.com/v2/all");
    let res2 = await res1.json();
    console.log(res2);
}
foo3();

// two functions excecution

async function foo4(){
    let res3=await f1();
    let res4=await f2();
    console.log(res3);
    console.log(res4);
}
function f1() {
      return fetch("https://restcountries.com/v2/all");
}


function f2(){
    return fetch("https://restcountries.com/v3.1/all")
}
foo4();


// try-catch it is a error handling statement 
// try = it is a code handling 
// it a code or the code to be tested
// catch = suppose if anything happened in try block, it has to be handled in catch block 

async function foo5(){
    try {
        let res5=await f3();
        console.log(res5);
    }catch(error){
        console.log(error);
    }
    
}
function f3() {
      return new promise((resolve,reject)=>{
          reject("This is Rejected");
      })
}
foo5();



async function foo6() {
    try {
        let res7 = await fetch("https://restcountries.com/v2/all");
        let res8 = await res7.json();
        console.log(res8);
    } catch (error) {
        console.log(error);
    }
}

foo6();