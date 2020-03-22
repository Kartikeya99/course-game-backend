const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes/index");
const mongoose = require("mongoose");

// Init express app
const app = express();

// Init mongodb
mongoose.connect("mongodb://localhost:27018/test", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Logging
app.use(morgan("tiny"));

// Security
app.use(helmet());

// CORS
app.use(cors());

// JSON parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/user", routes.user); // In general used for login/signup
app.use("/challenge", routes.challenge);
app.use("/course", routes.course);
app.use("/question", routes.question);

const port = process.env.PORT || 1916;

app.listen(port, () => {
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${port}...`
	);
});
