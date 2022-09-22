// const heading = document.getElementById('heading')
// console.log(heading.innerHTML);


// throw new Error('this is an error!');


// ERRORS NOT HANDLED
/*
const input = document.getElementById('input');
input.addEventListener('change',function(){

    if (input.value > 10 ) {
        throw new Error('woah that\'s too big!')
    }
    console.log('thanks that\'s a good number');

});
*/
//

//errors are handled
/*
const input = document.getElementById('input');


/**
* This function hadnles the input valuethe input value processing 
* has the potential to throw an error  
*/
/*
function handleInput(){

    if (input.value > 10 ) {
        throw new Error('woah that\'s too big!')
    }
    console.log('thanks that\'s a good number');
}
input.addEventListener('change',function(){

    try{
        //try the code
        handleInput();
    }  catch(e) {
        //handle the error
        console.error(e);  // console.log(e) puts it in white
                            // console.error () puts it in red
    }
    finally{    // this code will run after handling the error

    }
    //maybe there's more code
});
*/


// //synchronos code
// function takesAReallyLongTime() {
//     let sum =0;
//     for(let i=0; i <100000000; i++){
//         sum +=i;
//     }
//     console.log(`the really big sum is ${sum}}`);
//     return sum;
    
// }


// const result = takesAReallyLongTime()
// console.log(result);
// console.log('this log takes place after takesAReallyLongTime ')


/*
//async code
function takesAReallyLongTime() {
    let sum =0;
    for(let i=0; i <100; i++){
        sum +=i;
    }
    console.log(`the really big sum is ${sum}}`);
    return sum;
    
}

setTimeout(function(){
    const result = takesAReallyLongTime();
    console.log(result);
}
);
console.log('this log takes place after takesAReallyLongTime ')

*/



/*
//async with promises

function takesAReallyLongTimeWithPromises(){
    return new Promise(function(resolve,reject){
        let sum =0;
        for(let i=0; i <100; i++){
            sum +=i;
        }
        console.log(`the really big sum is ${sum}}`);
        resolve(sum);    
    })
}

takesAReallyLongTimeWithPromises()
.then(function(result){
console.log(result);


})

.catch(function(error){
console.error(error);

});

console.log('this log takes place after takesAReallyLongTime ');
*/


/*
async function takesAReallyLongTimeAsync() {
    let sum =0;
    for(let i=0; i <100; i++){
        sum +=i;
    }
    console.log(`the really big sum is ${sum}}`);
    return sum;
    
}

takesAReallyLongTimeAsync()
.then(function(result){

    console.log(result);
});
// Force it to be sync with await
const result = await takesAReallyLongTimeAsync();
console.log(result);
console.log('this log takes place after takesAReallyLongTime');


*/

/*
// bad loop wit setTimeout
let counter =0;
function loop(){
    console.log('loop!')
    console.log(counter);
    counter++; 

    setTimeout(loop,100);
}

setTimeout(loop);


*/


// do it better with setINterval
/*
let counter =0;
function loop(){
    console.log('loop!')
    console.log(counter);
    counter++; 
}

const intervalId = setInterval(loop,100);

button.addEventListener('click', () => {clearInterval(intervalId)});

*/


// Do it best with requestAnimationFrame
let counter =0;
function loop(){
    console.log('loop!')
    console.log(counter);
    counter++; 

    requestAnimationFrame(loop);   
}

requestAnimationFrame(loop);
