const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./node_modules/swagger-autogen/swagger_output.json');

app.use(express.json());

app.listen(3000, () => {
    console.log(`App rodando`);
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

require('./src/endpoints')(app);