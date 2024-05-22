function convertMinutestoSeconds(minutes: number): number {
  const minutesToSeconds: number = minutes * 60;
  return minutesToSeconds;
}
const minutesToSecondsResult: number = convertMinutestoSeconds(60);
console.log('convertMinutestoSeconds: ', minutesToSecondsResult);

function greet(name: string): string {
  return 'Hey ' + name + '!';
}
const greetResult: string = greet('Enrique');
console.log('value of greetResult ', greetResult);

const area = (width: number, height: number): number => {
  return width * height;
};
const areaResult: number = area(10, 5);
console.log('areaResult value ', areaResult);

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => {
  return person.firstName;
};
const getFirstNameResult: string = getFirstName({
  firstName: 'Enrique',
  lastName: 'Canel',
});
console.log('getFirstName value ', getFirstNameResult);

const getLastElement = (array: any[]): any => {
  return array[array.length - 1];
};
const getLastElementResult: any = getLastElement(['propane', 'and', 'propane']);
console.log('getLastElementResult value ', getLastElementResult);

function callOtherFunction(otherFunction: Function, params: unknown): string {
  return otherFunction(params);
}

const callOtherFunctionResult: any = convertMinutestoSeconds(10);
console.log('value of callOtherFunctionResult ', callOtherFunctionResult);
const callResult: any = callOtherFunction(getFirstName, 'Enrique');
console.log(callResult);
