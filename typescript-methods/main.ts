const superheroes = ['Batman', 'Iron Man', 'Hulk', 'Flash'];
let randomNumber = Math.random();

randomNumber *= superheroes.length;

const randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

const randomHero = superheroes[randomIndex];
console.log(randomHero);

const library = [
  {
    title: '100 years of solitude',
    author: 'Gabriel Herrera',
  },
  {
    title: ' Secrets',
    author: 'Tim Murphy',
  },
  {
    title: 'Sherlock Holmes',
    author: 'Enrique Canel',
  },
];
const lastBook = library.pop();
console.log(lastBook);

const firstBook = library.shift();
console.log(firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'Css Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

const fullName = 'Enrique Canel';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);

const employee = {
  name: 'Steven',
  age: '33',
  position: 'Engineer',
};
const employeeKeys = Object.keys(employee);
console.log(employeeKeys);
const employeeValues = Object.values(employee);
console.log(employeeValues);
const employeePairs = Object.entries(employee);
console.log(employeePairs);
