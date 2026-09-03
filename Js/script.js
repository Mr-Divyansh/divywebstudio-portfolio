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

function handleSubmit() {
    const btn = document.querySelector('.form-submit');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
    }, 3000);
}
