const selectorImg = document.querySelector('.default-selector');
const prevB = document.querySelector('.prev');
const nextB = document.querySelector('.next');
const imgSelector = document.querySelectorAll('.img-selector img');

const imgArr = Array.from(imgSelector).map(img => img.src);

let currInd = 0;

imgSelector.forEach((img, index) => {
    img.addEventListener('click', () => {
        selectorImg.classList.add('invis');
        setTimeout (()=> {
            selectorImg.src = imgArr[index];
            currInd = index;
            selectorImg.classList.remove('invis');
        }, 200);
    })
});

prevB.addEventListener('click', ()=> {
    selectorImg.classList.add('invis');
    currInd = (imgArr.length + (currInd - 1)) % imgArr.length;
    
    
    setTimeout (()=> {
            
            selectorImg.src = imgArr[currInd];
            selectorImg.classList.remove('invis');
        }, 200);
});

nextB.addEventListener('click', ()=> {
    selectorImg.classList.add('invis');
    setTimeout (()=> {
            currInd =  (currInd + 1) % imgArr.length;
            selectorImg.src = imgArr[currInd];
            selectorImg.classList.remove('invis');
        }, 200);
});

