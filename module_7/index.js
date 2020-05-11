"use strict";
console.log("html", document);
console.dir(document);

// const button = document.querySelector(".js-btn");
// console.log("default text btn (from html)", button.textContent);
// button.textContent = "new text";
const content = document.querySelector("p");
content.textContent = "Hello world";

const image = document.querySelector(".js-img");
console.dir(image);
image.alt = "text";
image.height = "200";

// button.addEventListener("click", () =>{
//     // 
//     updateImage();
//     sestToggleItem();
// // });
// console.log(button.dataset.action);
// console.log(button.dataset.random);

function updateImage(){
    image.setAttribute("alt", "picture");
};



content.classList.contains("js-list_content");
console.log(content.classList.contains("js-list_content"));
console.log(content.classList.contains("p"));
console.log(content.classList.contains("text"));
//add
content.classList.add("js-list_content");
console.log(content.classList);

//remove
console.log(content.classList.remove("text"));
console.log(content.classList);


//replace
content.classList.replace("js-list_content", "js-item_text");
console.log(content.classList.contains("js-list_content"));
console.log(content.classList);


//toggle
content.classList.toggle("main-content");
console.log(content.classList);



content.classList.toggle("js-item_text");
console.log(content.classList);


content.style.backgroundColor = "red";
content.style.fontSize = "40";


const mainImage = document.querySelector(".main_img");
console.log(mainImage);

mainImage.setAttribute("alt", "altText")

console.log(image.attributes);
console.log(mainImage.attributes);



// data-ction классы 
const button = document.querySelector(`button[dataaction="action"]`);


