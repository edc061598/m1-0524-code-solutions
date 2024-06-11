"use strict";
/* exported getWords */
function getWords(string) {
    if (string === '') {
        return [];
    }
    else {
        return string.split(' ');
    }
}
