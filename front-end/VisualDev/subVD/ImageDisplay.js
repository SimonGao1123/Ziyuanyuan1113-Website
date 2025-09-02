const imageDisplay = document.querySelector(".section.one:last-of-type"); // inserts images in 2nd section one (after the thumbnail slideshow)
const sectionOneImages = 28;
for (let i = 4; i <= sectionOneImages; i ++) {
    imageDisplay.innerHTML += `<img loading="lazy" class="image" src="LitWomenImgs/${i}.png"/>`;
}