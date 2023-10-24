class Media {
  static totalMediaCount = 0;
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.instanceID = ++Media.totalMediaCount;
  }
  summary() {
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
  }
}

module.exports = Media;
