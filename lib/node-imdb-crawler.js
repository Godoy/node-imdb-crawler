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
        } else if (res.statusCode === 404) {
          return console.log('Invalid title')
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

  getEpisodes (callback) {
    let seasonURLs = []
    let episodes = []

    const finish = () => {
      this.title.setEpisodes(episodes)
      callback(this.title.episodes)
    }

    const mainPageCrawler = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback: (error, res, done) => {
        if (error) {
          console.log(error)
        } else {
          var $ = res.$
          seasonURLs = $("div.seasons-and-year-nav div>a[href*='?season=']")
            .toArray()
            .map(el => $(el).attr('href'))

          if (seasonURLs.length === 0) {
            finish()
          } else {
            seasonURLs.forEach(url => {
              seasonCrawler.queue('http://www.imdb.com/' + url)
            })
          }
        }
        done()
      }
    })

    mainPageCrawler.queue('http://www.imdb.com/title/' + this.title.imdb_id)

    const seasonCrawler = new Crawler({
      maxConnections: 10,
      callback: (error, res, done) => {
        if (error) {
          console.log(error)
        } else {
          var $ = res.$

          episodes = [...episodes, ...$('div.list.detail.eplist > .list_item').toArray().map((el, index) => ({
            name: $(el).find('strong a').text(),
            season: parseInt(res.request.uri.query.slice(-1)),
            epNum: index + 1,
            airDate: $(el).find('div.airdate').text().trim(),
            summary: $(el).find('div.item_description').text().trim(),
            image: $(el).find('div.image img').attr('src')
          }))]

          episodes = episodes.sort((a, b) => {
            if (a.season < b.season) {
              return -1
            } else if (a.season > b.season) {
              return 1
            } else if (a.epNum < b.epNum) {
              return -1
            } else if (a.epNum > b.epNum) {
              return 1
            } else {
              return 0
            }
          })
        }
        done()
      }
    })

    // when all requests are completed
    seasonCrawler.on('drain', finish)
  }
}

module.exports = CrawlerImdb
