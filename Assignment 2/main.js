const button= document.querySelector('#my-button');
button.addEventListener('click',() =>{



    const username = document.querySelector("#username");
    
    const password = document.querySelector("#password");


    username.style.color ="#00FF00";
    username.style.backgroundColor = "black";
    username.style.fontFamily = "consolas";
    username.style.textAlign = "center";
    username.style.border = "4px solid";
    username.style.borderColor = "blue";

    password.style.color ="#00FF00";
    password.style.backgroundColor = "black";
    password.style.fontFamily = "consolas";
    password.style.textAlign = "center";
    password.style.border = "4px solid";
    password.style.borderColor = "blue";




    const body =document.body
    body.append(' Username:',username.value);
    body.append(' Password:',password.value);


})