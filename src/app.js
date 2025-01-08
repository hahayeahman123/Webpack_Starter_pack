import syHello from "./modules/syHello";
import User from "./modules/user";
import Student from "./modules/student";
import Books from "./modules/books";
//import Biblioteka from "./modules/Biblioteka";


syHello();
const userOne = new User(1, 'Mark', 'ashdjkh@gmail.com', 'sjkadh');
const studentOne = new Student(1, 'Jack', 'asdjkahsd@gmailc.om', 'ashdd', 'IT programming', 'aprc');
//console.log(userOne.getProfile());

// array destructor

let [firstname, lastname, hehe] = ['Jack', 'septiceye', 'hooohooo'];
hehe='yes';
//console.log(hehe);


// uzduotis 1

const bookOne= new Books('Haris Poteris', 'J.K. Rowling', 1997, 223);
  console.log(bookOne.getInfo())


// uzduotis 2

//const libraryOne = new Biblioteka('Harry Potter');

//console.log(libraryOne.addbook('Harry Potterr'));


