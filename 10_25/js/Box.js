export default class Box {
    constructor(color,width,height,x,y){
        this.el = document.createElement('div');
        this.el.style.backgroundColor =  color;
        this.el.style.width = `${width}px`;
        this.el.style.height = `${height}px`;
        this.el.style.position = 'absoulte';
        this.el.style.left = `${x}px`;
        this.el.style.top = `${y}px`;

        // this.onMouseEnter = this.onMouseEnter.bind(this);

        this.el.addEventListener('mouseenter', this.onMouseEnter);
        this.el.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    }

    onMouseEnter(){

    // do somethhing about this mouse entering 
    this.el.style.backgroundColor = 'blue';
    }
    onMouseLeave = () =>{
    // do somethhing about this mouse leaving 
    this.el.style.backgroundColor = 'green';
    
    }

    getElement(){
        return this.el;
    }
}