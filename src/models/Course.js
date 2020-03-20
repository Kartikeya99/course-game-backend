const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	profId: mongoose.Schema.Types.ObjectId,
	name: String
});

module.exports = mongoose.model("Course", challengeSchema);
