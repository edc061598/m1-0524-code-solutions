"use strict";
/* exported numVowels */
function numVowels(string) {
    let vowels = 0;
    for (let char of string) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            vowels++;
        }
    }
    return vowels;
}
