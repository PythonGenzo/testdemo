// oop = Object Oriented Programming
// four pillars
// encapsulation
// inheritance
// polymorphism
// abstraction


// class and Object

class Car{
    constructor(brand,color){
        brand="Audi";
        color="Red";
    }
}

var s1=new Car();

// blue print
class Car1{
    constructor(brand,color,version){
        this.brand=brand;
        this.color=color;
        this.version=version;
    }
}

var s1=new Car1("audi","red","A6");
var s2=new Car1(["BMW"],["Black"],["520D"]);
console.log(s1);
console.log(s1.brand);
console.log(s2);
console.log(s2.brand);

// A single object can have multiple refernces
var s2=s1;
console.log(s2);

var s1=s2;
console.log(s2.brand);

// small Example

var s1=new Car1("audi","red","A6");
 var s2=s1; //s2 stored s1 values
var s3=new Car1(["BMW"],["Black"],["520D"]);
var s3=s2; //s3 stored s2 values
console.log(s2.brand);
console.log(s3.brand);
// Audi

// Methods

class Car2{
    constructor(brand,color,version,cost){
        this.brand=brand;
        this.color=color;
        this.version=version;
        this.cost=cost;
    }
    getbrandname(){
    return this.brand;
    }
    getcolor(){
        return this.color;
    }
    getcost(n){
        return this.cost*n;
    }

}

var m1=new Car2("audi","red","A6",33);
console.log(m1.getbrandname());
console.log(m1.getcolor());
console.log(m1.getcost(2));




