// === sub1VD.js === (fullscreen popup slideshow)
window.addEventListener("load", () => {
    const closeBt = document.querySelector('.slideshow .closeSlide');
    const nextBt = document.querySelector('.slideshow .nextSlide');
    const prevBt = document.querySelector('.slideshow .prevSlide');
    const slideshow = document.querySelector('.slideshow');
    const slideshowImg = document.querySelector('.slideshow-img');
    const images = document.querySelectorAll('.section.one img');

    let imageArr = Array.from(images).map(img => img.src);
    let currInd = 0;

    function showImg(index) {
        currInd = index;
        slideshowImg.src = imageArr[index];
        slideshow.classList.add('show');
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => showImg(index));
    });

    closeBt.addEventListener('click', () => slideshow.classList.remove('show'));

    nextBt.addEventListener('click', () => {
        currInd = (currInd + 1) % imageArr.length;
        showImg(currInd);
    });

    prevBt.addEventListener('click', () => {
        currInd = (imageArr.length + (currInd - 1)) % imageArr.length;
        showImg(currInd);
    });

    document.addEventListener('keydown', e => {
        if (!slideshow.classList.contains('show')) return;
        if (e.key === 'ArrowLeft') prevBt.click();
        if (e.key === 'ArrowRight') nextBt.click();
        if (e.key === 'Escape') closeBt.click();
    });
})();