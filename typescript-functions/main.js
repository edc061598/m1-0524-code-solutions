'use strict';
function convertMinutestoSeconds(minutes) {
  const minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}
const minutesToSecondsResult = convertMinutestoSeconds(60);
console.log('convertMinutestoSeconds: ', minutesToSecondsResult);
function greet(name) {
  return 'Hey ' + name + '!';
}
const greetResult = greet('Enrique');
console.log(greetResult);
const area = (width, height) => {
  return width * height;
};
const areaResult = area(10, 5);
console.log(areaResult);
const getFirstName = (person) => {
  return person.firstName;
};
const getFirstNameResult = getFirstName({
  firstName: 'Enrique',
  lastName: 'Canel',
});
console.log('getFirstName value ', getFirstNameResult);
const getLastElement = (array) => {
  return array[array.length - 1];
};
const getLastElementResult = getLastElement(['propane', 'and', 'propane']);
console.log(getLastElementResult);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResult = convertMinutestoSeconds(10);
console.log(callOtherFunctionResult);
