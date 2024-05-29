/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber: number = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): any {
  let count: number = 1;
  let repeated: string = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('matter', 5));

function logEachCharacter(str: string): any {
  for (let i: number = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log(logEachCharacter('javascript'));

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i: number = 0; i < numbers.length; i++) {
    numbers[i] += 2;
    doubled.push(numbers[i]);
  }
  return doubled;
}
console.log('doubleAll value ', doubleAll([90, 20, 30]));

function getKeys(obj: Record<string, unknown>): any[] {
  const keys: any[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(getKeys({ 'Darth Vader': 35 }));

function getValues(obj: Record<string, unknown>): any[] {
  const values: any[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log(getValues({ 'Darth Vader': 35 }));
