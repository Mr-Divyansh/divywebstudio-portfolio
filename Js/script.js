// Cursor code REMOVED — normal browser cursor restored

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .project-card, .step, .why-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = prefersReducedMotion
        ? 'none'
        : 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

function toggleMenu() {
    const links = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    links.classList.toggle('mobile-open');
    hamburger.classList.toggle('active');
}

function handleSubmit() {
    const btn = document.querySelector('.form-submit');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
    }, 3000);
}
