/* exported getStudentNames */
function getStudentNames(students: any[]): unknown[] {
  const keys: any[] = [];
  for (const key in students) {
    keys.push(students[key]);
  }
  return keys;
}
