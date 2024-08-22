/* exported invert */
function invert(source:any):any {
  const result:any  = {};

  for (const key in source) {
    if (source[key] !== undefined) {
      // Ensure the value is defined
      result[source[key]] = key;
    }
  }

  return result;
}
