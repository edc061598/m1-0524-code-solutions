/* exported isVowel */
function isVowel(char:string):boolean{
const lowerCase:string = char.toLowerCase();
  for (let i: number = 0; i < lowerCase.length; i++) {
    if (
      lowerCase[i] === 'a' ||
      lowerCase[i] === 'e' ||
      lowerCase[i] === 'i' ||
      lowerCase[i] === 'o' ||
      lowerCase[i] === 'u'
    ) {
      return true;
    }
  }
  return false;
}
