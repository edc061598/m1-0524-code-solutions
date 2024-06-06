"use strict";
/* exported initial */
function initial(array) {
    const newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
