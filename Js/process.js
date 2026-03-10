const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
});

function animateFollower() {
    followerX += (mouseX - followerX - 18) * 0.12;
    followerY += (mouseY - followerY - 18) * 0.12;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.style.width = '60px';
        follower.style.height = '60px';
        follower.style.opacity = '0.2';
    });
    el.addEventListener('mouseleave', () => {
        follower.style.width = '36px';
        follower.style.height = '36px';
        follower.style.opacity = '0.5';
    });
});

function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.cssText = 'display:flex; flex-direction:column; position:fixed; top:70px; left:0; right:0; background:#0a0a0a; padding:32px 24px; gap:24px; z-index:99; border-bottom:1px solid rgba(255,255,255,0.06)';
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));