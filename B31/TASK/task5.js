//1) Add deposit in the classes ?

class Account {
    constructor(name, accno, balance) {
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    
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

console.log(san.getBalance());
console.log(san.withdraw(10_000));
console.log(san.deposit(45_000));



// 2) Find all the countries that speak spanish ?

const getCountries = () => {
    console.log("Getting Countries////");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
     xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
       const spanishLanguage = countries.filter((language) => language.languages.spanish);
       console.log("Filter Language Countries", spanishLanguage, countries);
 };
};

getCountries();




// 3) Find all the countries name with more than 1 crore population ?

const getCountries = () => {
    console.log("Getting Countries////");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
       const population = countries.filter((countries) => country.population > 1_00_00_000);
       const populationNames = population.map((population) => country.name.common);
       console.log("Filter Population Countries", populationNames, countries);
 };
};

getCountries();