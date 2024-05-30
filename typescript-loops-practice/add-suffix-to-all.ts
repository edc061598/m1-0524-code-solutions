/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): any {
  const newArray: string[] = [];
  for (let i: number = 0; i < words.length; i++) {
    const suffixWord = words[i] + suffix;
    newArray.push(suffixWord);
  }
  return newArray;
}
