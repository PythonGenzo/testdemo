
const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.jpg",
    "5.jpg"

];

const firstImage = 0;
const lastImage= images.length -1;
let currentImage = 0;

const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click",()=>{

    const imageTag = document.getElementById("image");
    currentImage++;
    if(currentImage >= lastImage){
        currentImage = 4;
    }

    imageTag.src = images[currentImage];
    
});

const preBtn = document.getElementById("pre");
preBtn.addEventListener("click",()=>{

    const imageTag = document.getElementById("image");
    currentImage--;
    if(currentImage <= firstImage){
        currentImage = 0;
    }

    imageTag.src = images[currentImage];
    
});



const text = [
    "We can tell who our owners are! We know if they're here or not!",
    "We all have our own personalities!",
    "We love people!",
    "Don't touch us too often! You could damage our slime coat and it may hurt",
    "We are near extinct. Raise some of your own axolotls with proper care to help us!"
];

const firstText = 0;
const lastText= text.length -1;
let currentText = 0;

const nextBtn1 = document.getElementById("next2");
nextBtn1.addEventListener("click",()=>{

    const textTag = document.querySelector("p");
    currentText++;
    if(currentText >= lastText){
        currentText = 4;
    }

    textTag.innerText = text[currentText];
    
});

const preBtn1 = document.getElementById("pre2");
preBtn1.addEventListener("click",()=>{

    const textTag = document.querySelector("p");
    currentText--;
    if(currentText <= firstText){
        currentText = 0;
    }

    textTag.innerText = text[currentText];
    
});