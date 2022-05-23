// create a table using DOM 

// head code 

var table = document.createElement("table");
table.className="table";

var thead = document.createElement("thead");
thead.className="thead-dark";

var tr = document.createElement("tr");

// var th = document.createElement("th");

var th1 = createtrth("th","firstname");
var th2 = createtrth("th","lastname");

tr.append(th1,th2);
thead.append(tr);

// body of the table code 

var tbody = document.createElement("tbody");

var tr = document.createElement("tr");
var td1 = createtrth("td","mak");
var td2 = createtrth("td","otto");
tr.append(td1,td2);

// new line to add details 

var tr2 = document.createElement("tr");
var td3 = createtrth("td","San");
var td4 = createtrth("td","Prasanth");
tr2.append(td3,td4);

// another line 

var tr3 = document.createElement("tr");
var td5 = createtrth("td","Ajith");
var td6 = createtrth("td","Kumar");
tr3.append(td5,td6);

tbody.append(tr,tr2,tr3);

table.append(thead,tbody);
document.body.append(table);

function createtrth(element,values) {
    var ele = document.createElement(element);
    ele.innerHTML=values;
    return ele;
}