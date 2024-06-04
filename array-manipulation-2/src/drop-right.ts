/* exported dropRight */
function dropRight(array: unknown[], count:number): unknown[]{
  const newArray: unknown[] = [];
  for(let i: number = 0; i < array.length; i++){
    if(count >= array.length){
      return [];
    } else if(i < array.length - count){
   newArray.push(array[i]);
  }
}
  return newArray;
}
