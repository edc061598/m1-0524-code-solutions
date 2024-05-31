/* exported tail */
function tail(array: any[]): unknown[]{
  const newArray: unknown[] = [];
  for(let i: number = 1; i < array.length; i ++){
    newArray.push(array[i]);
  }
  return newArray;
}
