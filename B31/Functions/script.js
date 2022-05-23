// console.log("hai")
// console.log("Hello")

// const sum = (a , b ) => a + b ;
// console.log(sum(10, 20));

// (function (n){
//  const a1 = 10;
//  const a2 = 20;
//  const area = a1*a2;
//  var t1 = 30;
//  console.log(area);
//  console.log(n*2);
// })(80)

// const a1 = 100;
// console.log(a1);


// function fullname(san , Prasanth){
//     return "Welcome " + "san " + ", " + "Prasanth " + "😍 !!!"
// }
// console.log(fullname("san" , "Prasanth"));

// const fullname = (firstname, lastname) => 
//    `welcome ${lastname}, ${firstname } 😍!!!`;
// console.log(fullname("san", "prasanth"));   

// ES6 destructuring
// decleration side its not array its syntax

// const [t1, t2, t3=10] = [100, 200];

// console.log(t1, t2, t3);

// const [t1, t2, t3=10] = [100, 200, 300];

// console.log(t1, t2, t3);

// const [t1, t2, t3=10] = [100, 200, null];

// console.log(t1, t2, t3);

// Trick Questions (, is used for skip )
// const [ , t1, t2, t3=80] = [100, 200, null];

// console.log(t1, t2, t3); // 100 null 80


// const [t1, t2, t3] = [100, 200, 300, 400, 500];

// console.log(t1, t2, t3);

// ES6 Rest Operator
//Spread & Rest Operator

// const [t1, t2, ...t3] = [100, 200, 300, 400, 500];
// console.log(t1, t2, t3);


// const arr = [10, 70, 40, 80];

// const double = (num) => num*2;
// console.log(arr.map(double)); 



const marks = [80, 50, 90, 100, 30, 20, 70];

const ispass = (mark) => mark > 40;
// console.log(marks.filter(ispass));

console.log(marks.filter(ispass));