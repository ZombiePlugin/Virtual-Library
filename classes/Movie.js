// import the Media class:
import Media from "./Media";
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }
  summary() {
    return `Title: ${this.title}, Director: ${this.director}, ${this.year}, Genre: ${this.genre},Duration: ${this.duration} ,Rating: ${this.rating}`;
  }
  static longestMovie(arrOfMovies) {
    let currentDuration = 0;
    let longestMovie;
    for (let i = 0; i < arrOfMovies.length; i++) {
      if (arrOfMovies[i].duration > currentDuration) {
        currentDuration = arrOfMovies[i].duration;
        longestMovie = arrOfMovies[i];
      }
    }
    return longestMovie;
  }
}
// don't change below
module.exports = Movie;
