const sema = document.getElementById('sema');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) =>{
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => { colorIndex = colorIndex < 2 ? ++colorIndex : 0
    /*if(colorIndex < 2){ colorIndex++} else{ colorIndex = 0} */
}

const changerColor = () => {
    const colors = ['vermelho', 'verde', 'amarelo']
    const color = colors [colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOn = {
    'vermelho' : () => sema.src = './img/vermelho.png',
    'amarelo' : () => sema.src = './img/amarelo.png',
    'verde' : () => sema.src = './img/verde.png',
    'auto' : () => intervalId = setInterval(changerColor, 500)
}

buttons.addEventListener('click', trafficLight)


