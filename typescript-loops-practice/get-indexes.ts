/* exported getIndexes */
function getIndexes(array: any[]): any {
  const newArray: any[] = [];
  let getIndexes = 0;
  for (let i: number = 0; i < array.length; i++) {
    getIndexes += array[i];
    newArray.push(getIndexes);
  }
  return newArray;
}
