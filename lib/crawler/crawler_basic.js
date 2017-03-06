class CrawlerBasic {

  constructor(imdb_id) {
    this.imdb_id = imdb_id;
  }

  get_basic() {
    let Crawler = require("crawler");
    // const url = require('url');
    console.log("dentro do construtor");

    var c = new Crawler({
        maxConnections : 10,
        // This will be called for each crawled page
        callback : function (error, res, done) {
          console.log("FUNCIONOU")
          if(error){
              console.log(error);
          }else{
              var $ = res.$;
              // $ is Cheerio by default
              //a lean implementation of core jQuery designed specifically for the server
              console.log($("h1").text());
          }
          done();
        }
    });


    // console.log("aqui");
    // c.queue([{
    //   uri: 'http://godoy.net.br/',
    //   jQuery: false,
    //   // The global callback won't be called
    //   callback: function (error, res, done) {
    //       if(error){
    //           console.log(error);
    //       }else{
    //           console.log('Grabbed', res.body.length, 'bytes');
    //       }
    //       done();
    //   }
    // }]);


    c.queue('http://www.imdb.com/title/' + this.imdb_id);

  }
}


module.exports = CrawlerBasic;
