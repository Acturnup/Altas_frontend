const button= document.querySelector('#my-button');
button.addEventListener('click',() =>{
    // Process form here

    // text input
    const fristTextInput = document.querySelector('#first-text-input')
    console.log(fristTextInput.value);

    // color input 
    const colorInput =document.querySelector("#color-input");
    const form = document.querySelector('form');
    form.style.backgroundColor = colorInput.value;


    // Check boxes input
    const checkboxesElement = document.querySelector('#checkboxes input');
    const checkboxes = document.querySelectorAll('input');
    for (const checkbox of checkboxes){
        console.log
    }

    // make sure the page doesnt refresh when you hit enter
    const myform = document.getElementById('my-form');
    myform.addEventListener('submit',(event) => {
        event.preventDefault
    });

})