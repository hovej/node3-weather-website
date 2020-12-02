const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=cb7c2889803ed462d5e5957295328cfe&query=' + latitude + ',' + longitude + '-122.4233&units=f';
  request({url, json: true}, (error, { body }) => {
    if (error) {
      callback('Could not connect to weather services.')
    } else if (body.error) {
      callback('Invalid location, please try again.')
    } else {
      callback('As of ' + body.current.observation_time + ': ' + body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.')
    }
  })
}

module.exports = forecast;