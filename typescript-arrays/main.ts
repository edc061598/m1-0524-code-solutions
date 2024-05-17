const colors: string[] = ['red', 'white', 'blue'];
const firstColor: string = colors[0];
const secondColor: string = colors[1];
const lastColor: string = colors[colors.length - 1];
const America: string = `America is ${firstColor}, ${secondColor}, and ${lastColor}`;
console.log('colors[0] ', firstColor);
console.log('colors[1] ', secondColor);
console.log('colors[2] ', lastColor);
console.log(America);
colors[colors.length - 1] = 'green';
const Mexico: string = `Mexico is ${firstColor}, ${secondColor}, and ${colors[2]}`;
console.log(Mexico);
console.log('value of colors ', colors);
console.log('typeof colors ', typeof colors);

const students: string[] = ['Aizen', 'Jack', 'Kazuma', 'Eren'];
const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} students in the class`);

const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log('The last student is ', lastStudent);
console.log('Value of students ', students);
console.log('typeof students ', typeof students);
