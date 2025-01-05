// Scroll-to-Top Button Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
const showScrollButtonThreshold = 300;

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollTopBtn.style.display = scrollTop > showScrollButtonThreshold ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
