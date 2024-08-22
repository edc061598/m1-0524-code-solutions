/* exported omit */
function omit(source: any, keys: string[]): any {
  const result: any = {};

  for (const i in source) {
    if (!keys.includes(i)) {
      result[i] = source[i];
    }
  }

  return result;
}
