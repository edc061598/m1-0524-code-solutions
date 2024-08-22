/* exported pick */
function pick(source: any, keys: string[]): any {
  const result: any = {};
  for (let i: number = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key in source) {
      if (source[key] !== undefined) {
        result[key] = source[key];
      }
    }
  }
  return result;
}
