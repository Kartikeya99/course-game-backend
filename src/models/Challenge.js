const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
	courseId: mongoose.Schema.Types.ObjectId,
	name: String
});

module.exports = mongoose.model("Challenge", challengeSchema);
