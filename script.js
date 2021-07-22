document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionCollapse = button.nextElementSibling;
        
        button.classList.toggle('accordion__button--active');

        if(button.classList.contains('accordion__button--active')) {
            accordionCollapse.style.maxHeight = accordionCollapse.scrollHeight + 'px';
        } else {
            accordionCollapse.style.maxHeight = 0;
        }
    })
})