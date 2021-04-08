const catbreed = process.argv.slice(2);
const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + catbreed, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
  const data = JSON.parse(body);
  if (!data.length > 0) {
    console.log("Entry not found!! Please type a breed of Cat");
  } else if (data.length > 0) {
    let catDescription = data.map((data) => data.description);
    console.log(catDescription.toString());
  }
});
