// Write a “person” class to hold all the details.

class Person{
    constructor(name,age,gender,city){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.city=city;

    }
}

var s1=new Person("san","25","male","cbe");
var s2=new Person("Prasanth","26","male","cbe");
console.log(s1);
console.log(s1.name);
console.log(s2);
console.log(s2.age);