
const sections = document.querySelectorAll('.scroll-reveal');

const options = {
    threshold: 0.15
};

const observer = new IntersectionObserver(function (entries, observer) {
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

function language() {

    let tabLang = ["React.js", "JavaScript", "Node.js", "Html", "Css", "Git"];
    let i = 0;
    let j = 0;
    let delet = false;
    let wait = false;

    let write = document.getElementById("lang");

    setInterval(() => {

        if (wait) {
            return;
        }

        let word = tabLang[i];


        if (i === tabLang.length) {
            i = 0;
            word = tabLang[i];
        }

        if (!delet) {

            write.textContent = word.substr(0, j);

            if (j === word.length) {
                delet = true;
                wait = true;

                setTimeout(() => {
                    wait = false;
                }, 300);

            } else {
                j++;
            }

        } else {

            j--;
            write.textContent = word.substr(0, j);

            if (j === 0) {
                delet = false;
                i++;
            }
        }

    }, 150)
}

language();