const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const filter = names.filter((num) => num.includes('d') && num.includes('D'));
console.log(filter);
