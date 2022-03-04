// Copy by value

var a=30;
var b=40;
b=a;
a=50;
console.log(a,b);

// Copy by Reference (most usage)

var arr=[1,2,3];
var arr1=arr;
console.log(arr1);
arr[0]=23;
console.log(arr);

// JSON



// Array of Objects


var array=[
  {
   
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {

    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }];

//   For Loop

 
//   Template Litterals
for(var i=0;i<array.length;i++){
    console.log(`
id:${array[i].id} 
    title: ${array[i].title} 
body: ${array[i].body} `);
}


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