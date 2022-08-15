const swaggerAutogen = require('swagger-autogen')();

const outputFile = './node_modules/swagger-autogen/swagger_output.json';
const endpointsFiles = ['./src/endpoints.js'];

swaggerAutogen(outputFile, endpointsFiles).then(()=>{
    require('./app.js');
});