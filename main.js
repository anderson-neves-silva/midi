function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //aqui cria uma constante lista com todas as teclas

for (let contador = 0; contador < listaDeTeclas.length; contador++) { //para
    const tecla = listaDeTeclas[contador];    
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //aqui uso a forma template string
    
    tecla.onclick = function () { //aqui crio uma função anônima
        tocaSom(idAudio);
    }

}



/*
como acessando os elementos do html diretamente quando não temos classes
document.querySelectorAll('input[type=button]')

acessando a lista pelo o índece
listaDeTeclas[0].onclick = tocaSomPom;
*/
