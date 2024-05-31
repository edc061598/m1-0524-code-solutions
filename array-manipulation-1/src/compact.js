"use strict";
/* exported compact */
function compact(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true && array[i] !== null && array[i] !== isNaN && array[i] !== 0 && array[i] !== undefined && array[i] !== "") {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
