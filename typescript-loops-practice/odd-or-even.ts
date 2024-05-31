/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const newArray: string[] = [];
  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
