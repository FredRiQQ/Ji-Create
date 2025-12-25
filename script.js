// UI INTERACTIONS
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behaviour: 'smooth'
            });
        }
    });
});


// reveal section on scroll 
const sections = document.querySelectorAll('section');

const revealSection = () => {
    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add('show');
        }
    })
}

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

const interactiveElements = document.querySelectorAll(
    '.team-card, .project-content, button, .primary-btn, .secondary-btn'
);

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.Style.transform = 'translateY(-4px)';
        el.style.transition = 'transform 0.3s ease';
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0)';
    });
});


// active nav link 
const navLinks = document.querySelectorAll('.main-nav a');

const setActiveNav = () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', setActiveNav);