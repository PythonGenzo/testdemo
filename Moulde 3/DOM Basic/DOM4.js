// first class selector r id selector tag selector in the page 
// first occurence 

let res = document.querySelector(".main");
console.log(res);

// it takes all of the class name r id name tag selector
// include all the occurence 

let res1 = document.querySelectorAll(".main");
console.log(res1);


var button1 = document.createElement("button");
button1.setAttribute("type","button");
button1.className="btn btn-success";
button1.innerHTML="Click Me";
button1.addEventListener("click",foo);
// button1.addEventListener("click", ()=> alert("hai"));
document.body.append(button1);

function foo() {
    // alter ("hai");
    let res3 = document.createElement("div");
    res3.className="main";
    res3.innerHTML="this is div";
    document.body.append(res3);
}

