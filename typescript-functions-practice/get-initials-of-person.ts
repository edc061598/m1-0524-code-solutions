/* exported getInitialsOfPerson */
interface person {
  firstName: string;
  lastName: string;
}
function getInitialsOfPerson(person:any):any {
  return person.firstName[0] + person.lastName[0];


}
