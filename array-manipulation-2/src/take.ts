/* exported take */
function take(array: any[], count: number): unknown[]{
  let newArray: any[] = [];
  newArray = array.slice(0, count);
  return newArray;
}
