// Cursor code REMOVED — normal browser cursor restored (matches index.html)

const drawer = document.querySelector('.mobile-navigation-drawer');
const menu = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const backdrop = document.querySelector('.mobile-menu-backdrop');
const closeButton = document.querySelector('.mobile-nav-close');

function closeMenu() {
    if (!drawer || !backdrop || !hamburger) return;
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    hamburger.classList.remove('active');
    document.body.classList.remove('menu-open');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
}

function openMenu() {
    if (!drawer || !backdrop || !hamburger) return;
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    hamburger.classList.add('active');
    document.body.classList.add('menu-open');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
}

function toggleMenu() {
    if (!drawer || !backdrop || !hamburger) return;
    if (drawer.classList.contains('is-open')) {
        closeMenu();
    } else {
        openMenu();
    }
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

if (closeButton) {
    closeButton.addEventListener('click', closeMenu);
}

if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
}

document.querySelectorAll('.mobile-navigation-drawer a').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        closeMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
        closeMenu();
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
