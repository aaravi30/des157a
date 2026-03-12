(function(){
'use strict';
console.log('reading js');

//sound for the click sound on the roll button
const clickBtn = document.querySelector('#roll');
        const clickSound = new Audio('audio/click.mp3');

clickBtn.addEventListener('mousedown', function () {
                clickSound.play();
            });

//sound for the music on the play music button
const playBtn = document.querySelector('#play');
        const playSound = new Audio('audio/song.mp3');

playBtn.addEventListener('mousedown', function () {
                playSound.play();
            });

//making variable for dice
var t=document.getElementById("game");
        r={dice:["images/number1.png","images/number2.png","images/number3.png","images/number4.png","images/number5.png","images/number6.png"]};

//I tried a lot of things to make the javaScript work but I just couldn't make it work in time
})();