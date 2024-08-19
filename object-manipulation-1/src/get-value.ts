/* exported getValue */
function getValue(object: any, key: string): any {
  for (const keys in object) {
    if (keys === key) {
      return object[keys];
    }
  }
}
