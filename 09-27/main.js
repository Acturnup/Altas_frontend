/*
Fetch (url)
.then (repsone => repsone.json())
.then(json => doYourthing(json))
.catch(e => console.error(e))
*/

// console.log('hello!');
// const request = new Request ('https://meowfacts.herokuapp.com/')
// new request 
/*

*/

// Dont really need this 
class UrlBuilder{
    constructor(base){
        this.base = base;
        this.params = {};
    }

    addParam(key,value){
        this.params[key] = value;
    }

    build(){
        let url = this.base;
        let counter = 0;

        for (const key in this.params){
            if(counter === 0){

            url += '?';
        }
        else{
            url += '&';
            }
            //consdensed version 
            url += counter === 0 ? '?': '&';
            url += key;
            url += '=';
            url += this.params[key];
            counter++;
        }

        return url;
    }
}

const meowfactsUrlBuilder = new UrlBuilder('https://meowfacts.herouapp.com/')
meowfactsUrlBuilder.addParam('count', '4');
const meowfactsUrl = meowfactsUrlBuilder.build();

// fetch('meowfactsUrl',{


// CORS ERRORS MEANS WE CANT USE THE API 

fetch('https://meowfacts.herouapp.com/?count=4',{
    method: 'GET',
    headers: {'Content-Type':'application/json'}
})
    .then((response) =>{
        // console.log(response)
        return response.json();
    })
    .then((json)=>{
        // console.log(json);
        // console.log(json.data[0]);
        for (const catfact of json.data){
            const paragraph =  document.createElement('p');
            paragraph.innerText =catfact;
            document.body.appendChild(paragraph);
        }
    })
    .catch((error)=>{
        console.error(error);
    });

