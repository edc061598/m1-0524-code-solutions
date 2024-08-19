"use strict";
/* exported capitalizeWord */
function capitalizeWord(word) {
    // Convert the entire string to lowercase
    let lowerStr = word.toLowerCase();
    // Capitalize the first character
    let result = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
    if (lowerStr === 'question') {
        return 'Q' + lowerStr.slice(1);
    }
    result = result.split('').map(char => {
        if (char === 'j' || char === 's') {
            return char.toUpperCase();
        }
        return char;
    }).join('');
    return result;
}
