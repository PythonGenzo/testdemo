// var form = document.createElement("form");
// form.className="main";
// document.body.append(form);

var fname = document.createElement("div");
fname.innerHTML="First Name :";
document.body.append(fname);
var button1 = document.createElement("input");
button1.setAttribute("type","text");
button1.setAttribute("id","fname");
document.body.append(button1);

var lname = document.createElement("div");
lname.innerHTML="Last Name :";
document.body.append(lname);
var button2 = document.createElement("input");
button2.setAttribute("type","text");
button2.setAttribute("id","lname");
document.body.append(button2);

var email = document.createElement("div");
email.innerHTML="Email :";
document.body.append(email);
var button3 = document.createElement("input");
button3.setAttribute("type","email");
button3.setAttribute("id","email");
document.body.append(button3);

var pass = document.createElement("div");
pass.innerHTML="Password :";
document.body.append(pass);
var button4 = document.createElement("input");
button4.setAttribute("type","password");
button4.setAttribute("id","pass");
document.body.append(button4);

var button5 = document.createElement("button");
button5.setAttribute("type","button");
button5.className="btn btn-success";
button5.innerHTML="Click Me";
button5.addEventListener("click",res);
document.body.append(button5);

function res() {
    let fname=document.getElementById("fname").value;
    let lname= document.getElementById("lname").value;
    let email= document.getElementById("email").value;
    let pass=document.getElementById("Pass").value;
    console.log(`
FirstName : ${fname}
LastName  : ${lname}
Email     : ${email}
Password  : ${pass}`);
};
