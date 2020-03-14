const express = require("express");
// const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");

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

const port = process.env.PORT || 1916;

server.listen(port, () => {
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${port}...`
	);
});
