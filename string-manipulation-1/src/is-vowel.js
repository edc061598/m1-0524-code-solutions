"use strict";
/* exported isVowel */
function isVowel(char) {
    const lowerCase = char.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === 'a' ||
            lowerCase[i] === 'e' ||
            lowerCase[i] === 'i' ||
            lowerCase[i] === 'o' ||
            lowerCase[i] === 'u') {
            return true;
        }
    }
    return false;
}
