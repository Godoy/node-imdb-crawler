class Title {
  constructor(imdb_id) {
    this.imdb_id = imdb_id;
    this.genres = [];
  }

  setName(name) {
    this.name = name.trim();
  }

  setRating(rating) {
    this.rating = parseFloat(rating);
  }

  setImage(image) {
    this.image = image;
  }

  addGenre(genre) {
    var _genre = genre.trim();
    this.genres.push(_genre);
  }
}

module.exports = Title;
