var request = require('request');
var parseString = require('xml2js').parseString;

request('https://www.goodreads.com/book/title.xml?key=M0mPzFH0hVT5EgajAgrA&title=Harry+Potter', function (error, response, body) {
  if (!error && response.statusCode == 200) { 
    parseString(body, function (err, result) {
        console.log(result.GoodreadsResponse.book[0].average_rating[0]);
    });
  }
})