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
        if(body.cod!=200){
            return callback(body);
        }
        else{
            const city = new City(body.id, body.coord.lat, body.coord.lon, body.name, body.main.temp, body.main.humidity, body.cod);
            return callback(city);
        }
    });
}

module.exports = callCityFromName;