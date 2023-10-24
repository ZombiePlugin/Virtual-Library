class Media {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.totalMediaCount = 0;
  }
  summary() {
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
  }
}

module.exports = Media;
