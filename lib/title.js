class Title {
  constructor (imdbId) {
    this.imdb_id = imdbId
    this.genres = []
  }

  setName (name) {
    this.name = name.trim()
  }

  setRating (rating) {
    this.rating = parseFloat(rating)
  }

  setImage (image) {
    this.image = image
  }

  addGenre (genre) {
    var _genre = genre.trim()
    this.genres.push(_genre)
  }

  setEpisodes (eps) {
    this.episodes = eps
  }
}

module.exports = Title
