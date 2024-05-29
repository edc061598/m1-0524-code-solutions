"use strict";
function getDescriptionOfPerson(person) {
    const personName = person.name;
    const personOccupation = person.occupation;
    const personBirthplace = person.birthPlace;
    return `${personName} is a ${personOccupation} from ${personBirthplace}.`;
}
