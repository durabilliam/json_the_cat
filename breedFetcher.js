const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body);
    if (error) {
      console.log(error.message);
    }
    const data = JSON.parse(body);
    //let catDescription = data.map((data) => data.description);
    //desc = catDescription.toString();
    if (data[0]) {
      callback(null, data[0].description);
    } else callback('cat does not exist!!!');
  });
};

module.exports = {fetchBreedDescription};

