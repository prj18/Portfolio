const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // adjust the value to your liking
    header.classList.add('translucent');
  } else {
    header.classList.remove('translucent');
  }
});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    const descriptionDiv = card.querySelector('.project-description');
    descriptionDiv.style.transform = 'translateY(0)';
  });
});