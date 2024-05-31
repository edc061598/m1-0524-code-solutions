'use strict';
function getStudentNames(students) {
  const keys = [];
  for (let i = 0; i < students.length; i++) {
    keys.push(students[i].name);
  }
  return keys;
}
