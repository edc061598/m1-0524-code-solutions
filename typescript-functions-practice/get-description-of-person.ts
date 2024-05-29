/* exported getDescriptionOfPerson */
interface person{
  name: string;
  occupation: string;
  birthPlace: string;
}
function getDescriptionOfPerson(person: any): any {
  const personName: string =  person.name;
  const personOccupation: string = person.occupation;
  const personBirthplace: string = person.birthPlace;

  return `${personName} is a ${personOccupation} from ${personBirthplace}.` ;
}
