// anonymous Functions

function first(arr,n){
    if(n==undefined)
    return arr[0];
    if(n<0)
    return [];

    return arr.slice(0,n);
}
console.log(first([0,6,4,5],3));



function last(arr,n){
    if(n==undefined)
    return arr[arr.length-1];
    if(n>0)
   return arr.slice(-n);
  
  }
  console.log(last([7,9,0,-2],3));


// write a anonymous function which gives the 
// unique number in the array

// Filter duplicates
// var arr=[7,1,1,2,3,4,5,6,4,3,2,5,6];
//   var unique=[...new Set(arr)]
//   console.log(unique);

// answer
var arr=[7,1,1,2,3,4,5,6,4,3,2,5,6];
var temp=arr[0];
for(var i=1;i<arr.length;i++)
{
    temp=temp^arr[i]
}
console.log(temp);

// write a JS function to remove a specific 
// element from an array

var res = function(arr,n){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===n){
            arr.splice(i,1)
        }
    }
    return arr;
}
console.log(res([2,5,6,9],5)); 


// write a JS function to find the most 
// frequent item of an array 

// var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<arr1.length; i++)
// {
//         for (var j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ; 


// write a JS function to generate an array 
// between two integers of 1 step length

 function range(n1,n2){
     let temp=[];
     for(var i=n1;i<=n2;i++){
         temp.push(i);
     }
     return temp;
 }
//  console.log(range(3,7));
 console.log(range(-7,7));