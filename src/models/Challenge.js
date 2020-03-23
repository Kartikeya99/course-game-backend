const mongoose = require("mongoose");
const Question = require("./Question");

const challengeSchema = new mongoose.Schema({
	courseId: String,
	name: String,
	attemptedBy: [{ userId: String, userName: String, marksObtained: Number }]
});

module.exports = mongoose.model("Challenge", challengeSchema);
