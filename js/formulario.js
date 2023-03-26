const formulario = document.querySelector('form');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    const botao = document.querySelector('form .botao');
    botao.textContent = 'Enviando...'
    botao.disabled = true;

    const data = new FormData(formulario);

    fetch('../enviar.php', {
        method: "POST",
        body: data
    }).then(res => {

        if(res.ok) {

            formulario.innerHTML='<p class="font-1-xl" style="grid-column:1/-1; padding:3rem 0 1rem 0;"><span style="color:#00AA00;">Formulário enviado</span>. Em breve entraremos em contato.</p>'
            return;
        }

            formulario.innerHTML='<p class="font-1-xl" style="grid-column:1/-1; padding:3rem 0 1rem 0;"><span style="color:#AA0A00;">Ops...algo errado aconteceu</span>. Você pode entrar em contato diretamente conosco em <a style="color:#0000FF;text-decoration:underline;" href="mailto:contato@gmail.com">contato@gmail.com</a>.</p>'

    });
    
});



