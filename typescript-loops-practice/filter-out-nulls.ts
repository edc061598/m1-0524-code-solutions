/* exported filterOutNulls */
function filterOutNulls(values: any[]): unknown[] {
  const newArray: any[] = [];
  for (let i: number = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
