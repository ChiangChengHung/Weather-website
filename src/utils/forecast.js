const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e65a6650437eaa5c2918d3822ed6be9c&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions}，目前溫度: ${body.current.temperature}，體感溫度: ${body.current.feelslike}`)
        }

    });
}

module.exports = forecast;