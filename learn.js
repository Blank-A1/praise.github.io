const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.getElementById(this.getAttribute('href').slice(1));
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});