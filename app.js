const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`App rodando`);
})

require('./src/endpoints')(app);

module.exports = app;