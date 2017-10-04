# node-imdb-crawler

[![Code Climate](https://codeclimate.com/github/Godoy/node-imdb-crawler/badges/gpa.svg)](https://codeclimate.com/github/Godoy/node-imdb-crawler)
[![Test Coverage](https://codeclimate.com/github/Godoy/node-imdb-crawler/badges/coverage.svg)](https://codeclimate.com/github/Godoy/node-imdb-crawler/coverage)
[![Issue Count](https://codeclimate.com/github/Godoy/node-imdb-crawler/badges/issue_count.svg)](https://codeclimate.com/github/Godoy/node-imdb-crawler)

## Example

```js
const CrawlerImdb = require('node-imdb-crawler');

let imdb_code = "tt0944947";
let imdb_crawler = new CrawlerImdb(imdb_code);

imdb_crawler.get_basic(function(data) {
  console.log("Serie:");
  console.log(data);
});
```

## Run test

```sh
npm test
```

## Run example

```sh
node example/example.js
```
