"use strict";
/* exported capitalizeWords */
function capitalizeWords(string) {
    return string
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
