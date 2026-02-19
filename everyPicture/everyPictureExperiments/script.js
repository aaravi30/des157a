(function(){
    'use strict';
    console.log('reading js');

    const myImages = ['ear1.jpg', 'ear2.jpg', 'ear3.jpg', 'ear4.jpg', 'ear5.jpg','ear6.jpg', 'ear7.jpg'];

    let currentImage = 0;
    const slide = document.querySelector('#myimage');

    document.querySelector('#next').addEventListener('click', nextPhoto);

    document.querySelector('#previous').addEventListener('click', previousPhoto);

    function nextPhoto(){
        currentImage++;

        if(currentImage > myImages.length-1){
            currentImage = 0;
        }

        slide.src = `images/${myImages[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;

        if(currentImage < 0){
            currentImage = myImages.length-1;
        }

        slide.src = `images/${myImages[currentImage]}`;
    }
}());