/* exported pick */
function pick(source: any, keys: string[]): any {
  let result: any = {};
  for (const key in source) {
    if (keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
