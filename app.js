const express = require('express');
const defaultResponse = require('./responses/defaultResponse');
const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.send(defaultResponse);
});

app.get("/name", (req, res) => {
  //chama a rota por nome da cidade
});

app.get("/coords", (req, res) => {
  //chama a rota pelas coordendadas
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
})

module.exports = app;