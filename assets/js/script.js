
// FUNCÃO PARA ABRIR E FECHAR O MENU
function menuShow(event) {
    
    // MENU
    const menu = document.querySelector('.navegacao__listaLinks');
    menu.classList.toggle('ativado');

    // ÍCONE DO MENU
    const hamburguer = document.querySelector('.btnMenu__hamburguer');
    hamburguer.classList.toggle('ativado');

    // ACESSIBILIDADE 
    if (event.type == 'touchstart') event.preventDefault();

    const ativado = menu.classList.contains('ativado');

    // ARIA LABEL
    if (ativado) {

        event.currentTarget.setAttribute('aria-label', 'Botão fechar menu');

    } else {
        event.currentTarget.setAttribute('aria-label', 'Botão abrir menu');

    }

    // ARIA EXPANDED
    event.currentTarget.setAttribute('aria-expanded', ativado);

}

const btnMenu = document.getElementById('btnMenu');
btnMenu.addEventListener('click', menuShow);
btnMenu.addEventListener('touchstart', menuShow);