"use strict";
function ransomCase(string) {
    const splitString = string.toLowerCase().split('');
    return string.split('').map((char, index) => {
        return index % 2 !== 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
}
