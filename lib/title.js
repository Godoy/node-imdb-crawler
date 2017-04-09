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

  setImage(image) {
    this.image = image;
  }
}

module.exports = Title;
