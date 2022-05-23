// by id 

// already you have a HTML element , you are suppose to modify

// 1) document.getElementById("main");
// 2) document.getElementsByClassName("main");
// 3) document.getElementsByTagName("main");
// 4) document.querySelector
// 5) document.querySelectorAll

function foo1() {
    let fname=document.getElementById("fname").value;
   let lname= document.getElementById("lname").value;
   let email= document.getElementById("email").value;
    let pass=document.getElementById("Password").value;
    console.log(`
FirstName : ${fname}
LastName  : ${lname}
Email     : ${email}
Password  : ${pass}`);
    

}

let res = document.getElementsByClassName("main");
console.log(res[0].innerHTML);
console.log(res);

let res1 = document.getElementsByClassName("main");
for (i=0;i<res1.length;i++){
    console.log(res1[i]);
}

let res2 = document.getElementsByClassName("main1");
for (i=0;i<res2.length;i++){
    console.log(res2[i]);
}

// tag name 
// div a span article p 

let tag = document.getElementsByTagName("div"); 
console.log(tag);
