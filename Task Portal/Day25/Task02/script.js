const emoji1 = document.getElementById("1");
const emoji2 = document.getElementById("2");
const emoji3 = document.getElementById("3");

function updateEmoji(element) {
    fetch(
        "https://emojihub.herokuapp.com/api/random/category_animals_and_nature"
    )
        .then((response) => response.json())
        .then((emoji) => {
            element.innerHTML = emoji.htmlCode[0];
        });
}

setInterval(() => updateEmoji(emoji1), Math.floor(Math.random(2000) + 2000));
setInterval(() => updateEmoji(emoji2), Math.floor(Math.random(2000) + 2500));
setInterval(() => updateEmoji(emoji3), Math.floor(Math.random(2000) + 3000));