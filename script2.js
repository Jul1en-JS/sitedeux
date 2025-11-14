// ====== ANIMATIONS SECTIONS (toggle show) ======
const sections = document.querySelectorAll('section');
function checkSections() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(s => {
    const top = s.getBoundingClientRect().top;
    if (top < trigger && top > -s.offsetHeight) s.classList.add('show');
    else s.classList.remove('show');
  });
}
window.addEventListener('scroll', checkSections);
window.addEventListener('resize', checkSections);
checkSections();

// ====== CARDS animation on scroll (repeats when exit/enter) ======
const cards = document.querySelectorAll('.card');
function checkCards() {
  const trigger = window.innerHeight * 0.9;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger && top > -card.offsetHeight) card.classList.add('show-card');
    else card.classList.remove('show-card');
  });
}
window.addEventListener('scroll', checkCards);
window.addEventListener('resize', checkCards);
checkCards();

// ====== PROGRESS BAR ======
let progressBar = document.getElementById('progress-bar');
if (!progressBar) {
  progressBar = document.createElement('div');
  progressBar.id = 'progress-bar';
  document.body.prepend(progressBar);
}
window.addEventListener('scroll', () => {
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / (docHeight || 1)) * 100;
  progressBar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
});

// ====== MOBILE: flip on tap (because hover n'existe pas) ======
function enableMobileFlip() {
  if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flip'); // active .flip -> CSS tourne .card-inner
        // optionally remove flip after 3s so it resets:
        setTimeout(() => card.classList.remove('flip'), 4000);
      });
    });
  }
}
enableMobileFlip();
