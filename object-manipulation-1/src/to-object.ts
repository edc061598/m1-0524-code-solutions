/* exported toObject */

function toObject(keyValuePair: [key: string, value: any]): any {
  const [key, value] = keyValuePair;
  return { [key]: value };
}
