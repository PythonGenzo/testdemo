// Solving problems using array functions on rest countries data.


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data); 

// 1) Get all the countries from Asia continent /region using Filter function
    let a = data.filter((ele)=>ele.region==="Asia");
    console.log(a); 


// 2) Get all the countries with a population of less than 2 lakhs using Filter function
    let b = data.filter((ele)=>ele.population>200000);
    console.log(b);


// 3) Print the following details name, capital, flag using forEach function
    data.forEach((element) => {
        console.log(`
    name: ${element.name}
    capital: ${element.capital} 
    flag: ${element.flag}
        `);
    });

//  4) Print the total population of countries using reduce function
    let pop = data.map((a1)=>a1.population);
    console.log(pop);
    let total = pop.reduce((acc,population)=>acc+population);
    console.log(`The total population is ${total}`); 

// 5) Print the country which uses US Dollars as currency.
    
    let countryNames = data.map((country)=>country.currencies); 
    console.log(countryNames);
    let usd = countryNames.filter((dollar)=>dollar.name==="United State Dollar");
    console.log(usd);
}
