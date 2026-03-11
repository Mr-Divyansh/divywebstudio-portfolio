// Cursor code REMOVED — normal browser cursor restored

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
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.cssText = 'display:flex; flex-direction:column; position:fixed; top:70px; left:0; right:0; background:#0a0a0a; padding:32px 24px; gap:24px; z-index:99; border-bottom:1px solid rgba(255,255,255,0.06)';
    }
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