// Cursor code REMOVED — normal browser cursor restored (matches index.html)

function toggleMenu() {
    const links = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    links.classList.toggle('mobile-open');
    hamburger.classList.toggle('active');
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
