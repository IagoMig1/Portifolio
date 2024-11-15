// Selecionar botões com atributo data-scroll-to
document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', () => {
        const sectionID = button.getAttribute('data-scroll-to'); //obter ID da seção
        const section = document.getElementById(sectionID); //selecionar seção por ID
        if(section){
            section.scrollIntoView({behavior: 'smooth'}); //rola para a seção
        }
    })
})