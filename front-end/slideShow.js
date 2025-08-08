const closeBt = document.querySelector('.close');
const nextBt = document.querySelector('.next');
const prevBt = document.querySelector('.prev');

// the variable that will be given and removed from the class .show to show visibility
const slideshow = document.querySelector('.slideshow');

// selections all elements with class 'section'
const images = document.querySelectorAll('.section img');
const slideshowImg = document.querySelector('.slideshow-img');

let imageArr = Array.from(images).map(img => img.src);

// will iterate through the image array full of all the images from the section
var currInd = 0;

function showImg (index) {

    slideshowImg.classList.add('invis'); // this will cause the fading effect when switching images 
    // first remove and then readd the slideshow with a gap in timein the middle
    
    setTimeout (function () {
        // parameter of an image and displays the image from the array at that index
        currInd = index; // update current index for future movement
        slideshowImg.src = imageArr[index];
        slideshow.classList.add('show');
        slideshowImg.classList.remove('invis'); // this will cause the fading effect when switching images 

    }, 200);
}

// each image becomes a button and when they are clicked 
// they will display the slideshow image from that index they are attached to
images.forEach(function(img, index) {
    img.addEventListener('click', function() {
        showImg(index);
    });
});

closeBt.addEventListener('click', function () {
    slideshow.classList.remove('show');
});
nextBt.addEventListener('click', function () {
    // modulus prevents overflow and just loops around when above array length acheived
    currInd = (currInd + 1) % imageArr.length;
    showImg(currInd);
});
prevBt.addEventListener('click', function () {
    currInd = (imageArr.length + (currInd - 1)) % imageArr.length;
    showImg(currInd);
});

// 'keydown' refers to whenever the use presses a key
// hotkeys instead of using buttons (left and right arrow keys and escape)
// e is the key they pressed
document.addEventListener('keydown', function(e) {
    // if slideshow is not shown then don't proceed with hotkeys
    if (!slideshow.classList.contains('show')) {
        return;
    }
    if (e.key == 'ArrowLeft') {
        prevBt.click();
    }
    if (e.key == 'ArrowRight') {
        nextBt.click();
    }
    if (e.key == 'Escape') {
        closeBt.click();
    }
}); 