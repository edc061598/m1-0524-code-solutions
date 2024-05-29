"use strict";
function getInitialsOfPerson(person) {
    const lastIndex = person.length - 1;
    return person.firstName[0] + person.lastName[lastIndex];
}
