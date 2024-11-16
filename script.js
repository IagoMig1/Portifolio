document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', () => {
        const sectionID = button.getAttribute('data-scroll-to');
        const section = document.getElementById(sectionID);
        if(section){
            section.scrollIntoView({behavior: 'smooth'});
        }
    })
})

function handleScrollAnimation(){
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50){
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);

document.addEventListener('DOMContentLoaded', handleScrollAnimation)
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
