const mongoose = require("mongoose");
const Question = require("./Question");

const challengeSchema = new mongoose.Schema({
	courseId: String,
	name: String,
	attemptedBy: {
		type: [{ userId: String, userName: String, marksObtained: Number }],
		default: []
	}
});

module.exports = mongoose.model("Challenge", challengeSchema);
