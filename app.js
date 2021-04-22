const express = require("express");
const swaggerJsDoc = require('./swagger.json');
const swaggerUi = require("swagger-ui-express");
const userRoutes = require('./Routes/user');
const bodyParser = require('body-parser');

const app = express();


const options = {

}

app.use(bodyParser.json())
app.use(userRoutes)

app.use('/api-docs',swaggerUi.serve)
app.use('/api-docs',swaggerUi.setup(swaggerJsDoc))

app.listen(8000,() => {
    console.log("backend server is running...");
})