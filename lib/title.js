class Title {
  constructor(imdb_id) {
    this.imdb_id = imdb_id;
  }

  setName(name) {
    this.name = name.trim();
  }

  setRating(rating) {
    this.rating = parseFloat(rating);
  }
}

module.exports = Title;
