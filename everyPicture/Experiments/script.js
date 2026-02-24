(function(){
    'use strict';
    console.log('reading js');

    const myImages = ['ear1.jpg', 'ear2.jpg', 'ear3.jpg', 'ear4.jpg', 'ear5.jpg','ear6.jpg', 'ear7.jpg'];

    const myInfomation = ['I got my helix piercing on the left side of my ear when I was 15 years old. I wanted it because I had just seen the Black Widow movie where the character Yelana (who I was obsessed with) had a helix piercing.', 'caption for ear 2', 'caption for ear 3'];

    let currentImage = 0;
    const slide = document.querySelector('#myimage');
    const information = document.querySelector('#information');

    document.querySelector('#next').addEventListener('click', nextPhoto);

    document.querySelector('#previous').addEventListener('click', previousPhoto);

    function nextPhoto(){
        currentImage++;

        if(currentImage > myImages.length-1){
            currentImage = 0;
        }

        slide.src = `images/${myImages[currentImage]}`;
        information.innerHTML = myInformation[currentImage];
        
    }

    function previousPhoto(){
        currentImage--;

        if(currentImage < 0){
            currentImage = myImages.length-1;
        }

        slide.src = `images/${myImages[currentImage]}`;
        information.innerHTML = myInformation[currentImage];
    }
}());