let a = document.createElement("div");
a.className="result";
document.body.append(a);


let countriesInfo = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
    .then((data1)=> displayCountries(data1))
    .catch((error)=>console.log(error));
console.log(countriesInfo);

let displayCountries = (data1)=> {
console.log(data1);
    data1.forEach((country) => {
            // console.log(country.name.common);
        const div = document.createElement("div");
        div.className="card m-5 shadow";
        div.style.width="18rem";
        div.innerHTML= `
            <div class="info">
            <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="flag" class="card-img-top">
            <p><span>Capital:</span>${country.capital}</p>
            <p><span>Region:</span>${country.region}</p>
            <p><span>Population:</span>${country.population}</p>
            <div class=" button col-md-12 text-center">
                <button type="button" class="btn btn-secondary">Click to Weather</button>
            </div>

    </div>
    `;
    a.append(div);
    });
    };

// };

// function fullData(country){
// const countriesInfo = document.createElement("div");

// console.log(country);
// countriesInfo.innerHTML= `
//             <div class="info">
//             <h2>India</h2>
//             <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="flag" class="flag"/>
//             <p><span>Capital:</span>New Delhi</p>
//             <p><span>Region:</span>Asia</p>
//             <p><span>Population:</span>352451</p>     
//     </div>
//     <button>Weather</button>
// `;
// countriesInfo.className="country";
// document.body.append(countriesInfo);
// }
// fullData();

// for (country of countriesInfo) {
//     fullData(country);
// }