"use strict";
/* exported truncate */
function truncate(length, string) {
    for (let index = length; index < string.length; index++) {
        if (string.length > index) {
            return string.slice(0, index) + "...";
        }
        else {
            string = "";
        }
    }
    return string + '...';
}
