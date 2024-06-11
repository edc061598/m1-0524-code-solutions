/* exported includes */
function includes(array: unknown[], value: number): boolean{

  for(let i:number = 0; i < array.length; i++){
    if(value === array[i]){
      return true;
    }
  } return false;
}
