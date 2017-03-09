'use strict';

const expect = require('chai').expect,
      CrawlerImdb = require('../index'),
      imdb_code = "tt0944947";

let imdb_crawler = new CrawlerImdb(imdb_code);

describe('#get_basic', function() {
  this.timeout(10000);
  let title = null;

  beforeEach(function(done){
    imdb_crawler.get_basic(function(data) {
      title = data;
      done();
    });
  });

  // describe('#name')
  it('should get title name', function() {
    expect(title.name).to.equal('Game of Thrones');
  });

  it('should get rating', function() {
    expect(title.rating).to.equal(9.5);
  });



});
