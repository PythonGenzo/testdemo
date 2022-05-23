// oop - Object Oriented Programming

// Classes
// example1 
class car {
    constructor(name, wheels, doors, engine) {
        this.name = name;
        this.wheels = wheels;
        this.doors = doors;
        this.engine = engine;
    }
}

const ferrari = new car("Ferrari", 4, 2,"V8" );
const venue = new car("venuei", 4, 4,"V3" );
const BMW = new car("BMWX6", 4, 4,"V6" );
const Toyoto = new car("Toyoto Landcrusieri", 4, 5,"V8" );

console.log(ferrari, typeof ferrari);
console.log(venue, typeof venue);
console.log(BMW, typeof BMW);
console.log(Toyoto, typeof Toyoto);



// Example 2
class Account {
    constructor(name, accno, balance) {
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    // class methods r member function
    getBalance(){
        return `The balance is: ₹ ${this.balance}`;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            return this.getBalance(); 
        } else {
            return `insufficient balance. ${this.getBalance()}`;
        }
    }

    deposit(cash) {
        this.balance = this.balance + cash;
        return `your current. ${this.getBalance()}`;
    }
}

const san = new Account ("san", 100, 100000);
const prasanth = new Account ("prasanth", 101, 200000);
const ajith = new Account ("ajith", 102, 300000);


console.log(san, typeof san);
console.log(prasanth);
console.log(ajith);


// console.log(ajith.balance); Not to do this way
console.log(san.getBalance());
console.log(san.withdraw(10_000));
console.log(san.deposit(45_000));
