/* exported getFirstInitialOfPerson */
interface person{
  firstName: string;
  lastName: string;
}
function getFirstInitialOfPerson(person: any): any{
  return person.firstName[0];
}
