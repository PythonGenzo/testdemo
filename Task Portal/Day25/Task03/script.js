

var div = document.getElementsByClassName("main");

var input = document.createElement("input");
input.setAttribute("type","search");
input.setAttribute("id","text");


var br1 = document.createElement("br");


var button = document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="GET";
document.body.append(div,input,br1,button)



async function foo() {
    try {
        let cc = document.getElementById("text").value;

    
    let res = await fetch(`https://api-thirukkural.vercel.app/api?num=${cc}`)
    let res1 = await res.json();
    // console.log(res1);
    let res2 = [res1];
    // console.log(res2);

    

    for (var i=0;i<res2.length;i++) {
     
        var ele = document.getElementById("result");
        ele.innerHTML=`
    number: ${res2[i].number}
    sect_tam: ${res2[i].sect_tam}
    chapgrp_tam: ${res2[i].chapgrp_tam}
    chap_tam: ${res2[i].chap_tam}
    line1: ${res2[i].line1}
    chap_eng: ${res2[i].chap_eng}
    chap_tam: ${res2[i].chap_tam}
    chapgrp_eng: ${res2[i].chapgrp_eng}
    chapgrp_tam: ${res2[i].chapgrp_tam}
    eng: ${res2[i].eng}
    eng_exp: ${res2[i].eng_exp}
    line1: ${res2[i].line1}
    line2: ${res2[i].line2}
    number: ${res2[i].number}
    sect_eng: ${res2[i].sect_eng}
    sect_tam: ${res2[i].sect_tam} 
    tam_exp: ${res2[i].tam_exp}

        `
        document.body.append(ele);
    }
    

    document.body.append(ele)

    } catch {
        console.log(error);
    }
}