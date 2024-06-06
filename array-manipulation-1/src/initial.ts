/* exported initial */
function initial(array: any[]): unknown[]{
  const newArray: unknown[] = [];
  for(let i: number = 0; i < array.length-1; i++){
    newArray.push(array[i]);
  }
  return newArray;
}
