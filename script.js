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

