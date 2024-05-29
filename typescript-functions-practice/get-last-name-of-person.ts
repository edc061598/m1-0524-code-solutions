/* exported getLastNameOfPerson */
interface person{
  firstName: string;
  lastName: string;
}
function getLastNameOfPerson(person:any):any {
  return person.lastName;
}
