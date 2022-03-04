// Map, Reduce, Filter Functions

// Sample Programs

// input 
// var arr = [11,22,33,44,55];
// output 
// var res = [22,44,66,88,110];

// Map

var arr = [11,22,33,44,55];
console.log(arr);
var res = arr.map((element)=>element*2);
console.log(`Multiple of 2 is = ${res}`);

// case 01
// function is not defined
// var res = arr.map();
// console.log(res);
// it will not work without a function

// case 02
// Function is there but return keyword is missing
// var res = arr.map(()=>{
// 
// });
// console.log(res);
// array of undefined 


// question 
// increase the marks by +20
var student = [
    {name:"san", marks:40},
    {name:"prasanth", marks:50}
];
console.log(student);

var result = student.map((mark)=>{
    mark.marks=mark.marks+20;
    return mark;
});
console.log(result);


// Filter 

var arr1 = [11,12,13,14,15];
var res1 = arr1.filter((a)=>a%2===0); //Even Number
var res2 = arr1.filter((a)=>a%2===1); //Odd Number
console.log(res1);
console.log(res2);

// Extract the details of the student whose marks is grater than 40 as well as print the names of the student
var student1 = [
    {name:"san", marks:40},
    {name:"prasanth", marks:50},
    {name:"Genzo", marks:60}
];
console.log(student1);

var result1 = student1.filter((element)=>element.marks>40);
console.log(result1);
var final = result1.map((ele)=>ele.name);
console.log(final);

// Reduce 

 var arr3 = [11,12,13,14];
 var res3 = arr3.reduce((acc,cv)=>acc+cv);
//  var res3 = arr3.reduce((acc,cv)=>acc+cv,0); sum value
 console.log(res3);
 

// simple task

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
// 1) extract the asia region countries
//     let reg = data.filter((ele)=>ele.region==="Asia");
//     console.log(reg); 

// // 2) using the above code extract the country name in the console
    
//     // Array
//     let result = reg.map((element)=>element.name);
//     console.log(result);

//     // single value 
//     for(var i=0;i<reg.length;i++){
//         console.log(reg[i].name);
    // }

    // 3) print the sum of the total population of the asia region countries
    let a = data.filter((ele)=>ele.region==="Asia");
    console.log(a); 
    let pop = a.map((a1)=>a1.population);
    console.log(pop);
    let total = pop.reduce((acc,population)=>acc+population);
    console.log(`The total population of Asia is ${total}`);  

}

// for refer the total 
let a1 = [27657145, 2994400, 9730500, 1404900, 161006790, 775620, 411900, 15626444, 1377422166, 3720400, 7324300, 1295210000, 258705000, 79369900, 37883543, 8527400, 126960000, 9531712, 17753200, 4183658, 6047800, 6492400, 5988000, 649100, 31405416, 344023, 3093100, 51419420, 28431500, 25281000, 4420133, 194125062, 4682467, 103279800, 2587564, 32248200, 5535000, 50801405, 20966000, 18564000, 23503349, 8593600, 65327652, 1167242, 78741053, 4751120, 9856000, 31576400, 92700000, 27478000];
sum=0;
for(i=0;i<a1.length;i++){
    sum+=a1[i];
}
console.log(`reference for the output ${sum}`);