const Title = require('./title.js'),
      CrawlerBasic = require('./crawler/crawler_basic.js');

module.exports = {
  getTitleByImdbId: function (imdbId, callback) {
    // console.log("CrawlerBasic")
    // console.log(CrawlerBasic)
    return new CrawlerBasic(imdbId);
  }
};
