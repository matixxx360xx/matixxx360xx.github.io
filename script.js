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
    const counters = document.querySelectorAll(".stat-number[data-target]");

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


const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {

    let mouseX = 0;
    let mouseY = 0;
    let isHover = false;

    card.addEventListener("mousemove", (e) => {
        const d = card.getBoundingClientRect();

        mouseX = e.clientX - d.left;
        mouseY = e.clientY - d.top;
    });

    card.addEventListener("mouseenter", () => {
        isHover = true;
    });

    card.addEventListener("mouseleave", () => {
        isHover = false;

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
        `;
    });

    function animate() {
        if (!isHover) {
            requestAnimationFrame(animate);
            return;
        }

        const d = card.getBoundingClientRect();

        const centerX = d.width / 2;
        const centerY = d.height / 2;

        const rotateY = -((mouseX - centerX) / centerX) * 15;
        const rotateX = ((mouseY - centerY) / centerY) * 15;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

        requestAnimationFrame(animate);
    }

    animate();
});
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 800;
    }
});
