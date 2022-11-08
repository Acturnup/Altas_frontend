console.log("hello world!");

function sayHello(name: String):String{
    console.log(`Hello ${name!}`);
    return `Hello ${name}!`;
}

sayHello('Peter');

interface Dog {
    name:String,
    age:number
}

const buddy: Dog ={
    name:'buddy',
    age:12
};

const Cookie: Dog = {
    name:'cookie',
    age:3
}

class classroom {
   public roomNumber: number;

    constructor(roomNumber:number){
        this.roomNumber =104;
    }
}

const atlas104 = new classroom(104);
console.log(atlas104.roomNumber);