const blurSelector = document.querySelector('.blur-selector');
const colorSelector = document.querySelector('.color-selector');
const marginSelector = document.querySelector('.margin-selector');
const root = document.querySelector(':root');

function blurHandler(){
    root.style.setProperty('--blur-value',(blurSelector.value+"px"));
}

function colorHandler(){
    root.style.setProperty('--bg-color',colorSelector.value);
}

function marginHandler(){
    root.style.setProperty('--padding',(marginSelector.value+"rem"));
}

blurSelector.addEventListener("change",blurHandler)
colorSelector.addEventListener("change",colorHandler)
marginSelector.addEventListener("change",marginHandler)
blurSelector.addEventListener("mousemove",blurHandler)
colorSelector.addEventListener("mousemove",colorHandler)
marginSelector.addEventListener("mousemove",marginHandler)


