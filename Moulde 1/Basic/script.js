// console.log("Prasanth");

// step 1 = create an XHR Request
var request=new XMLHttpRequest();
// step 2 = request a connection(which data you need to open or receive)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// step 3 = sending a connection request
request.send();
// step 4 = once the data successfully received from the server
request.onload=function(){
    var data=JSON.parse(request.response);

    // print the details of the first countries in the API
    console.log(data);

    // First Country
    console.log(data[0]);
    // First Country capital
    console.log(data[0].capital);
    // Second Country currencies
    console.log(data[1].currencies);

    // print 250 countries names in the console
    for(var i=0;i<data.length;i++){
        console.log(data[i].name)
    }

    // print data countries and capital
    for(var i=0;i<data.length;i++){
        console.log(`name: ${data[i].name} capital: ${data[i].capital}`);
    }

    // 10 countries flag
    for(var i=0;i<10;i++){
        console.log(`flag: ${data[i].flag}`);
    }

    
}






