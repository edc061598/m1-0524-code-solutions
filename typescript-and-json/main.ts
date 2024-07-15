const books: string[] = ['isbn', 'title', 'author'];

const booksString = JSON.stringify(books);

console.log('typeof ', typeof booksString);

const student = '{"number": 1087, "name": "David"}';

console.log('typeof ', typeof student);

const studentObject = JSON.parse(student);
console.log('typeof ', typeof studentObject);
