// Destucturing

var arr = ["san","prasanth"];
let [fname,lname]=arr;
console.log(fname);
console.log(lname);

let [a,,,b]=["san","prasanth","ajith","kumar"];
console.log(a,b);

let [a1,b1,...rest]=["san","prasanth","ajith","kumar"];
console.log(a1,b1);
console.log(rest);

let student = { 
    name:"san",
    age:26,
    city:"cbe"

};

let {name,age,city}=student;
console.log(name,age,city);


// inheritance

class Car{
    constructor(brand,color){
    this.brand=brand;
    this.color=color;
    }
    brandname(){
    return " I have "+this.brand+" Car";
    }
    }
    //Mahendra XUV is a type of car 
    //John doe is a son Of Doe 
    //if you need to have the relation then use extends keyword 
    // if you want to access the constructor of the parent class 
    // then use super keyword 
    class Mahendra extends Car{
      constructor(brand,color){
        super(brand);
      }
      display(){
      return this.brandname();
      }
    }
    //create object for children
    //if you create an Object for children, then 
    //you can access parent also
    var child1= new Mahendra("XUV-V1");
    console.log(child1.display());


    class Car1{
        constructor(color){
        // this.brand=brand;
        this.color=color;
        }
        brandColor(){
        return " I have "+this.color+" color Car";
        }
        }
    class BMW extends Car1{
        constructor(color){
            super(color);
        }
        display(){
            return this.brandColor();
        }
    }    
    var child2 = new BMW("Red");
    console.log(child2.brandColor());


    // class Car2{
    //     constructor(color){
    //     // this.brand=brand;
    //     this.color=color;
    //     }
    //     brandColor(){
    //     return " I have "+this.color+" color Car";
    //     }
    //     }
    // class BMW extends Car2{
    //     constructor(color){
    //         super(color);
    //     }
    //     display(){
    //         return this.brandColor();
    //     }
    // }    
    // var child2 = new BMW("Red");
    // console.log(child2.brandColor());

