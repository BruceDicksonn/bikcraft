/*Ativar links do header menu*/
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){

    if(location.href.includes(link.href)){
        link.classList.toggle('ativo')
    }

}

links.forEach(link => ativarLink(link));


/*Ativar itens do orçamento*/
const parametros = new URLSearchParams(location.search)

parametros.forEach((param)=> {
    const elemento = document.getElementById(param);
    if(elemento){
        elemento.checked = true;
    }
})



/* Perguntas frequentes */
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(e) {
    
    const pergunta = e.currentTarget;
    const resposta = document.getElementById(pergunta.getAttribute('aria-controls'));
    resposta.classList.toggle('ativa')

    const ativa = resposta.classList.contains('ativa');

    pergunta.setAttribute('aria-expanded',ativa);
    console.log(pergunta)


}

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click',ativarPergunta);
});


// Galeria de Bikes
 
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width:1000px)').matches;

    if(media) galeriaContainer.prepend(img)
    
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria)



// Animação
// Verificar se a janela atual possui o script referenciando o plugin
if(window.SimpleAnime) new SimpleAnime();