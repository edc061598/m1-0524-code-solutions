/* exported countdown */
function countdown(num: number): any {
  const numbers: number[] = [];
  for (let i: number = num; i >= 0; i--) {
    numbers.push(i);
  }
  return numbers;
}
