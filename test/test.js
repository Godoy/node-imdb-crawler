'use strict';

var expect = require('chai').expect;
var imdb_crawler = require('../index');
var CrawlerBasic = require('../lib/crawler/crawler_basic.js');

describe('#getTitleByImdbId', function() {

    it('should get title name', function(done) {
        var series_got = new CrawlerBasic("tt0944947"); //imdb_crawler.getTitleByImdbId("tt0944947")
        var basic = series_got.get_basic()
        // console.log(require('util').inspect(series_got, { depth: null }));
        console.log(require('util').inspect(basic, { depth: null }));
        series_got.then(function() {
            expect(series_got).to.equal('Game of Thrones');
        });
    });

});
