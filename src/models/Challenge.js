const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
	profId: Schema.Types.ObjectId,
	courseId: Schema.Types.ObjectId,
	level: Number
});

module.exports = mongoose.model("Challenge", challengeSchema);
