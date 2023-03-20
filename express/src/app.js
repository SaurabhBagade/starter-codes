const routes = require('./routes');
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const cookieparser = require('cookie-parser');
const httpStatus = require("http-status");
const errorHandler = require("./middlewares/error");
const ApiError = require("./utils/ApiError")


// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet())


// parse json request body
app.use(express.json());


// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


// request body compression
app.use(compression());


//we parse the cookies that came with request 
app.use(cookieparser());


// enable cors
app.use(cors());
app.options("*", cors());


app.use("/v1", routes)

app.use(errorHandler);

module.exports = app