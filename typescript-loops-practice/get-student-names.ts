/* exported getStudentNames */
interface Students {
  name: string;
}

function getStudentNames(students: Students[]): string[] {
  const keys: any[] = [];
  for (let i: number = 0; i < students.length; i++) {
    keys.push(students[i].name);
  }
  return keys;
}
