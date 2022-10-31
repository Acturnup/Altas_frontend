import * as _ from 'lodash';
function sayHello(name) {
for(let i= 0; i< times; i++){
    const p = document .createElement ('p');
    p.innerHTML = 'hello world';
    document.body.append(p);
    }
}

// _.delay (sayHello, 1500, 'Peter');

const input = document.querySelector('input');
input.addEventListener('change', () => {
    console.log('Changed!');
    const times= _.clamp(input.value, 0, 10);
    _.delay (sayHello, 1500, 'Peter');
})

