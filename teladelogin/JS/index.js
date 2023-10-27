if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar esta página!');
    window.location.href = '../HTML/signIn.html';
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let Logado = document.querySelector('#logado');
Logado.innerHTML = `Olá ${userLogado.nome}`;

function sair(){
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = '../HTML/signIn.html';
}