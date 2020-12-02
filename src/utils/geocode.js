const request = require('request');

const geocode = (address, callback) => {
  if (!address) {
    return console.log('Please enter a location.');
  }
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaG92ZWoiLCJhIjoiY2todmJ1ZGduMGVpMTJ5bWxnazJlamJwZiJ9.6kN7xtJc0B8Wyli0gomNrg&limit=1';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services.');
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.');
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode;