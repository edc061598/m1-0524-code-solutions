/* exported getValues */
function getValues(object: any): any {
  const keys: any = [];
  for (const key in object) {
    keys.push(object[key]);
  }
  return keys;
}
