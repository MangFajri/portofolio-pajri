// === Smooth Scroll ===
// Efek scroll halus untuk navigasi internal (anchor link)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// === Tombol "Kembali ke Atas" ===
const toTopBtn = document.getElementById('toTopBtn');

if (toTopBtn) {
  window.addEventListener('scroll', () => {
    toTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// === Toggle Dark Mode ===
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark-mode');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
}

