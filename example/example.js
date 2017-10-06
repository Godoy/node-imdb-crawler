const CrawlerImdb = require('../lib/node-imdb-crawler')

let imdbCode = 'tt0944947'
let imdbCrawler = new CrawlerImdb(imdbCode)

imdbCrawler.getBasic(function (data) {
  console.log('Serie:')
  console.log(data)

  imdbCrawler.getEpisodes(function (data) {
    console.log(data)
  })
})
