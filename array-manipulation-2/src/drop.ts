/* exported drop */
function drop(array: any[], count:number): any[]{
  let newArray: any[] = [];
  newArray = array.slice(count);
  return newArray;
}
