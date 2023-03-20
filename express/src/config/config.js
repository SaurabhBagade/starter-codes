
module.exports = {
    port: 8082,
    // Set mongoose configuration
    mongoose: {
        // makes url dynamic for testing
        url: "mongodb://127.0.0.1:27017",
        //  + (envVars.NODE_ENV === "test" ? "test" : "jobvibes"),
        options: {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    }
};
