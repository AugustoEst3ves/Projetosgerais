function calcularpeso(event){
    event.preventDefault();

    let pstext = document.getElementById('pesobrutofix').innerHTML;
    let ps = parseFloat(pstext);
    let pt = document.getElementById('pesotara').value;
    let pl = ps - pt;
    pl = pl.toFixed(2);

    document.getElementById("pesoliquido").value = pl;
    
}

document.getElementById("form").addEventListener("submit", calcularpeso)
