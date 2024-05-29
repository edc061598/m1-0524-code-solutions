/* exported sumAll */
function sumAll(numbers: number[]): any {
  let sum: number = 0;
  for (let i: number = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
