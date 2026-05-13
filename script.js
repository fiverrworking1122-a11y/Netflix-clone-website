const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const scroller = document.querySelector('.bigfilmbox');

rightBtn.addEventListener('click', () => {
  scroller.scrollBy({ left: 300, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  scroller.scrollBy({ left: -300, behavior: 'smooth' });
});