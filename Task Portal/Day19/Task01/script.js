let container = document.createElement("div");
container.setAttribute("class","container");
// container.innerHTML="hai";

let calculator = document.createElement("div");
calculator.setAttribute("class","calculator");
// calculator.innerHTML="hello";

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","0");
input.id="output-screen"

let bt1 = document.createElement("button");
bt1.setAttribute("onclick","Clear()");
bt1.innerHTML="Clear";
let bt2 = document.createElement("button");
bt2.setAttribute("onclick","del()");
bt2.innerHTML="Del";
let bt3 = document.createElement("button");
bt3.setAttribute("onclick","display('%')");
bt3.innerHTML="%";
let bt4 = document.createElement("button");
bt4.setAttribute("onclick","display('/')");
bt4.innerHTML="/";
let bt5 = document.createElement("button");
bt5.setAttribute("onclick","display('7')");
bt5.innerHTML="7";
let bt6 = document.createElement("button");
bt6.setAttribute("onclick","display('8')");
bt6.innerHTML="8";
let bt7 = document.createElement("button");
bt7.setAttribute("onclick","display('9')");
bt7.innerHTML="9";
let bt8 = document.createElement("button");
bt8.setAttribute("onclick","display('*')");
bt8.innerHTML="*";
let bt9 = document.createElement("button");
bt9.setAttribute("onclick","display('4')");
bt9.innerHTML="4";
let bt10 = document.createElement("button");
bt10.setAttribute("onclick","display('5')");
bt10.innerHTML="5";
let bt11 = document.createElement("button");
bt11.setAttribute("onclick","display('6')");
bt11.innerHTML="6";
let bt12 = document.createElement("button");
bt12.setAttribute("onclick","display('-')");
bt12.innerHTML="-";
let bt13 = document.createElement("button");
bt13.setAttribute("onclick","display('1')");
bt13.innerHTML="1";
let bt14 = document.createElement("button");
bt14.setAttribute("onclick","display('2')");
bt14.innerHTML="2";
let bt15 = document.createElement("button");
bt15.setAttribute("onclick","display('3')");
bt15.innerHTML="3";
let bt16 = document.createElement("button");
bt16.setAttribute("onclick","display('+')");
bt16.innerHTML="+";
let bt17 = document.createElement("button");
bt17.setAttribute("onclick","display('.')");
bt17.innerHTML=".";
let bt18 = document.createElement("button");
bt18.setAttribute("onclick","display('0')");
bt18.innerHTML="0";
let bt19 = document.createElement("button");
bt19.setAttribute("onclick","Cal('=')");
bt19.innerHTML="=";
bt19.className="equal";


calculator.append(input,bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9,bt10,bt11,bt12,bt13,bt14,bt15,bt16,bt17,bt18,bt19);
container.append(calculator);
document.body.append(container);


let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

function Cal(){
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch(error) {
        alert("Invalid")
    }
}