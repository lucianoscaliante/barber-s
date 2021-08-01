
function inicia(){
        document.getElementById("home").addEventListener("click", goToSection);
        document.getElementById("sobre").addEventListener("click", goToSection);
        document.getElementById("galeria").addEventListener("click", goToSection);
        document.getElementById("contato").addEventListener("click", goToSection);
}

window.addEventListener("load", inicia);

function goToSection(){
        
        var section = event.target.dataset.nome;
        document.getElementById(section).scrollIntoView();
}

