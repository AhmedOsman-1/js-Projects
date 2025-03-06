const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');


let slideNumber = 0;
const length = images.length;

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
}

right.addEventListener('click', () => {
    if (slideNumber < length - 1) { 
        slideNumber++; 
    } else {
        slideNumber = 0; 
        console.log("end");
    }
    nextSlide();
});


left.addEventListener('click', ()=>{
    if(slideNumber > 0){
        slideNumber--;
    }else{
        slideNumber = length - 1;
    }
    nextSlide()
})

for(let i = 0; i < length; i++){
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = "white";


const resetBg = ()=>{
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    })
}

buttons.forEach((button , i )=>{
    button.addEventListener('click',()=>{
        resetBg();
        slider.style.transform = `translateX(-${i * 800}px)`
        button.style.backgroundColor = "white";

    })
})