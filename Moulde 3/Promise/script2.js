// Applications of promise 

// fetch = is a replacement of xhr 
// it is a alternate to XHR 
// fetch always return the promise 
// body 
// readable stream = its a packet of data 
//  to handle promise we have .then and .catch
// we are converting readable stream to object so we are applying .json()
// then the return type is again a promise 
// to handle it use .then and .catch 
// object conversion to data.json()


var res = fetch("https://restcountries.com/v3.1/all");
console.log(res);
var res1 = res.then((data)=>data.json())
    .then((data1)=>console.log(data1))
    .catch((error)=>console.log(error));
console.log(res1);


// CRUD Operations 
// is common for a applications 
// example is zen portal 
// full stack is CRUD 

