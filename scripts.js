// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Add animation to elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card, .process-step, h2, h3, h4, p, img, .btn, .accordion-item, .carousel-item, .contact-icon, .whatsapp-widget');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.getAttribute('data-animation') || 'animate__fadeInUp';
                entry.target.classList.add('animate__animated', animation);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => {
        observer.observe(element);
    });
});