"use strict";


import { My_Button } from './models/my_button.js';
import { Color_Button } from './models/color_btn.js';

window.addEventListener("load", () => {
    console.log("Main_script is working");
    // discriptors
    
    const start_button = document.getElementById("start-btn");
    const display_box = document.getElementById("display_box");
    
//events
start_button.addEventListener("click", () => {
console.log("btn is working");
let buttons = [
    new My_Button("Save Progress", "btn"),
    new My_Button("Click me", "btn"),
    new Color_Button("Download", "btn"),
    new My_Button("See more", "btn")
];




for(let button of buttons){
    display_box.innerHTML += `${button.show()}`;
    console.log(button)

   

}


const allButtons = document.getElementsByTagName("button");
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.backgroundColor = "red";}



});


})







