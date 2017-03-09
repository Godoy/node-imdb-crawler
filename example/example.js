// var imdb_crawler = require('../index');
const CrawlerImdb = require('../lib/node-imdb-crawler');

let imdb_code = "tt0944947";
let imdb_crawler = new CrawlerImdb(imdb_code);

imdb_crawler.get_basic(function(data) {
  console.log("Serie:");
  console.log(data);
})
