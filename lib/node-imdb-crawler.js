const Title = require('./title.js')
const Crawler = require('crawler')

class CrawlerImdb {
  constructor (imdbId) {
    this.title = new Title(imdbId)
  }

  getBasic (callback) {
    var c = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback: (error, res, done) => {
        if (error) {
          console.log(error)
        } else {
          var $ = res.$

          this.title.setName($(".title_wrapper > h1[itemprop='name']").text())
          this.title.setRating($("span[itemprop='ratingValue']").text())
          this.title.setImage($("meta[property='og:image']").attr('content'))

          $("div[itemprop='genre'] a").each((index, element) => {
            this.title.addGenre($(element).text())
          })
        }
        done()
      }
    })

    c.queue('http://www.imdb.com/title/' + this.title.imdb_id)

    // when all requests are completed
    c.on('drain', () => {
      callback(this.title)
    })
  }
}

module.exports = CrawlerImdb
