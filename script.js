function toggleFullScreen(imgElement) {
    let fullscreenImg = document.getElementById('fullscreen-image');
    if (!fullscreenImg) {
        fullscreenImg = document.createElement('img');
        fullscreenImg.id = 'fullscreen-image';
        fullscreenImg.classList.add('fullscreen-img');
        fullscreenImg.onclick = () => fullscreenImg.classList.remove('active');
        document.body.appendChild(fullscreenImg);
    }
    fullscreenImg.src = imgElement.src;
    fullscreenImg.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        let currentIndex = 0;
        const images = carousel.querySelectorAll('img');
        const totalImages = images.length;

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.transform = `translateX(${(i - index) * 100}%)`;
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showImage(currentIndex);
        }

        // Initial display
        showImage(currentIndex);

        // Optional: Add buttons for navigation
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.classList.add('carousel-button');
        nextButton.onclick = nextImage;

        const prevButton = document.createElement('button');
        prevButton.innerText = 'Prev';
        prevButton.classList.add('carousel-button');
        prevButton.onclick = prevImage;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('carousel-buttons');
        buttonContainer.appendChild(prevButton);
        buttonContainer.appendChild(nextButton);

        carousel.appendChild(buttonContainer);
    });
}); 
