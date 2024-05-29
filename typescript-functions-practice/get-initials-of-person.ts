/* exported getInitialsOfPerson */
interface person {
  firstName: string;
  lastName: string;
}
function getInitialsOfPerson(person:any):any {
  const lastIndex: any = person.length - 1;
  return person.firstName[0] + person.lastName[lastIndex];
}
