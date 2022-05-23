var div = document.createElement("div");
div.className="search"

var label = document.createElement("label");
label.innerHTML="Enter the Name";
label.setAttribute("for","text");

var br = document.createElement("br");

var section = document.createElement("section");
section.className="search-1"
var input = document.createElement("input");
input.setAttribute("type","search");
input.setAttribute("id","text");
input.setAttribute("onkeyup",fun);
input.innerHTML=`
<ul id="myUL">
<li><a href="#">san</a></li>
<li><a href="#">mohan</a></li>

<li><a href="#">mani</a></li>
<li><a href="#">priya</a></li>

<li><a href="#">Calvin</a></li>
<li><a href="#">manoj</a></li>
<li><a href="#">james</a></li>
</ul>
`


var br1 = document.createElement("br");


var button = document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="search";
section.append(input)
div.append(label,br,section,input,br1,button);
document.body.append(div)

function fun() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('text');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.innerText;
      if (txtValue.indexOf(filter) > -1) {
        li[i].style.display = "";
        li[i].style.color = 'red';
      } else {
        li[i].style.display = "none";
      }
    }
}


async function foo() {
    try {
        let cc = document.getElementById("text").value;

    
    let res = await fetch(`https://api.nationalize.io/?name=${cc}`)
    let res1 = await res.json();
    console.log(res1);
    let res2 = [res1];
    // console.log(res2);
    

    for (var i=0;i<res2.length;i++) {
     
        var ele = document.createElement("div");
        ele.className="first"
        // ele.style="18rem"
        ele.innerHTML=`
        <div class="first-card">
        <h1>Nationality</h1>
        <div><span>Name :</span> ${res2[i].name}</div>
        <div><span>Country_id :</span> "${res2[i].country[0].country_id}" ,</div>
        <div><span>Country_id :</span> "${res2[i].country[1].country_id}" ,</div>
        <div><span>Country_id :</span> "${res2[i].country[2].country_id}" ,</div>
        </div>
    `
        document.body.append(ele);
    }
    

    document.body.append(ele)

    } catch {
        console.log(error);
    }

    try {
        let cc = document.getElementById("text").value;
    
    let res = await fetch(`https://api.nationalize.io/?name=${cc}`)
    let res1 = await res.json();
    // console.log(res1);
    let res2 = [res1];
    // console.log(res2);
    
    for (var i=0;i<res2.length;i++) {

        let topTwo = [res2[i].country[0].probability,res2[i].country[1].probability,res2[i].country[2].probability];
        let result = topTwo.sort((x,y)=>y-x).slice(0,2);
        console.log(result);

     
        var ele = document.createElement("div");
        ele.className="second"
        ele.innerHTML=`
        <div class="second-card">
        <h1>Top Two Countries</h1>
        <div><span>Name :</span> ${res2[i].name}</div>
        <div><span>Country_id :</span> "${res2[i].country[0].country_id}" ,  
        <span>Probability :</span> ${result[0]}</div>
        <div><span>Country_id :</span> "${res2[i].country[1].country_id}" ,  
        <span>Probability :</span> ${result[1]}  
        </div>
    
    `
        document.body.append(ele);
    }
    

    document.body.append(ele)

    } catch (error) {
        console.log(error);
    }

    try {
        let cc = document.getElementById("text").value;
    
    let res = await fetch(`https://api.nationalize.io/?name=${cc}`)
    let res1 = await res.json();
    // console.log(res1);
    let res2 = [res1];
    // console.log(res2);

    for (var i=0;i<res2.length;i++) {
     
        var ele = document.createElement("div");
        ele.className="third"
        ele.innerHTML=`
        <div class="third-card">
        <h1>All Details of Data</h1>
        <div><span>Name :</span> ${res2[i].name}</div>
        <div><span>Country_id :</span> "${res2[i].country[0].country_id}" ,  
        <span>Probability :</span> ${res2[i].country[0].probability}</div>
        <div><span>Country_id :</span> "${res2[i].country[1].country_id}" ,  
        <span>Probability :</span> ${res2[i].country[1].probability}
        </div>
        <div><span>Country_id :</span> "${res2[i].country[2].country_id}" ,  
        <span>Probability :</span> ${res2[i].country[2].probability}
        </div>
        </div>
    
    `
        document.body.append(ele);
    }
    

    document.body.append(ele)
    } catch (error) {
        console.log(error);
    }
} 