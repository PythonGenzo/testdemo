var label = document.createElement("label");
label.innerHTML="Enter the country name";
label.setAttribute("for","text");

var br = document.createElement("br");

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");

var br1 = document.createElement("br");

var button = document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="search";

document.body.append(label,br,input,br1,button);

async function foo() {
    try {
        let cc = document.getElementById("text").value;
    // console.log(cc);
    let res = await fetch(`https://api.covid19api.com/total/country/${cc}`)
    let res1 = await res.json();
    console.log(res1);
    for (var i=0;i<res1.length;i++) {
        // console.log(`
        // Active : ${res1[i].Active}
        // Deaths : ${res1[i].Deaths}
        // `);
        var ele = document.createElement("div");
        ele.style.color="brown";
        ele.style.fontSize="30px";
        ele.innerHTML=`
        Active : ${res1[i].Active}
        Deaths : ${res1[i].Deaths}
        `
        document.body.append(ele);
    }
    } catch {
        console.log(error);
    }

} 