// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto', // автоматически рассчитывает, сколько слайдов показывать
  spaceBetween: 16,      // расстояние между слайдами (в пикселях)
  grabCursor: true,      // курсор в виде "руки"
  loop: false,           // отключаем бесконечную прокрутку
  centeredSlides: false, // не центрируем первый слайд
});

// Функция для увеличения изображения на весь экран
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
  fullScreenImg.style.boxShadow = '0 0 10px rgba(255,255,255,0.5)';

  fullScreenDiv.appendChild(fullScreenImg);

  fullScreenDiv.addEventListener('click', () => {
    document.body.removeChild(fullScreenDiv);
  });

  document.body.appendChild(fullScreenDiv);
}
