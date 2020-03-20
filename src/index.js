const express = require("express");
// const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes");

// Init express app
const app = express();

// Logging
// app.use(morgan("tiny"));

// Security
app.use(helmet());

// CORS
app.use(cors());

// JSON parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes.user); // In general used for login/signup
app.use("/challege", routes.challege);
app.use("/course", routes.course);
app.use("/question", routes.question);

const port = process.env.PORT || 1916;

server.listen(port, () => {
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${port}...`
	);
});
