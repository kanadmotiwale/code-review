// Experience hover functionality
document.querySelectorAll('.exp-trigger').forEach((trigger) => {
  const target = document.getElementById(trigger.dataset.target);
  
  trigger.addEventListener('mouseenter', () => {
    target.style.display = 'block';
    setTimeout(() => (target.style.opacity = '1'), 10);
  });
  
  trigger.addEventListener('mouseleave', () => {
    target.style.opacity = '0';
    setTimeout(() => (target.style.display = 'none'), 300);
  });
});

// Tech stack image hover
const techBoxes = document.querySelectorAll('.techbox');
const techImage = document.getElementById('techImage');

techBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    techImage.src = box.dataset.image;
    techImage.style.display = 'block';
  });
  
  box.addEventListener('mouseleave', () => {
    techImage.style.display = 'none';
  });
});

const ticker = document.querySelector('.news-ticker');
let scrollPos = 0;

function autoScroll() {
  scrollPos -= 2;
  ticker.style.transform = `translateX(${scrollPos}px)`;
  
  if (scrollPos < -ticker.scrollWidth) {
    scrollPos = window.innerWidth;
  }
  
  requestAnimationFrame(autoScroll);
}

autoScroll();