// Do the below programs in arrow functions

// 1) Print odd numbers in an array
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr1.filter(number => {
  return number % 2 !== 0;
});

console.log(odds);


// 2) Convert all the strings to title caps in a string array
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  titleCase("i am studying full stack"); 


// 3) Sum of all numbers in an array
 var arr2 = [1,2,3,4,5];
 var sum = 0;
 arr2.forEach(x =>{
     sum += x;
 });
console.log(sum);


// 4) Return all the prime numbers in an array
function sumPrimes(num) {
    let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i);
    }
  
     
    numArray.map((number) => {
      for (let i = 2; i < number; i++) {
          if(number % i === 0) {
              let index = numArray.indexOf(number);
              return numArray.splice(index, 1);       
          }
      }   
    });
  
   return numArray;
  
  }
  
  sumPrimes(10);


// // 5) Return all the palindromes in an array
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome1 = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome1(el));
};
console.log(findPalindrome(arr));