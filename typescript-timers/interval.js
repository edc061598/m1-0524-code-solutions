"use strict";
const $countdown = document.querySelector('.countdown-display');
if (!$countdown)
    throw new Error('$countdown does not exist');
let count = 4;
const intervalId = setInterval(() => {
    if (count <= 0) {
        clearInterval(intervalId);
        $countdown.textContent = '`Earth is belloowwwwww Us!~';
    }
    else {
        $countdown.textContent = count.toString();
        count--;
    }
}, 1000);
