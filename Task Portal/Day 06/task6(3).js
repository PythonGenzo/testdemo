// 1) Fix the code to get the largest of three.

aa = (f,s,t) => {
    let largest;
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);


// 2) Fix the code to Sum of the digits present in the number

let n = 123;
let sum = 10;
function add(n)
{

for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
console.log(add(n));

// 3) Fix the code to gen Title caps.

// var arr = ["guvi", "geek", "zen", "fullstack"];
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//  }

//  4) Fix the code to return the Prime numbers

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=0;i<=num.length;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);

// 5) Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100]; 
// const sum = (a, b) =>a + b
const sum1 = (acc,cur)=>acc+cur;
console.log(num.reduce(sum1));