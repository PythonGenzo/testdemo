
var url = "https://624a7f85fd7e30c51c0e48b6.mockapi.io/users";

// GET = read
function  getData() {
    var res = fetch("https://624a7f85fd7e30c51c0e48b6.mockapi.io/users");
console.log(res);
var res1 = res.then((data)=>data.json())
    .then((data1)=>console.log(data1))
    .catch((error)=>console.log(error));
console.log(res1);
} 
// getData();
// create data is important 
function createData(){
    var data = {
        name: "San prasanth",
        email: "san@gmail.com"
    };
    fetch(url,{
        method:"post",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
}
// createData();
// getData();

// update 
function updateData(){
    var data = {
        name: "San",
        email: "san1010@gmail.com"
    };
    fetch(url+"/12",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((data)=>data.json())
    .then((data1)=>console.log(data1))
    .catch((error)=>console.log(error));  
}
// updateData();
// getData();

// Delete

function deleteData(){
    fetch(url+"/1",{
        method:"DELETE",
})
}
deleteData();
getData();