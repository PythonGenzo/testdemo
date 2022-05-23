// Basic for create element in HTML 

let element = document.createElement("div");
element.innerHTML="This is a div";
document.body.append(element);

// Click Button 
function foo() {
    let element = document.createElement("div");
element.innerHTML="This is a div";
document.body.append(element);
}


// Bootstrap model

let container = document.createElement("div");
container.setAttribute("class","container");

let row = document.createElement("div");
container.setAttribute("class","row");

let col = document.createElement("div");
container.setAttribute("class","col");

row.append(col);
container.append(row);
document.body.append(container);

// Simple method to create 

// function fol(elementName,attrName) {

//     let ele = document.createElement("elementName");
//     ele.className=attrName;
//     return ele;
// }
// /* <div class="container"></div> */

// // fol("div","container");

// let container1 = fol("div","container");
// let row1 = fol("div","row");
// let col1 = fol("div","col");





