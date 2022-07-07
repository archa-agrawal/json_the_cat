const request = require('request');

const breedName = process.argv;

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName[2];

request(url, (err, response, body) => {

  if (err) {
    console.log(err);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not found');
    } else {
      console.log(data[0].description);
    }
  }
});