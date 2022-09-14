function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') { //tratamento de erros
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //aqui cria uma constante lista com todas as teclas

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];    
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //aqui uso a forma template string
    
    tecla.onclick = function () { //aqui crio uma função anônima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //evento que adiciona uma classe 'ativa' via teclado        
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }        
    } 

    tecla.onkeyup = function (evento) { //evento ao soltar a tecla remove a classe 'ativa'    
        tecla.classList.remove('ativa');
    }        
}

/*
como acessando os elementos do html diretamente quando não temos classes
document.querySelectorAll('input[type=button]')

acessando a lista pelo o índece
listaDeTeclas[0].onclick = tocaSomPom;
*/
