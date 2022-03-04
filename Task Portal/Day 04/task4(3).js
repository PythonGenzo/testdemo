// 3) Use the same rest countries and print all countries name, region, sub region and population

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    // console.log(data);
    // console.log(data[0]);
    // console.log(data[0].capital);
    // console.log(data[1].currencies);


    // for(var i=0;i<data.length;i++){
    //     console.log(data[i].name)
    // }

    for(var i=0;i<data.length;i++){
        console.log(`
        Name      : ${data[i].name} 
        Region    : ${data[i].region}
        SUB-Region: ${data[i].subregion}
        Population: ${data[i].population}
        `);
    }

}