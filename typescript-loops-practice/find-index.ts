/* exported findIndex */
function findIndex(array: unknown[], value: number): any {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}
