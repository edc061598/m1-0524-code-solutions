/* exported reverse */
function reverse(array: any[]): unknown[]{
  const newArray: unknown[] = [];
  for(let i:number = array.length-1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}
