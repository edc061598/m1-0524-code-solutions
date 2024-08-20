/* exported omit */
function omit(source:any, keys: string[]):any {
  const result: any = {};
  const allKeys = Object.keys(source);

  for (const key of allKeys) {
    if (!(key in keys)) {
      result[key] = source[key];
    }
  }

  return result;
}
