/* exported capitalizeWord */
function capitalizeWord(word:string):string{
  const firstChar:string = word.charAt(0);
  return firstChar.toUpperCase() + word.slice(1).toLowerCase();
}
