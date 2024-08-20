/* exported setValue */
function setValue(object: any, key: string, value: number): void {
  console.log((object[key] = value));
}
