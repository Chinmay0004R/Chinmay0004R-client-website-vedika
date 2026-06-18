document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.svc-card, .why-item, .contact-btn');
  cards.forEach((card, index) => {
    card.style.animation = `cardPop .4s ease forwards ${index * 0.08 + 0.2}s`;
  });
});

window.addEventListener('scroll', () => {
  const revealItems = document.querySelectorAll('.photo-unit, .strip-img, .why-item, .contact-btn');
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add('revealed');
    }
  });
});
