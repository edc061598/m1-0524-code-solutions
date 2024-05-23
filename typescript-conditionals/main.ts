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

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
const isUnderFiveResult = isUnderFive(5);
console.log(isUnderFiveResult);

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const isEvenResult = isEven(5);
console.log(isEvenResult);

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
const startsWithJResult = startsWithJ('Jake');
console.log(startsWithJResult);

function isOldEnoughToDrink(person: any): boolean {
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

function isOldEnoughToDrive(person: any): boolean {
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

function isOldEnoughToDrinkAndDrive(person: any): boolean {
  if (person) {
    return false;
  }
}
const isOldEnoughToDrinkAndDriveResult = isOldEnoughToDrinkAndDrive(
  'Enrique',
  25
);
console.log(isOldEnoughToDrinkAndDriveResult);

function categorizeAcidity(pH: number): string {
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
const categorizeAcidityResult = categorizeAcidity(7);
console.log(categorizeAcidityResult);

function introduceWarnerBro(name: any): string {
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
const introduceWarnerBroResult = introduceWarnerBro('fhfhfhf');
console.log(introduceWarnerBroResult);

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'The A-team';
    case 'comedy':
      return 'Bruce Almighty';
    case 'horror':
      return 'Evil Dead';
    case 'drama':
      return 'The Departed';
    case 'musical':
      return 'The Lion King';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'No movies listed';
  }
}
const recommendMovieResult = recommendMovie('action');
console.log('recommendMovieResult value ', recommendMovieResult);
