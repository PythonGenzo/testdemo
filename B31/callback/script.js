console.log("1. App Start");

setTimeout(function() {
    console.log("2. After 1 Sec");
})

console.log("3. App End");


// Example for callback 

function getSalary() {
    setTimeout(function(){
        return 1000
    },2000)
}
var sal = getSalary();
console.log("The salary of the person " + sal + " is credited");


