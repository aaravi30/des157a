(function(){
    'use strict';
    console.log('reading js');

    const myform = document.querySelector('#madlib-questions');
    const sections = document.querySelectorAll('section');
    const errorAlert = document.querySelector('#error');

    myform.addEventListener('submit', function(event){
        event.preventDefault();
        const timeOfDay = document.querySelector('#timeOfDay').value;
        const city = document.querySelector('#city').value;
        const person1 = document.querySelector('#person1').value;
        const thing = document.querySelector('#thing').value;
        const number = document.querySelector('#number').value;
        const person2 = document.querySelector('#person2').value;

        let myText;

        if (timeOfDay === ''){
            myText = '"What was the <span>time of day</span>?"';
            document.querySelector('#timeOfDay').focus();
            errorAlert.innerHTML = myText;
        }else if(city ==''){
            myText = '"What <span>city</span> did this happen in?"';
            document.querySelector('#city').focus();
            errorAlert.innerHTML = myText;
        }else if(person1 ==''){
            myText = '"Who was the <span>person</span> involved?"';
            document.querySelector('#person1').focus();
            errorAlert.innerHTML = myText;
        }else if(thing ==''){
            myText = '"Pardon me, what was the <span>thing</span>?"';
            document.querySelector('#thing').focus();
            errorAlert.innerHTML = myText;
        }else if(number ==''){
            myText = '"Excuse me, what <span>number</span>?"';
            document.querySelector('#number').focus();
            errorAlert.innerHTML = myText;
        }else if(person2 ==''){
            myText = '"Who was the <span>person</span> involved?"';
            document.querySelector('#person2').focus();
            errorAlert.innerHTML = myText;
        } else {
            sections[0].className = 'hidden';
            sections[1].className = 'showing';

            document.querySelector('#timeOfDayResult').innerHTML = timeOfDay;
            document.querySelector('#cityResult').innerHTML = city;
            document.querySelector('#person1Result').innerHTML = person1;
            document.querySelector('#thingResult').innerHTML = thing;
            document.querySelector('#numberResult').innerHTML = number;
            document.querySelector('#person2Result').innerHTML = person2;
            
            document.querySelector('#timeOfDay').value = '';
            document.querySelector('#city').value = '';
            document.querySelector('#person1').value = '';
            document.querySelector('#thing').value = '';
            document.querySelector('#number').value = '';
            document.querySelector('#person2').value = '';
        } 
    });
}());
