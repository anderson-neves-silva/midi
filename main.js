function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
//aqui cria uma constante lista com todas as teclas
const listaDeTeclas = document.querySelectorAll('.tecla');
//criando uma referência variável
let contador = 0;

while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];    
    const instrumento = tecla.classList[1];
    //aqui uso a forma template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);   
    //aqui crio uma função anônima
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador =  contador + 1;
    //console.log(contador);
}

/*
como acessando os elementos do html diretamente quando não temos classes
document.querySelectorAll('input[type=button]')

acessando a lista pelo o índece
listaDeTeclas[0].onclick = tocaSomPom;
*/