const express = require('express');
const callCityFromCoords = require('./routes/callCityFromCoords');
const callDefaultRequest = require('./routes/callDefaultRequest');
const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.send(callDefaultRequest);
});

app.get("/name", (req, res) => {
  //chama a rota por nome da cidade
});

app.get("/coords", (req, res) => {
  const coords = req.body;
  callCityFromCoords(coords.lat, coords.lon, function(response){
    res.write(JSON.stringify(response));
    res.end();
  });
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
})

module.exports = app;