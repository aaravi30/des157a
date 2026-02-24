(function(){
'use strict';
console.log('reading js');

        document.querySelector('.open1').addEventListener('click', function (event) {
                event.preventDefault();
                document.querySelector('#overlay1').className = 'showing1';
        });

        document.querySelector('.close1').addEventListener('click', function (event){
            event.preventDefault();
            document.querySelector('#overlay1').className = 'hidden1';
        });

        document.querySelector('.open2').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#overlay2').className = 'showing2';
        });

        document.querySelector('.close2').addEventListener('click', function (event){
            event.preventDefault();
            document.querySelector('#overlay2').className = 'hidden2';
        });


        document.querySelector('.open3').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#overlay3').className = 'showing3';
        });

        document.querySelector('.close3').addEventListener('click', function (event){
            event.preventDefault();
            document.querySelector('#overlay3').className = 'hidden3';
        });

        document.addEventListener('keydown', function (event){
            if(event.key === 'Escape'){
                document.querySelector('#overlay1').className = 'hidden1';
                document.querySelector('#overlay2').className = 'hidden2';
                document.querySelector('#overlay3').className = 'hidden3';
            }
        })


        const myImages1 = ['leLobes.jpg', 'leConch.jpg', 'leHelix.jpg', 'leFHelix.jpg'];

        let currentImage1 = 0;
        const slide1 = document.querySelector('#myimage1');

        document.querySelector('#next1').addEventListener('click', nextPhoto1);

        document.querySelector('#previous1').addEventListener('click', previousPhoto1);

        function nextPhoto1(){
            currentImage1++;

            if(currentImage1 > myImages1.length-1){
                currentImage1 = 0;
            }

            slide1.src = `images/${myImages1[currentImage1]}`;
        }

        function previousPhoto1(){
            currentImage1--;

            if(currentImage1 < 0){
                currentImage1 = myImages1.length-1;
            }

            slide1.src = `images/${myImages1[currentImage1]}`;
        }



        const myImages2 = ['reLobes.jpg', 'reConch.jpg', 'reDaith.jpg', 'reHelix.jpg'];

        let currentImage2 = 0;
        const slide2 = document.querySelector('#myimage2');

        document.querySelector('#next2').addEventListener('click', nextPhoto2);

        document.querySelector('#previous2').addEventListener('click', previousPhoto2);

        function nextPhoto2(){
            currentImage2++;

            if(currentImage2 > myImages2.length-1){
                currentImage2 = 0;
            }

            slide2.src = `images/${myImages2[currentImage2]}`;
        }

        function previousPhoto2(){
            currentImage2--;

            if(currentImage2 < 0){
                currentImage2 = myImages2.length-1;
            }

            slide2.src = `images/${myImages2[currentImage2]}`;
        }



        const myImages3 = ['sideNose.jpg', 'frontNose.jpg'];

        let currentImage3 = 0;
        const slide3 = document.querySelector('#myimage3');

        document.querySelector('#next3').addEventListener('click', nextPhoto3);

        document.querySelector('#previous3').addEventListener('click', previousPhoto3);

        function nextPhoto3(){
            currentImage3++;

            if(currentImage3 > myImages3.length-1){
                currentImage3 = 0;
            }

            slide3.src = `images/${myImages3[currentImage3]}`;
        }

        function previousPhoto3(){
            currentImage3--;

            if(currentImage3 < 0){
                currentImage3 = myImages3.length-1;
            }

            slide3.src = `images/${myImages3[currentImage3]}`;
        }

}());

