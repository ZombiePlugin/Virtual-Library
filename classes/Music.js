// import the Media class:
import Media from "./Media";
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, ${this.year}, Genre: ${this.genre},Length: ${this.length}`;
  }
  static shortestAlbum(arrOfMusic) {
    let currentDuration = 10000;
    let shortestSong;
    for (let i = 0; i < arrOfMusic.length; i++) {
      if (arrOfMusic[i].length < currentDuration) {
        currentDuration = arrOfMusic[i].length;
        shortestSong = arrOfMusic[i];
      }
    }
    return shortestSong;
  }
}
// don't change below
module.exports = Music;
