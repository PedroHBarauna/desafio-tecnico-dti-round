const express = require('express');
const callCityFromCoords = require('./routes/callCityFromCoords');
const callCityFromName = require('./routes/callCityFromName');
const callDefaultRequest = require('./routes/callDefaultRequest');
const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.send(callDefaultRequest);
});

app.get("/name", (req, res) => {
  const city = req.body;
  callCityFromName(city.name, function(response){
    res.write(JSON.stringify(response));
    res.end();
  });
});

app.get("/coords", (req, res) => {
  const city = req.body;
  callCityFromCoords(city.lat, city.lon, function(response){
    res.write(JSON.stringify(response));
    res.end();
  });
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
})

module.exports = app;