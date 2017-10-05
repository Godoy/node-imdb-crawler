# node-imdb-crawler
 [![Code Climate](https://codeclimate.com/github/tashrafy/node-imdb-crawler/badges/gpa.svg)](https://codeclimate.com/github/tashrafy/node-imdb-crawler)

## Example
```
const CrawlerImdb = require('node-imdb-crawler');

let imdb_code = "tt0944947";
let imdb_crawler = new CrawlerImdb(imdb_code);

imdb_crawler.get_basic(function(data) {
  console.log("Serie:");
  console.log(data);
});
```

## Run test
`npm test`

## Run example:
`node example/example.js`
