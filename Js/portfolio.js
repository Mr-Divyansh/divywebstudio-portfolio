// Cursor code REMOVED — normal browser cursor restored (matches index.html)

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function toggleMenu() {
    const links = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    links.classList.toggle('mobile-open');
    hamburger.classList.toggle('active');
}

function filterProjects(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.project-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            if (!prefersReducedMotion) {
                card.style.animation = 'none';
                card.offsetHeight;
                card.style.animation = 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            }
        } else {
            card.style.display = 'none';
        }
    });
}
