// ======= ANIMATION AU SCROLL POUR SECTIONS =======
const sections = document.querySelectorAll('section');

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom && sectionTop > -section.offsetHeight){
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkSections);
checkSections();

// ======= ANIMATION DES CARTES SERVICES =======
const cards = document.querySelectorAll('.card');

function animateCards() {
    const triggerBottom = window.innerHeight / 5 * 4;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom && cardTop > -card.offsetHeight){
            card.classList.add('show-card');
        } else {
            card.classList.remove('show-card');
        }
    });
}

window.addEventListener('scroll', animateCards);
animateCards();

// ======= SCROLL PROGRESS BAR =======
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});
// ======= FIN DU SCRIPT =======