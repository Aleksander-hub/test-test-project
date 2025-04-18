const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1.2,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

function toggleFullScreen(img) {
  const fullscreenImg = document.createElement('img');
  fullscreenImg.src = img.src;
  fullscreenImg.style.position = 'fixed';
  fullscreenImg.style.top = '50%';
  fullscreenImg.style.left = '50%';
  fullscreenImg.style.transform = 'translate(-50%, -50%)';
  fullscreenImg.style.maxWidth = '90vw';
  fullscreenImg.style.maxHeight = '90vh';
  fullscreenImg.style.zIndex = 9999;
  fullscreenImg.style.borderRadius = '10px';
  fullscreenImg.style.boxShadow = '0 0 20px rgba(0,0,0,0.6)';
  fullscreenImg.style.cursor = 'pointer';
  fullscreenImg.onclick = () => document.body.removeChild(fullscreenImg);
  document.body.appendChild(fullscreenImg);
}
