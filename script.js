// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      960: {
        slidesPerView: 3
      }
    }
  });
  
  // Функция полноэкранного просмотра
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
  
