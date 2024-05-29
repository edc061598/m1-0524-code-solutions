/* exported getDescriptionOfPerson */
interface person{
  name: string;
  occupation: string;
  birthPlace: string;
}
function getDescriptionOfPerson(person: any): any {
  const personDescription = person.name + person.occupation + person.birthPlace;
  return personDescription;
}
