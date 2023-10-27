const head = document.getElementById('head');
const body = document.getElementById('body');

const styleHeader = "<link rel='stylesheet' href='./header.css'>";
head.innerHTML += styleHeader;

const header = document.createElement('header');
header.setAttribute('id', 'header');
header.setAttribute('class', 'header');
body.prepend(header);


const headercontent = 
    "<nav class='navBar'>"+
        "<div id='logo' class='logo'>"+
            "<a href='./index.html'>"+
            "<img src='./img/iconrock-red.svg' alt='Logo do Rock' title='Logo Rock' class='imgLogo'></a>"+
            "</div>"+
            "<ul class='navMenu'>"+
            "<li class='navItem'><a href='#' class='navLink'>SOBRE</a></li>"+
            "<li class='navItem'><a href='#' class='navLink'>CONTATO</a></li>"+
            "</ul>"+
        "<div class='hamburguer'><span class='bar'></span><span class='bar'></span><span class='bar'></span></div>"+
    "</nav>"
header.innerHTML += headercontent;


const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
footer.setAttribute('class', 'footer');
body.appendChild(footer);

const footercontent = "<img src='./img/logo-onebitcode.svg' alt='Logo do footer' title='Logo footer' class='imgFooter'><p class='text'>Todos os direitos reservados</p><p class='text'>2023</p>";
footer.innerHTML += footercontent;

const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.navMenu');

hamburguer.addEventListener('click', (evt) => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});