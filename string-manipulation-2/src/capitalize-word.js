"use strict";
/* exported capitalizeWord */
function capitalizeWord(word) {
    const firstChar = word.charAt(0);
    return firstChar.toUpperCase() + word.slice(1).toLowerCase();
}
