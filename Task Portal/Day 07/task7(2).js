// Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }

    getRadius(n){
      return  this.radius=radius*n
    }
    getColor(){
        return this.color=color+""
    }
}

var c1 = new Circle(1,"red");
console.log(c1);
getRadius(1);