# node-imdb-crawler
A node library to gets TV Shows info from IMDB and returns collected data as a json.

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

## Running above example:
`node example/example.js`


# Contributing
Pull Requests are always welcome.

Ensure that before sending a PR:

You have tested the changes locally and they are functional.
Include the relevant issue number, if applicable.

## Running tests
`npm test`
