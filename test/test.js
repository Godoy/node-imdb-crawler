'use strict'

const expect = require('chai').expect
const CrawlerImdb = require('../index')
const imdbCode = 'tt0944947'
const imdbCodeMovie = 'tt6788942'

let imdbCrawler = new CrawlerImdb(imdbCode)
let imdbCrawlerNoEps = new CrawlerImdb(imdbCodeMovie)

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

describe('#getEpisodes', function () {
  this.timeout(10000)

  let episodes = null
  before(function (done) {
    imdbCrawler.getEpisodes(function (data) {
      episodes = data
      done()
    })
  })

  it('should get episode list', function () {
    expect(episodes).to.be.an.instanceof(Array)
  })

  it('should get info for single episode', function () {
    expect(episodes[0].name).to.have.string('Winter Is Coming')
    expect(episodes[0].season).to.equal(1)
    expect(episodes[0].epNum).to.equal(1)
    expect(episodes[0].airDate).to.have.string('17 Apr. 2011')
    expect(episodes[0].summary).to.have.string('Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon\'s place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.')
    expect(episodes[0].image).to.have.string('http')
    expect(episodes[0].image).to.match(/.(jpg|jpeg|png|gif)$/i)
  })
})

describe('#getEpisodesForMovie', function () {
  this.timeout(10000)

  let episodes = null

  before(function (done) {
    imdbCrawlerNoEps.getEpisodes(function (data) {
      episodes = data
      done()
    })
  })

  it('should return nothing if title has no episodes', function () {
    expect(episodes).to.be.an.instanceof(Array)
    expect(episodes).to.have.length(0)
  })
})
