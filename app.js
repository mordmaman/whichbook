var parseString = require('xml2js').parseString;
var axios = require('axios')

axios.get('https://www.goodreads.com/book/title.xml?key=M0mPzFH0hVT5EgajAgrA&title=Harry+Potter')
  .then(function (response) {
    parseString(response.data, function (err, result) {
      console.log(result.GoodreadsResponse.book[0].average_rating[0]);
    });
  });


