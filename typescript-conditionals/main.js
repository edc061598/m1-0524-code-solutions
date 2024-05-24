'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const lewis = {
  name: 'Lewis Smith',
  age: 25,
};
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
const isUnderFiveResult = isUnderFive(5);
console.log(isUnderFiveResult);
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const isEvenResult = isEven(5);
console.log(isEvenResult);
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
const startsWithJResult = startsWithJ('Jake');
console.log(startsWithJResult);
function isOldEnoughToDrink(person) {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}
const matthew = {
  name: 'Matthew Reed',
  age: 25,
};
const isOldEnoughToDrinkResult = isOldEnoughToDrink(matthew);
console.log(isOldEnoughToDrinkResult);
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const vader = {
  name: 'Darth Vader',
  age: 15,
};
const isOldEnoughToDriveResult = isOldEnoughToDrive(vader);
console.log(isOldEnoughToDriveResult);
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
const isOldEnoughToDrinkAndDriveResult = isOldEnoughToDrinkAndDrive(
  'Enrique',
  25
);
console.log(isOldEnoughToDrinkAndDriveResult);
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
const categorizeAcidityResult = categorizeAcidity(18);
console.log(categorizeAcidityResult);
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
const introduceWarnerBroResult = introduceWarnerBro('dot');
console.log(introduceWarnerBroResult);
function recommendMovie(genre) {
  switch (genre) {
  }
}
