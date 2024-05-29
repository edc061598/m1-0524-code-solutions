"use strict";
/* exported getStudentNames */
function getStudentNames(students) {
    const keys = [];
    for (const key in students) {
        keys.push(students[key]);
    }
    return keys;
}
