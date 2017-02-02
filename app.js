var parseString = require('xml2js').parseString;
var axios = require('axios');
var express = require('express');
var app = express();


app.get('/search', function(req, res) {
    axios.get('https://www.goodreads.com/book/title.xml?key=M0mPzFH0hVT5EgajAgrA&title=Harry+Potter')
    .then(function (response) {
      parseString(response.data, function (err, result) {
        console.log(result.GoodreadsResponse.book[0].average_rating[0]);
      });
    });
  });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

