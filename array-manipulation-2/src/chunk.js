"use strict";
/* exported chunk */
function chunk(array, size) {
    const newArrays = [];
    for (let i = 0; i < size; i++) {
        if (i < array.length - size) {
            const newArray = array.slice(i);
            newArrays.push(newArray);
        }
    }
    return newArrays;
}
