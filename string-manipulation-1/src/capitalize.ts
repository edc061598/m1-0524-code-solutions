/* exported capitalize */
function capitalize(word:string):string{
  if(word.length !== 0){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
