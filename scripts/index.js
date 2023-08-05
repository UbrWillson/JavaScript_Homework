const doc = document;

let numberForFunc = 1;


const btnStart = doc.querySelector('.slideShowStart')

function slideShowProcess(){

    doc.querySelector('#radio' + numberForFunc).checked = true;
    numberForFunc++;
    if(numberForFunc > 4){
        numberForFunc = 1;
    }
}

btnStart.onclick = function slideshow() {
    console.log('btn is working')
    setInterval(slideShowProcess, 5000);
}

