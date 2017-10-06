# node-imdb-crawler

[![Build Status](https://travis-ci.org/Godoy/node-imdb-crawler.svg?branch=master)](https://travis-ci.org/Godoy/node-imdb-crawler)
[![Code Climate](https://codeclimate.com/github/Godoy/node-imdb-crawler/badges/gpa.svg)](https://codeclimate.com/github/Godoy/node-imdb-crawler)
[![Test Coverage](https://codeclimate.com/github/Godoy/node-imdb-crawler/badges/coverage.svg)](https://codeclimate.com/github/Godoy/node-imdb-crawler/coverage)
[![Issue Count](https://codeclimate.com/github/Godoy/node-imdb-crawler/badges/issue_count.svg)](https://codeclimate.com/github/Godoy/node-imdb-crawler)
=======
A node library to gets TV Shows info from IMDB and returns collected data as a json.

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

## Running above example:

```sh
node example/example.js
```


# Contributing

Pull Requests are always welcome.

Ensure that before sending a PR:

You have tested the changes locally and they are functional.
Include the relevant issue number, if applicable.

## Running tests

```sh
npm test
```

# License
[MIT License](LICENSE) (c) 2017 Adriano Godoy
