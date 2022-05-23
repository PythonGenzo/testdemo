// write a class to calculate uber price
class Uber{
    constructor(name,city,kms,cost){
        this.name=name;
        this.city=city;
        this.kms=kms;
        this.cost=cost;
    }
    getPrice(n){
        return this.cost*n;
    }
}

var c1 = new Uber("san","cbe",100,3.30)
console.log(c1.getPrice(100));