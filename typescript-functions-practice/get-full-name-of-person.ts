/* exported getFullNameOfPerson */
interface person{
  firstName: string;
  lastName: string;
}
function getFullNameOfPerson(person: any): any {
  const fullName = person.firstName + ' ' + person.lastName;
  return fullName;
}
