/* exported chunk */
function chunk(array:unknown[], size:number): unknown[]{
  const newArrays:unknown[] = [];
  for(let i:number = 0; i < size; i++){
    if(i < array.length - size){
    const newArray: unknown[] = array.slice(i);
      newArrays.push(newArray);
    }
  }
  return newArrays;
}
