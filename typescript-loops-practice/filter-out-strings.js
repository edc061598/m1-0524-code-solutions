"use strict";
/* exported filterOutStrings */
function filterOutStrings(values) {
    const newArray = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] === '') {
            newArray.push(values[i]);
        }
    }
    return newArray;
}
