const width: number = 10;
const height: number = 20;
const area: number = width * height;
console.log('The area is ', area);
console.log('Typeof area ', typeof area);

const bill: number = 100;
const payment: number = 200;
const change: number = payment - bill;
console.log('Change is ', change);
console.log('typeof change ', typeof change);

const quizzes: number = 50;
const midterm: number = 70;
const final: number = 85;
const grade: number = (quizzes + midterm + final) / 3;
console.log('Grade is ', grade);
console.log('typeof grade ', typeof grade);

const firstName: string = 'Enrique';
const lastName: string = ' Canel';
const fullName: string = firstName + lastName;
console.log("Hi I'm ", fullName);
console.log('typeof fullName ', typeof fullName);

const pH: number = 7;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic ', isAcidic);
console.log('typeof isAcidic ', typeof isAcidic);

const headCount: number = 300;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta ', isSparta);
console.log('typeof isSparta ', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT!';
console.log('value of motto ', motto);
console.log('typeof motto ', typeof motto);
