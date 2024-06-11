/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const newArrays: unknown[] = [];
  let leftovers: unknown[] = [];
  for (let i: number = 0; i < array.length; i++) {
    if (i % size === 0) {
      newArrays.push([array[i]]);
      // to chunk the arrays
    } else {
      leftovers = newArrays[newArrays.length - 1];
      // make the chunk
      leftovers.push(array[i]);
    }
  }
  return newArrays;
}
