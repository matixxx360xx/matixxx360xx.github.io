function animateTyping() {
    const technologies = ["React.js", "JavaScript", "TypeScript", "Node.js", "HTML5", "CSS3", "Git"];
    let isDeleting = false;
    let isPaused = false;
    let currentIndex = 0;
    let charIndex = 0;

    const element = document.getElementById("lang");
    setInterval(() => {
        if (isPaused) {
            return;
        }
        const currentTech = technologies[currentIndex % technologies.length];

        if (!isDeleting) {
            element.textContent += currentTech[charIndex]
            charIndex++;
            if (currentTech.length == charIndex) {
                isDeleting = true;
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                }, 600);

            }
        } else {
            charIndex--;
            element.textContent = currentTech.substr(0, charIndex);

            if (charIndex == 0) {
                currentIndex++;
                isDeleting = false;
            }
        }
    }, 200)
} animateTyping()

function Count() {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");

        let count = 0;

        const interval = setInterval(() => {
            count++;
            counter.textContent = count;

            if (count === target) {
                clearInterval(interval);
            }
        }, 10);
    });
} Count()

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 800;
    }
});
