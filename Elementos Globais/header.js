const head = document.getElementById('head');
const body = document.getElementById('body');

const styleHeader = "<link rel='stylesheet' href='./header.css'>";
head.innerHTML += styleHeader;

const header = document.createElement('header');
header.setAttribute('id', 'header');
header.setAttribute('class', 'header');
body.prepend(header);

const logo = "<div id='logo' class='logo'><img src='./img/iconrock-red.svg' alt='Logo do Rock' title='Logo Rock' class='imgLogo'></div>";
header.innerHTML += logo;

const footer = document.getElementById('footerSpace');
footer.innerHTML += "<img src='./img/logo-onebitcode.svg' alt='Logo do footer' title='Logo footer' class='imgFooter'><p>Todos os direitos reservados</p><p>2023</p>";