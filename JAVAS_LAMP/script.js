const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const troca = document.getElementById('trocarlamp');
const ativarsen = document.getElementById('ativarsens')


function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src = './IMG/ligada.jpg';
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src = './IMG/desligada.jpg';
    }
}

function LampBroken(){
    if(!isLampBroken()){
        lamp.src = './IMG/quebrada.jpg';
    }
}

function troclamp(){
    if(isLampBroken()){
        lamp.src = './IMG/desligada.jpg';
    }
}

let test = true;

function ativar(){

    if (test) {
        turnOn.disabled = true;
        turnOff.disabled = true;
        lamp.addEventListener("mouseover", lampOn);
        lamp.addEventListener("mouseout", lampOff);
    } else {
        turnOn.disabled = false;
        turnOff.disabled = false;
        lamp.removeEventListener("mouseover", lampOn);
        lamp.removeEventListener("mouseout", lampOff);
    }

    test = !test;
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("dblclick", LampBroken);
troca.addEventListener("click", troclamp);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseout", lampOff);
ativarsen.addEventListener("click", ativar);
