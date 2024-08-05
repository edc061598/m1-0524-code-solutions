/* exported swapChars */
function swapChars(firstIndex:number, secondIndex:number, string:string):string{
  const charArray = string.split('');
  if (
      firstIndex < 0 ||
      firstIndex >= charArray.length ||
      secondIndex < 0 ||
      secondIndex >= charArray.length
    ) {
      // If indices are out of bounds, return the original string
      return string;
    }
        [charArray[firstIndex], charArray[secondIndex]] = [
          charArray[secondIndex],
          charArray[firstIndex],
        ];
    return charArray.join('');
}
