// / Simple method to create 

function fol(elementName,attrName) {

    let ele = document.createElement("elementName");
    ele.className=attrName;
    return ele;
}
/* <div class="container"></div> */

// fol("div","container");

let container1 = fol("div","container");
let row1 = fol("div","row");
let col1 = fol("div","col");