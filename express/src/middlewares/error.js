
const config = require("../config/config");

/**
 * A custom error handler for keeping error format constant 
 * - We can also keep track of all error thrown by attaching DB
 * @param {Object} err - error given by express as default
 * @param {Object} req - request
 * @param {Object} res - response
 * @param {Object} next - passing control to next handler
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;

    res.locals.errorMessage = err.message;

    const response = {
        code: statusCode,
        message,
        ...(config.env === "development" && { stack: err.stack }),
    };

    if (config.env === "development") {
        console.error(err);
    }

    res.status(statusCode).send(response);
};

module.exports = errorHandler