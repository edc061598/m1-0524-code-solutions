/* exported getKeys */
function getKeys(object: any): any {
  const keys: any = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
