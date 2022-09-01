"use strict";

window.addEventListener('load', () => {
    const
        deadline = new Date('9-9-2022 23:00'),
        days = document.getElementById('val-days'),
        hours = document.getElementById('val-hours'),
        minutes = document.getElementById('val-minutes'),
        seconds = document.getElementById('val-seconds'),
        timeElement = document.getElementById('time');
        
    var timer = null;
    function update(difference) {
        if (difference <= 0) {
            clearInterval(timer);
            document.querySelector('div.container').style.opacity = '0';
            timeElement.textContent = "Time's up";
            timeElement.style.fontSize = '2em';
        }
        else {
            days.textContent = Math.floor(difference / (24 * 60 * 60 * 1000));
            hours.textContent = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            minutes.textContent = Math.floor(((difference % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000));
            seconds.textContent = Math.floor((((difference % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000);
        }
    }

    let difference = new Date(deadline - new Date());
    update(difference);

    var timer = setInterval(() => {
        difference = new Date(deadline - new Date());
        update(difference);
    }, 1000);
});
