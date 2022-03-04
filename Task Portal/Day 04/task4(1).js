// 1) How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);

console.log(obj2);
console.log(obj2.name);
console.log(obj2.age);

// both are contain the same key and value , but the position of the key and values are changed in this format




