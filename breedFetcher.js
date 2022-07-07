const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, cb) => {
  request(url + breedName, (err, response, body) => {
    let description;
    if (body) {
      const bodyJson = JSON.parse(body);
      if (bodyJson.length > 0) {
        description = bodyJson[0].description;
      } else {
        err = "breed not found";
      }
    }
    
    cb(err, description);
  });
};

  
module.exports = fetchBreedDescription;