interface Book {
  title: string;
  author: string;
  libraryId: number;
}

const book1: Book = {
  title:'Goodnight Punpun',
  author:'Inio Asano',
  libraryId: 3353
};

const{title, author, libraryId} = book1;
console.log(title, author, libraryId);

const{title: booktitle, author: goodAuthor, libraryId:entry} = book1;
console.log(booktitle, goodAuthor, entry);

const{title:awesometitle, author:bestAuthor, libraryId:newEntry} = book1;
console.log(awesometitle, bestAuthor, newEntry);

console.log('The title of the book is ' + title + ', ' + 'the author is ' + author + ', ' + 'and the library id is ' + libraryId);

const book2: Book = {
  title: "Les Fleurs du mal",
  author: "Charles Baudelaire",
  libraryId: 2345
};

const{title:secondBook, author:secondAuthor, libraryId:secondEntry} = book2;


const{title: fleurs, author:charles, libraryId: anotherEntry} = book2;


const{title: du, author: baud, libraryId:lastEntry} = book2;


console.log(`The title of the book is ${secondBook}, the author is ${charles}, and the library id is ${lastEntry}`);

const library: Book[] = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];
const[book3, book4, book5] = library;
console.log(book3, book4, book5);

const [,,, book6] = library;
console.log(book6);
