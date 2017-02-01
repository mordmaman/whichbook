var request = require('request');
var parseString = require('xml2js').parseString;

request('https://www.goodreads.com/book/title.xml?key=M0mPzFH0hVT5EgajAgrA&title=Harry+Potter' , function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //var parsedData = JSON.parse(body);
    //console.log(body);  
    parseString(body, function (err, result) {
      var string = JSON.stringify(result);
      var object = JSON.parse(string)
        console.dir(object.GoodreadsResponse);
    });
  }
})