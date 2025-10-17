document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animate skills on hover
    const skillItems = document.querySelectorAll('.skills-container li');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            motion.animate(item, {
                scale: 1.05,
                x: 10
            }, {
                duration: 0.3,
                ease: "easeOut"
            });
        });

        item.addEventListener('mouseleave', () => {
            motion.animate(item, {
                scale: 1,
                x: 0
            }, {
                duration: 0.3,
                ease: "easeOut"
            });
        });
    });

    // Hero section entrance animation
    const hero = document.querySelector('.hero');
    motion.animate(hero, {
        opacity: [0, 1],
        y: [50, 0]
    }, {
        duration: 1,
        ease: "easeOut"
    });
});