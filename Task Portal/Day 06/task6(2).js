// 1) Write a code to print the numbers in the array

var numArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numArr.length; i++) {
 new_string += numArr[i] 
}
console.log(new_string);

// 2) Write a code to print the numbers in the array

var numArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numArr3.length; i++) {
 new_string += numArr3[i] + "," 
}
console.log(new_string);

// 3) Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

var numArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 10; i > -1; i-- ) {
 new_string += numArr1[i] + " "
}
console.log(new_string);

// 4) Write a code to replace the array value — If the number is even, replace it with ‘even’.

var numArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var odd = "even";
for (var i = 0; i < numArr2.length; i++) {
 if(numArr2[i] %2 == 0 )
 {
 numArr2[i] = odd
 }
}
console.log(numArr2);

// 5) Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var even = "even"
for (var i = 0; i <=10; i++) {
 if(numArr3[i] %2 == 1 )
 {
 numArr3[i] = even
 }
}
console.log(numArr3);