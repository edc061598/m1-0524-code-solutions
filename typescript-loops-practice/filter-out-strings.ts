/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  const newArray: any[] = [];
  for (let i: number = 0; i < values.length; i++) {
    if (values[i] === '') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
