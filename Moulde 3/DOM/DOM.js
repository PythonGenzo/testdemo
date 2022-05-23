// 1) creating an HTML element dynamically
// using document.createElement("elementName");
var element = document.createElement("div");
// /* <div></div> */
// 2) to add content :
// innerHTML: it is a property , to add the content to HTML element 
element.innerHTML="This is a div";
// /* <div>This is a div</div> */
// 3) after the creating html element, we should add the content 
// to the content to the body of the document
document.body.append(element);


var add = document.createElement("p");
add.innerHTML="This is <mark>Para</mark>";
document.body.append(add);

// var element = document.createElement("div");
// element.innerHTML="This is a div";
// var add = document.createElement("p");
// add.innerHTML="This is Para";
// // document.body.append(element,add);

/* <div><p>this is a para </p></div> */
var p = document.createElement("div");
p.innerHTML="<p>this is p</p>";
// p.innerText="<p>this is p</p>";
document.body.append(p);


// {/* <div class="main">this is a main class</div> */}
// how to create the html element by attribute
var att = document.createElement("div");
att.innerHTML="this is a class selector"
att.setAttribute("class","main");
document.body.append(att);

// image tag

var img = document.createElement("img");
img.setAttribute("src","https://jquery-plugins.net/image/plugin/dom-to-image-generate-image-from-dom-with-html5-canvas.png");
img.setAttribute("alt","DOM");
document.body.append(img);



/* <div class="container">
    <div class="row">
        <div class="col"></div>
    </div>
</div> */


var container = document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("div");
row.setAttribute("class","row");

var col = document.createElement("div");
col.setAttribute("class","col");

row.append(col);
container.append(row);
document.body.append(container);

// shortcut
// var container = document.createElement("div");
// container.className="container";

// var row = document.createElement("div");
// row.className="row";

// var col = document.createElement("div");
// col.className="col"

// row.append(col);
// container.append(row);
// document.body.append(container);

// if you want a class only add directly 
// only add class 
var cla = document.createElement("div");
cla.className="main";
document.body.append(cla);


// already you have a HTML element , you are suppose to modify

// 1) document.getElementById("main");
// 2) document.getElementsByClassName("main");
// 3) document.getElementsByTagName("main");
// 4) document.querySelector
// 5) document.querySelectorAll

var res = document.getElementById("main");
// document.getElementById("main").innerHTML="this is div";
console.log(res);
 

