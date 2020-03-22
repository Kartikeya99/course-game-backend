const mongoose = require("mongoose");
const Question = require("./Question");

const challengeSchema = new mongoose.Schema({
	courseId: String,
	name: String
});

module.exports = mongoose.model("Challenge", challengeSchema);
