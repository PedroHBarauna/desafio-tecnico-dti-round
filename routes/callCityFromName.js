const request = require('request');
const City = require('../public/javascripts/City');
const apiKey = "b5e93b808524f0baa240d0dbc59c991c";
const unit = "metric";

const callCityFromName = (name, callback) => {
    _EXTERNAL_URL_WITH_INFOS = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=${unit}`
    request(_EXTERNAL_URL_WITH_INFOS, {json:true}, (err, res, body)=> {
        if(err){
            return callback(err);
        }
        const city = new City(body.id, body.coords.lat, body.coords.lon, body.name, body.main.temp, body.main.humidity);
        return callback(city);
    });
}

module.exports = callCityFromName;