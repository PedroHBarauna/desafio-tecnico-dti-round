const apiKey = b5e93b808524f0baa240d0dbc59c991c;
const unit = metric;
const https = require('https');

const callCityFromCoords = (callback, lat, lon) => {
    _EXTERNAL_URL_WITH_INFOS = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
    request()
}