const content = document.getElementById('content');
const phone = document.getElementById('phone');
const circle = document.getElementById('circle');

let green = document.createElement('span');
green.setAttribute('id', 'green');
green.addEventListener('click', () => {
    phone.src = './img/green.png';
    circle.style.background = '#384937';
});
content.appendChild(green);


let pink = document.createElement('span');
pink.setAttribute('id', 'pink');
pink.addEventListener('click', () => {
    phone.src = './img/pink.png';
    circle.style.background = '#f8ddd6';
});
content.appendChild(pink);

let blue = document.createElement('span');
blue.setAttribute('id', 'blue');
blue.addEventListener('click', () => {
    phone.src = './img/blue.png';
    circle.style.background = '#225f7e';
});
content.appendChild(blue);

let black = document.createElement('span');
black.setAttribute('id', 'black');
black.addEventListener('click', () => {
    phone.src = './img/black.png';
    circle.style.background = '#192028';
});
content.appendChild(black);

let white = document.createElement('span');
white.setAttribute('id', 'white');
white.addEventListener('click', () => {
    phone.src = './img/white.png';
    circle.style.background = '#f7f2ee';
});
content.appendChild(white);

let red = document.createElement('span');
red.setAttribute('id', 'red');
red.addEventListener('click', () => {
    phone.src = './img/red.png';
    circle.style.background = '#ae0617';
});
content.appendChild(red);


