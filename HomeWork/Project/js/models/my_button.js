

export class My_Button {
    
    constructor (text,btn_class){
        this._text = text;
        this._btn_class = btn_class;
    }

    get text() {
        return this._text;
    };

    set text(value) {
     this._text = value;
    } 

    get btn_class() {
        return this._btn_class;
    };

    set btn_class(newBtn_class){
        this._btn_class = newBtn_class;
    }

    show() {
        const btn = `<button class="${this._btn_class}">${this._text}</button>`;
        document.write(btn)
    }

    
}
