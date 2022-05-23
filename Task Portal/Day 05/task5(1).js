// Do the below programs in anonymous function & IIFE

// 1) Print odd numbers in an array

function odd(n1,n2){
    var o = [];
    i = Math.floor(n1/2)*2+1;

    while(i<= n2){
        o.push(i);
        i+=2;
    };
    return o;
}
console.log(odd(1,10));





// 2) Convert all the strings to title caps in a string array

function upperCase(str){
    str = str.toLowerCase().split(' ');
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase+str[i].slice(1);
    }
    return str.join(' ');
}
upperCase("I'm a full stack learner");



// 3) Sum of all numbers in an array

var sum = 0;
function add(...all){
    for(i=0;i<all.length;i++){
        sum=sum+all[i];
    }

    return sum;
}
console.log(add(1,2,3,4,5));


// 4) Return all the prime numbers in an array

function array(num){
    let numArr = [];
    for (let i=1;i<=num;i++){
        numArr.push(i);
    }
    numArr.map((number)=>{
        for (var i=2;i<number;i++){
            if(number % i ===0 ){
                let index = numArr.indexOf(number);
                return numArr.splice(index, 1);
            }
        }
    });
    return numArr;
}
array(10);

// 5) Return all the palindromes in an array

function isPalindrome(word) {
    const firstHalf = word.slice(0, Math.ceil(word.length/2));
    const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');

    return firstHalf === secondHalfReversed;
}

function getPalindromesFromArray(arr) {
    return arr.filter(isPalindrome);
}

const wordsArr = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];

console.log(getPalindromesFromArray(wordsArr));


// Return median of two sorted arrays of the same size
// Remove duplicates from an array
// Rotate an array by k times
