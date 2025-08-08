/* SELECTS WITHIN EACH STORYBOARD */
document.querySelectorAll('.storyboard').forEach(story => {
const thumbs     = Array.from(story.querySelectorAll('.thumbs img'));
const slideshow  = story.querySelector('.slideshow');
const slideImg   = slideshow.querySelector('.slide-img');
const btnClose   = slideshow.querySelector('.close');
const btnNext    = slideshow.querySelector('.next');
const btnPrev    = slideshow.querySelector('.prev');
let currentIndex = 0;

function openSlide(idx) {
    currentIndex = idx;
    slideImg.style.opacity = 0;
    setTimeout(() => {
    slideImg.src = thumbs[currentIndex].src;
    slideshow.classList.add('show');
    slideImg.style.opacity = 1;
    }, 200);
}
function closeSlide() { slideshow.classList.remove('show'); }
function showNext() {
    if (!btnNext) return;
    currentIndex = (currentIndex + 1) % thumbs.length;
    openSlide(currentIndex);
}
function showPrev() {
    if (!btnPrev) return;
    currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    openSlide(currentIndex);
}

thumbs.forEach((img, idx) => img.addEventListener('click', () => openSlide(idx)));
btnClose.addEventListener('click', closeSlide);
if (btnNext) btnNext.addEventListener('click', showNext);
if (btnPrev) btnPrev.addEventListener('click', showPrev);

slideshow.addEventListener('keydown', e => {
    if (!slideshow.classList.contains('show')) return;
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'Escape')     closeSlide();
});
slideshow.setAttribute('tabindex', '0');
});