const x =2;
let y= 3;

y = x+y;

const str ="this bob's";
const template =`this is a ${x} template ${y} literral`;
const concat ='this is a ' + x + ' concation literral';

console.log(str);
console.log(template);
console.log(concat);

const myArray = [0,2,7,8];

console.log(myArray);
console.log(myArray[3]);

myArray.push(10);

console.log(myArray);


const classroom = {
    building: "ATLAS",
    room: 104
}




console.log(classroom);
console.log(classroom.room);
console.log(classroom["building"]);

classroom.ocupancyLimit = 30;

console.log (classroom);

y= 11;
const stringy = "11";
if(y === stringy) {
    console.log(y);
    console.log("hello");
} 
else {
 console.log(x);
}

while (y < 15) {
    console.log(y);
    y++;
}

//??
for(let i = 0;i<myArray.length; i++)
{

    console.log(`index: ${i}`);
    console.log(`value: ${myArray[i]}`);
}
 //??
for (const item of myArray){
    console.log(`value:${item}`);

}
//??

for (const item in myArray){
    console.log(`key:${key}`);
    console.log(`value:${classroom[key]}`);
    
}

//??
myArray.forEach(function (item){
    console.log(`value: ${item}`);
});

function add(x,y){
    return x+y;

}

console.log(add(7,15))


const subtract = (x,y) => {

    return x-y;
}

console.log(subtract (7,15));


const h1 = document.getElementById("heading");
h1.innerText= "hello from js!";

const divs =document.querySelectorAll(".myDiv");
for (const div of divs){
    div.style.backgroudColor= "#000ff";
}

const div = document.querySelector("div");

const button = document.querySelector("button");


div.addEventListener('mouseenter',() =>{
    div.style.backgroundColor = "#ff0000";
});

div.addEventListener('mouseleave',() =>{
    div.style.backgroundColor = "#0000ff";
});


