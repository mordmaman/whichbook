var request = require('request');
request('https://www.goodreads.com/book/title.xml?key=M0mPzFH0hVT5EgajAgrA&title=Harry+Potter' , function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //var parsedData = JSON.parse(body);
    console.log(xmlDoc.getElementsByTagName("title"));  
  }
})