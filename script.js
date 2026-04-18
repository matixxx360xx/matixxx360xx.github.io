
const sections = document.querySelectorAll('.scroll-reveal');

const options = {
    threshold: 0.15 
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target); 
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
   
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
});


document.head.insertAdjacentHTML('beforeend', '<style>.reveal { opacity: 1 !important; transform: translateY(0) !important; }</style>');