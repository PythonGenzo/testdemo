// ECMA6
// spread operator

// combain and create new array 
let arr=[12,13,14];
let arr1=[15,16,17];
let arr2=[...arr, ...arr1]
console.log(arr2);

// store in a array 
let arr3=[12,13,14];
let arr4=[15,16,17];
arr3.push(...arr4);
console.log(arr3);

// what about key value pair 
let obj={
    gender:"male",
    city:"coimbatore"
    };
    let obj1={
        name:"san",
        age:26,
        ...obj
    };
console.log(obj1);


// rest parameter
function add(a,b){
    return a+b;
}
console.log(add(5,6));

function add1(a,b,...remaining){
    console.log(remaining);
    return a+b;
}
console.log(add1(5,6,7,8,9,10));

var sum=0;
function add2(...remaining){
    console.log(remaining);

    for(var i=0;i<remaining.length;i++){
        sum=sum+remaining[i];
    }
    return sum;
}
console.log(add2(1,2,3,4,5));
// console.log(add2(10,12));


let a = [
    {
        name:"1",
        dept:"cse",
        mark:[1,2,3,4,5]
    },
    {
        name:"2",
        dept:"cse",
        mark:[11,22,33,44,55] 
    },
    {
        name:"3",
        dept:"cse",
        mark:[111,222,333,444,544]
    }
];

