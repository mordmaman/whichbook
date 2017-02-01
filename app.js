var request = require('request');
var parseString = require('xml2js').parseString;
var axios = require('axios')

// axios.get('https://www.goodreads.com/book/title.xml?key=M0mPzFH0hVT5EgajAgrA&title=Harry+Potter' )
//   .then(function(response){
//     console.log(response); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });  


axios.get('https://www.goodreads.com/book/title.xml?key=M0mPzFH0hVT5EgajAgrA&title=Harry+Potter')
  .then(function (response) {

    // console.log(response.data);

    parseString(response.data, function (err, result) {
      console.log(result.GoodreadsResponse.book[0].average_rating[0]);
    });
    // console.log(response); // ex.: { user: 'Your User'}
    // console.log(response.status); // ex.: 200
  });

// request('https://www.goodreads.com/book/title.xml?key=M0mPzFH0hVT5EgajAgrA&title=Harry+Potter', function (error, response, body) {
//   if (!error && response.statusCode == 200) { 
//     parseString(body, function (err, result) {
//         console.log(result.GoodreadsResponse.book[0].average_rating[0]);
//     });
//   }
// });

// var tag = document.querySelector("p");
// tag.textContent = "blah blah blah";

