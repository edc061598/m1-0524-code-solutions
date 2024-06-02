/* exported takeRight */
function takeRight(array: unknown[], count:number): unknown[]{
const newArray: unknown[] = [];
// newArray = array.slice(count);
  for(let i:number = count; i < array.length; i++){
    if(i < array.length){
    newArray.push(array[i]);
    }
  }
  return newArray;
}
