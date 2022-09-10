
// Event Listeners 

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


grandparent.addEventListener('click', e =>{
    console.log("grandparent 1")

})

parent.addEventListener('click', e =>{
    console.log("parent 1")

})

child.addEventListener('click', e =>{
    console.log("child 1")

})


child.addEventListener('mouseenter',() =>{
     child.style.backgroundColor = "#ff0000";

})

child.addEventListener('mouseleave',() =>{
    child.style.backgroundColor = "#000";

})

document.addEventListener('click', e =>{
    console.log("document 1")
})

// https://www.youtube.com/watch?v=YXsEY079P6E

//  Chaning the CSS property through 
document.querySelector("#myButton").onclick = function(){

    const h1 = document.querySelector("#myH1");

    console.log(h1.style)

    h1.style.color ="#00FF00";
    h1.style.backgroundColor = "black";
    h1.style.fontFamily = "consolas";
    h1.style.textAlign = "center";
    h1.style.border = "4px solid";
    h1.style.borderColor = "blue";
}

// DOM not css


// add words to document body
const body =document.body
body.append("hello world");


// add div to document 
const div = document.createElement("div")
// adds to the index.html
body.append(div)
div.innerText="Bye world"







// const h1 = document.getElementById("heading");
// h1.innerText= "hello from js!";

// const divs =document.querySelectorAll(".myDiv");
// for (const div of divs){
//     div.style.backgroudColor= "#000ff";
// }

// const div = document.querySelector("div");

// const button = document.querySelector("button");


// div.addEventListener('mouseenter',() =>{
//     div.style.backgroundColor = "#ff0000";
// });

// div.addEventListener('mouseleave',() =>{
//     div.style.backgroundColor = "#0000ff";
// });
