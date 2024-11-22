/* exported lastChars */
function lastChars(length:number, string: string): string {
  if(length <0){
    length = 0;
  }
  if(length > string.length){
    length = string.length;
  }

  return string.substring(string.length - length);
}
