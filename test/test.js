'use strict'

const expect = require('chai').expect
const CrawlerImdb = require('../index')
const imdbCode = 'tt0944947'

let imdbCrawler = new CrawlerImdb(imdbCode)

describe('#getBasic', function () {
  this.timeout(10000)
  let title = null

  before(function (done) {
    imdbCrawler.getBasic(function (data) {
      title = data
      done()
    })
  })

  it('should get title name', function () {
    expect(title.name).to.equal('Game of Thrones')
  })

  it('should get rating', function () {
    expect(title.rating).to.equal(9.5)
  })

  it('should get image', function () {
    expect(title.image).to.have.string('http')
    expect(title.image).to.match(/.(jpg|jpeg|png|gif)$/i)
  })

  it('should get genres', function () {
    expect(title.genres).to.eql(['Adventure', 'Drama', 'Fantasy', 'Romance'])
  })
})
