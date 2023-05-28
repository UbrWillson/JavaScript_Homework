
import { My_Button } from './my_button.js';
export class Color_Button extends My_Button {
    
    constructor(color){
        super("Save Progress","btn");
        this._btn_class = color;
    }

    show_upgraded() {
        const  coloured = `<button style="${this._btn_class}">${this._text}</button>`
    };
    
}



