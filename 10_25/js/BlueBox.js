import Box from './Box.js';
export default class BlueBox extends Box {
    constructor(width, height){
        super('#2C2C54', width, height, 0, 0);

        this.el.style.zIndex = '-1';
        this.el.addEventListener ('mousemove')
    }

    onMouseMove= () => {
        this.el.style.left = `${event.page}px`;
        this.el.style.left = `${}px`;
    }
}