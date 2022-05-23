//1) Getting HTML in JS 
console.log("hai 💕");
console.log(document);

// // using tag Element
// const headings = document.getElementsByTagName("h3");
// console.log(headings);
// console.log(headings[0].innerText);
// console.log(headings[1].innerText);

// // using class function 
// const coolElements = document.getElementsByClassName('cool');
// console.log(coolElements);
// console.log(coolElements[0].innerText);
// console.log(coolElements[1].innerText);

// // using ID function 
// const funQuote = document.getElementById('fun');
// console.log(funQuote);
// console.log(funQuote.innerText);

// // doing all in one functions
// const headingsQuery = document.querySelectorAll('h3');
// console.log(headingsQuery);
// console.log(headingsQuery[0].innerText);
// console.log(headingsQuery[1].innerText);

// const coolElementsQuery = document.querySelectorAll('.cool');
// console.log(coolElementsQuery);
// console.log(coolElementsQuery[0].innerText);
// console.log(coolElementsQuery[1].innerText);

// const funQuoteQuery = document.querySelector('#fun');
// console.log(funQuoteQuery);
// console.log(funQuoteQuery.innerText);

// // getElementsByTagName("h3"); , getElementsByClassName('cool'); , getElementById('fun'); => querySelectorAll


// // 2) Editing content in HTML via JS 

// console.log(document.querySelector(".todo"));

// //  const repQuote = document.querySelector('.todo');
// //  repQuote.innerText = "hai 🙌"

// //  document.querySelector('.todo').innerText = "hai 💕";

// const allTodo = document.querySelectorAll('.todo');
// console.log(allTodo);


// for (let todo of allTodo) {
//     todo.innerText = "fun 💕"
// }


// // 3) Using Crate ...allTodos..without HTML Using JS 

// const beauty = document.createElement('h2');
// beauty.innerText = "life is alone with love 😍"
// document.body.append(beauty);

// // task 
// const acc = ["ball", "bat", "stump"];

// const accList = document.createElement('ul');
// document.body.append(accList);


// // const accItem = document.createElement('li');
// // accItem.innerText = "ball";
// // accList.append(accItem);

// document.body.append(accItem);

// adding image in JS ]
// const imageURL0 = "https://i.pinimg.com/originals/15/f6/a3/15f6a3aac562ee0fadbbad3d4cdf47bc.jpg";
// const imageURL1 = "https://i.pinimg.com/originals/86/fa/83/86fa83830dc0390d7265455db6068f83.jpg";
// const imageURL2 = "https://i.pinimg.com/originals/7f/a7/bb/7fa7bb83f07e1eb17e768b3d6dabbef7.jpg"; 
// const imageURL3 = "https://wallpaperaccess.com/full/267434.jpg";
// const imageURL4 = "https://wallpapercave.com/wp/YK2h90b.jpg";

// task1 all images adding with loop

const landImages = [
    "https://i.pinimg.com/originals/15/f6/a3/15f6a3aac562ee0fadbbad3d4cdf47bc.jpg",
    "https://i.pinimg.com/originals/86/fa/83/86fa83830dc0390d7265455db6068f83.jpg",
    "https://i.pinimg.com/originals/7f/a7/bb/7fa7bb83f07e1eb17e768b3d6dabbef7.jpg", 
    "https://wallpaperaccess.com/full/267434.jpg",
    "https://wallpapercave.com/wp/YK2h90b.jpg",
];

for (let landImage of landImages) {
    const landscape = document.createElement("img");
    landscape.setAttribute("src", landImage);
    landscape.setAttribute("class", "image-fit");
    document.body.append(landscape);
}


// task2 flag with text 

 "https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463__340.png"




 


