/* exported takeRight */
function takeRight(array: unknown[], count:number): unknown[]{
const newArray: unknown[] = [];

  for (let i: number = array.length - count ; i < array.length; i++) {
    if (count > array.length) {
      return array;
    }
    newArray.push(array[i]);
}
  return newArray;
}
