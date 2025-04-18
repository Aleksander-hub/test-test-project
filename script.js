const swiper = new Swiper('.swiper-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 1.2,
  centeredSlides: true,

  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});

function toggleFullScreen(img) {
  const fullScreenDiv = document.createElement('div');
  fullScreenDiv.style.position = 'fixed';
  fullScreenDiv.style.top = 0;
  fullScreenDiv.style.left = 0;
  fullScreenDiv.style.width = '100%';
  fullScreenDiv.style.height = '100%';
  fullScreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  fullScreenDiv.style.display = 'flex';
  fullScreenDiv.style.justifyContent = 'center';
  fullScreenDiv.style.alignItems = 'center';
  fullScreenDiv.style.zIndex = 9999;

  const fullScreenImg = document.createElement('img');
  fullScreenImg.src = img.src;
  fullScreenImg.style.maxWidth = '90%';
  fullScreenImg.style.maxHeight = '90%';
  fullScreenImg.style.borderRadius = '10px';

  fullScreenDiv.appendChild(fullScreenImg);

  fullScreenDiv.addEventListener('click', () => {
    document.body.removeChild(fullScreenDiv);
  });

  document.body.appendChild(fullScreenDiv);
}
