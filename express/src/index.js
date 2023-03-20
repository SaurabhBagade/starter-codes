const mongoose = require("mongoose");
const app = require('./app')
const config = require("./config/config")

// connect to mongoose and then start the app
mongoose.connect(config.mongoose.url, config.mongoose.options)
	.then(() => {
		console.log('MongoDB connection established...')
		app.listen(config.port, () => {
			console.log(`Server running at port: ${config.port}`);
		});
	})
	.catch((error) => console.error("MongoDB connection failed:", error.message))


