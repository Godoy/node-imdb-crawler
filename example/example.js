var imdb_crawler = require('../index');
console.log("example");

var series_got = imdb_crawler.getTitleByImdbId("tt0944947")

console.log(series_got.get_basic());
