// import the Media class:
import Media from "./Media";
// create your Book class:
class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static highestRating(arrOfBooks) {
    let currentRating = 0;
    let longestBook;
    for (let i = 0; i < arrOfBooks.length; i++) {
      if (arrOfBooks[i].rating > currentRating) {
        currentRating = arrOfBooks[i].rating;
        longestBook = arrOfBooks[i];
      }
    }
    return longestBook;
  }
}
// don't change below
module.exports = Book;
